import os
import sys
import time
import random
import asyncio
import logging
from typing import Dict, Any

from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import Command, CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.types import FSInputFile, CallbackQuery, Message, BotCommand, BotCommandScopeDefault

from aiogram.client.session.aiohttp import AiohttpSession

import config
import database
import keyboards
import questions_loader

# Ensure UTF-8 on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# Logging setup
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# FSM States
class QuizFSM(StatesGroup):
    choosing_language = State()
    entering_name = State()
    stage1_logic = State()
    stage2_images = State()
    stage3_psycho = State()

# Setup Bot Session (Auto-detect PythonAnywhere proxy)
proxy_url = None
if "PYTHONANYWHERE_DOMAIN" in os.environ or "PYTHONANYWHERE_SITE" in os.environ or os.path.exists("/home/UN618TON"):
    proxy_url = "http://proxy.server:3128"
    logger.info(f"🌐 PythonAnywhere Proxy ishlatilmoqda: {proxy_url}")

if proxy_url:
    session = AiohttpSession(proxy=proxy_url)
    bot = Bot(token=config.BOT_TOKEN, session=session)
else:
    bot = Bot(token=config.BOT_TOKEN)

dp = Dispatcher(storage=MemoryStorage())

# Load question pools
LOGIC_POOL = questions_loader.get_logic_questions()
IMAGE_POOL = questions_loader.get_image_questions()
PSYCHO_POOL = questions_loader.get_psycho_questions()

from aiohttp import web

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(CURRENT_DIR)
TEST_PLATFORM_DIR = os.path.join(BASE_DIR, "Test_Platformasi")
LOGO_PATH = os.path.join(CURRENT_DIR, "bot_logo.jpg")

def find_image_path(img_rel_path: str):
    if not img_rel_path:
        return None
    candidates = [
        os.path.join(CURRENT_DIR, img_rel_path),
        os.path.join(CURRENT_DIR, "assets", "images", os.path.basename(img_rel_path)),
        os.path.join(CURRENT_DIR, "Test_Platformasi", img_rel_path),
        os.path.join(TEST_PLATFORM_DIR, img_rel_path),
    ]
    for p in candidates:
        if os.path.exists(p):
            return p
    return None

STAGE1_TIME_LIMIT = 5 * 60     # 5 daqiqa (300 sek)
STAGE2_TIME_LIMIT = 5 * 60     # 5 daqiqa (300 sek)
STAGE3_TIME_LIMIT = 45 * 60    # 45 daqiqa (2700 sek)

def get_text(dict_obj: Dict[str, str], lang: str) -> str:
    if not isinstance(dict_obj, dict):
        return str(dict_obj)
    return dict_obj.get(lang, dict_obj.get("lat", ""))

def format_time(seconds: int) -> str:
    mins = seconds // 60
    secs = seconds % 60
    return f"{mins:02d}:{secs:02d}"

# -------------------------------------------------------------
# COMMAND REGISTRATION (MENU BUTTON)
# -------------------------------------------------------------
async def setup_bot_commands(bot: Bot):
    commands = [
        BotCommand(command="start", description="🚀 Bosh menyu / Tilni tanlash"),
        BotCommand(command="test", description="🎯 Yangi testni boshlash"),
        BotCommand(command="results", description="📊 Mening natijalarim tarixi"),
        BotCommand(command="criteria", description="📋 Baholash mezonlari va o'tish ballari"),
        BotCommand(command="language", description="🌐 Til va alifboni o'zgartirish"),
        BotCommand(command="help", description="ℹ️ Yo'riqnoma va qoidalar"),
        BotCommand(command="stop", description="🛑 Joriy testni bekor qilish"),
    ]
    await bot.set_my_commands(commands, scope=BotCommandScopeDefault())
    logger.info("✅ Bot buyruqlari menyuga muvaffaqiyatli o'rnatildi!")

# -------------------------------------------------------------
# COMMAND & MENU HANDLERS
# -------------------------------------------------------------
@dp.message(CommandStart())
async def cmd_start(message: Message, state: FSMContext):
    await state.clear()
    welcome_text = (
        "👋 **Assalomu alaykum! Psixologik va Kognitiv Baholash Platformasi botiga xush kelibsiz.**\n\n"
        "Iltimos, test topshirish uchun qulay til va alifboni tanlang:\n"
        "Пожалуйста, выберите язык для прохождения теста:"
    )
    if os.path.exists(LOGO_PATH):
        try:
            photo = FSInputFile(LOGO_PATH)
            await message.answer_photo(photo, caption=welcome_text, reply_markup=keyboards.get_language_kb(), parse_mode="Markdown")
        except Exception as e:
            logger.warning(f"Rasm yuklashda xatolik, matn ko'rinishida yuborilmoqda: {e}")
            await message.answer(welcome_text, reply_markup=keyboards.get_language_kb(), parse_mode="Markdown")
    else:
        await message.answer(welcome_text, reply_markup=keyboards.get_language_kb(), parse_mode="Markdown")

@dp.message(Command("test"))
@dp.message(F.text.in_(["🚀 Testni Boshlash", "🚀 Тестни Бошлаш", "🚀 Начать Тестирование"]))
async def cmd_test(message: Message, state: FSMContext):
    await state.clear()
    with database.get_db() as conn:
        user_info = conn.execute("SELECT * FROM users WHERE user_id = ?", (message.from_user.id,)).fetchone()
        
    if user_info and user_info["full_name"]:
        lang = user_info["language"] or "lat"
        await state.update_data(lang=lang, full_name=user_info["full_name"])
        prompt_card = {
            "lat": f"👤 **Nomzod:** {user_info['full_name']}\n\nTestni boshlash uchun quyidagi tugmani bosing:",
            "cyr": f"👤 **Номзод:** {user_info['full_name']}\n\nТестни бошлаш учун қуйидаги тугмани босинг:",
            "rus": f"👤 **Кандидат:** {user_info['full_name']}\n\nЧтобы начать тест, нажмите кнопку ниже:"
        }
        await message.answer(prompt_card.get(lang, prompt_card["lat"]), reply_markup=keyboards.get_main_menu_kb(lang), parse_mode="Markdown")
    else:
        await cmd_start(message, state)

@dp.message(Command("results"))
@dp.message(F.text.in_(["📊 Mening Natijalarim", "📊 Менинг Натижаларим", "📊 Мои Результаты"]))
async def cmd_results(message: Message, state: FSMContext):
    rows = database.get_user_results(message.from_user.id)
    if not rows:
        await message.answer("ℹ️ Siz hali birorta ham test topshirmagansiz. Test topshirish uchun /test buyrug'ini bering.")
        return
        
    res_text = "📊 **Sizning Natijalaringiz Tarixi:**\n\n"
    for r in rows[:10]:
        status = "🎉 O'tdi" if r["is_passed"] else "❌ O'tmadi"
        res_text += (
            f"📅 **Sana:** {r['completed_at'][:16]}\n"
            f"   • 1-Bosqich (Mantiq): {r['stage1_score']}/5\n"
            f"   • 2-Bosqich (Rasmli): {r['stage2_score']}/5\n"
            f"   • 3-Bosqich: {r['stage3_part1_score']}/15 | {r['stage3_part2_score']}/71\n"
            f"   • Xulosa: **{status}**\n\n"
        )
    await message.answer(res_text, parse_mode="Markdown")

@dp.message(Command("criteria"))
@dp.message(F.text.in_(["📋 Baholash Mezonlari", "📋 Баҳолаш Мезонлари", "📋 Критерии Оценки"]))
async def cmd_criteria(message: Message):
    criteria_text = (
        "📋 **Baholash Mezonlari va O'tish Ballari:**\n\n"
        "1️⃣ **1-Bosqich (Mantiqiy savollar):**\n"
        "   • Jami: 5 ta savol (Vaqt: 5 daqiqa)\n"
        "   • **O'tish bali: kamida 2 ta to'g'ri (>= 2)**\n\n"
        "2️⃣ **2-Bosqich (Rasmli mantiqiy savollar):**\n"
        "   • Jami: 5 ta savol (Vaqt: 5 daqiqa)\n"
        "   • **O'tish bali: kamida 2 ta to'g'ri (>= 2)**\n\n"
        "3️⃣ **3-Bosqich (Psixologik profil tahlili):**\n"
        "   • Jami: 86 ta savol (Vaqt: 45 daqiqa)\n"
        "   • **1-Qism (1–15): kamida 4 ta to'g'ri (>= 4)**\n"
        "   • **2-Qism (16–86): kamida 40 ta to'g'ri (>= 40)**\n\n"
        "🎯 *Barcha 3 ta bosqich talablari to'liq bajarilgandagina nomzod testdan muvaffaqiyatli o'tgan hisoblanadi!*"
    )
    await message.answer(criteria_text, parse_mode="Markdown")

@dp.message(Command("language"))
@dp.message(F.text.in_(["🌐 Tilni O'zgartirish", "🌐 Тилни Ўзгартириш", "🌐 Сменить Язык"]))
async def cmd_language(message: Message, state: FSMContext):
    await message.answer("🌐 Qulay til va alifboni tanlang / Выберите язык:", reply_markup=keyboards.get_language_kb())

@dp.message(Command("help"))
@dp.message(F.text.in_(["ℹ️ Yo'riqnoma", "ℹ️ Йўриқнома", "ℹ️ Инструкция"]))
async def cmd_help(message: Message):
    help_text = (
        "ℹ️ **Botdan Foydalanish Yo'riqnomasi:**\n\n"
        "🔹 **Testni Boshlash** — 3 bosqichli testni boshlash\n"
        "🔹 **Mening Natijalarim** — O'tgan testlar hisoboti\n"
        "🔹 **Baholash Mezonlari** — O'tish ballari va vaqtlar\n"
        "🔹 **Tilni O'zgartirish** — Lotin, Kirill yoki Rus tili\n"
        "🔹 **Testni Yakunlash** — Testni muddatidan oldin yakunlab natijani hisoblash\n\n"
        "💡 *Pastki doimiy tugmalar orqali xohlagan vaqtda kerakli bo'limga o'tishingiz mumkin.*"
    )
    await message.answer(help_text, parse_mode="Markdown")

@dp.message(Command("stop"))
@dp.message(F.text.in_(["🛑 Testni Bekor Qilish", "🛑 Тестни Бекор Қилиш", "🛑 Отменить Тест"]))
async def cmd_stop(message: Message, state: FSMContext):
    current_state = await state.get_state()
    data = await state.get_data()
    lang = data.get("lang", "lat")
    
    if current_state:
        await state.clear()
        await message.answer(
            "🛑 **Joriy test jarayoni bekor qilindi.**",
            reply_markup=keyboards.get_reply_main_menu(lang),
            parse_mode="Markdown"
        )
    else:
        await message.answer(
            "ℹ️ Hozirda faol test mavjud emas.",
            reply_markup=keyboards.get_reply_main_menu(lang)
        )

@dp.message(F.text.in_(["🏁 Testni Yakunlash", "🏁 Тестни Якунлаш", "🏁 Завершить Тест"]))
async def handle_reply_finish(message: Message, state: FSMContext):
    current_state = await state.get_state()
    data = await state.get_data()
    lang = data.get("lang", "lat")
    
    if current_state in [QuizFSM.stage1_logic.state, QuizFSM.stage2_images.state, QuizFSM.stage3_psycho.state]:
        confirm_texts = {
            "lat": "⚠️ **Haqiqatan ham testni muddatidan oldin yakunlab, natijalarni ko'rmoqchimisiz?**",
            "cyr": "⚠️ **Ҳақиқатан ҳам тестни муддатидан олдин якунлаб, натижаларни кўрмоқчимисиз?**",
            "rus": "⚠️ **Вы действительно хотите завершить тест досрочно и увидеть результаты?**"
        }
        await message.answer(confirm_texts.get(lang, confirm_texts["lat"]), reply_markup=keyboards.get_confirm_finish_kb(lang), parse_mode="Markdown")
    else:
        await message.answer("ℹ️ Hozirda topshirilayotgan test mavjud emas. Yangi test uchun pastdagi 🚀 **Testni Boshlash** tugmasini bosing.")

# -------------------------------------------------------------
# LANGUAGE & REGISTRATION
# -------------------------------------------------------------
@dp.callback_query(F.data.startswith("lang_"))
async def handle_language_choice(callback: CallbackQuery, state: FSMContext):
    lang = callback.data.replace("lang_", "")
    await state.update_data(lang=lang)
    
    prompt_names = {
        "lat": "📝 Iltimos, **Ism va Familiyangizni** kiriting (Masalan: Azizbek Aliyev):",
        "cyr": "📝 Илтимос, **Исм ва Фамилиянгизни** киритинг (Масалан: Азизбек Алиев):",
        "rus": "📝 Пожалуйста, введите ваше **Имя и Фамилию** (Например: Азизбек Алиев):"
    }
    
    try:
        await callback.message.delete()
    except Exception:
        pass
    await callback.message.answer(prompt_names.get(lang, prompt_names["lat"]), parse_mode="Markdown")
    await state.set_state(QuizFSM.entering_name)

@dp.message(QuizFSM.entering_name)
async def handle_name_input(message: Message, state: FSMContext):
    full_name = message.text.strip()
    data = await state.get_data()
    lang = data.get("lang", "lat")
    
    database.save_or_update_user(message.from_user.id, message.from_user.username or "", full_name, lang)
    await state.update_data(full_name=full_name)
    
    welcome_card = {
        "lat": (
            f"👤 **Nomzod:** {full_name}\n"
            f"🌐 **Tanlangan til:** O'zbek tili (Lotin)\n\n"
            f"📋 **Test 3 ta ketma-ket bosqichdan iborat:**\n"
            f"1️⃣ **1-Bosqich:** 5 ta Mantiqiy savol (5 daqiqa | Min 2 ta to'g'ri)\n"
            f"2️⃣ **2-Bosqich:** 5 ta Rasmli savol (5 daqiqa | Min 2 ta to'g'ri)\n"
            f"3️⃣ **3-Bosqich:** 86 ta Psixologik savol (45 daqiqa | 1–15 dan min 4 ta, 16–86 dan min 40 ta)\n\n"
            f"⏱️ *Savollar davomida qolgan vaqt xabar tepasida ko'rsatib boriladi.*\n\n"
            f"Pastdagi tugmalardan foydalanib testni boshlashingiz mumkin:"
        ),
        "cyr": (
            f"👤 **Номзод:** {full_name}\n"
            f"🌐 **Танланган тил:** Ўзбек тили (Кирилл)\n\n"
            f"📋 **Тест 3 та кетма-кет босқичдан иборат:**\n"
            f"1️⃣ **1-Босқич:** 5 та Мантиқий савол (5 дақиқа | Мин 2 та тўғри)\n"
            f"2️⃣ **2-Босқич:** 5 та Расмли савол (5 дақиқа | Мин 2 та тўғри)\n"
            f"3️⃣ **3-Босқич:** 86 та Психологик савол (45 дақиқа | 1–15 дан мин 4 та, 16–86 дан мин 40 та)\n\n"
            f"⏱️ *Саволлар давомида қолган вақт хабар тепасида кўрсатиб борилади.*\n\n"
            f"Пастдаги тугмалардан фойдаланиб тестни бошлашингиз мумкин:"
        ),
        "rus": (
            f"👤 **Кандидат:** {full_name}\n"
            f"🌐 **Язык:** Русский\n\n"
            f"📋 **Тест состоит из 3 последовательных этапов:**\n"
            f"1️⃣ **Этап 1:** 5 логических вопросов (5 мин | Мин 2 правильных)\n"
            f"2️⃣ **Этап 2:** 5 вопросов с изображениями (5 мин | Мин 2 правильных)\n"
            f"3️⃣ **Этап 3:** 86 психологических вопросов (45 мин | 1–15 мин 4, 16–86 мин 40)\n\n"
            f"⏱️ *Оставшееся время будет отображаться в каждом вопросе.*\n\n"
            f"Вы можете начать тест с помощью кнопок ниже:"
        )
    }
    
    # Send persistent reply keyboard for bottom buttons!
    await message.answer(
        welcome_card.get(lang, welcome_card["lat"]),
        reply_markup=keyboards.get_reply_main_menu(lang),
        parse_mode="Markdown"
    )

@dp.callback_query(F.data == "my_results")
async def show_my_results(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    rows = database.get_user_results(callback.from_user.id)
    
    if not rows:
        no_res = {
            "lat": "ℹ️ Siz hali birorta ham test topshirmagansiz.",
            "cyr": "ℹ️ Сиз ҳали бирорта ҳам тест топширмагансиз.",
            "rus": "ℹ️ Вы еще не проходили тестирование."
        }
        await callback.answer(no_res.get(lang, no_res["lat"]), show_alert=True)
        return
        
    res_text = "📊 **Sizning Natijalaringiz Tarixi:**\n\n"
    for r in rows[:5]:
        status = "🎉 O'tdi" if r["is_passed"] else "❌ O'tmadi"
        res_text += (
            f"📅 **Sana:** {r['completed_at'][:16]}\n"
            f"   • 1-Bosqich: {r['stage1_score']}/5\n"
            f"   • 2-Bosqich: {r['stage2_score']}/5\n"
            f"   • 3-Bosqich: {r['stage3_part1_score']}/15 | {r['stage3_part2_score']}/71\n"
            f"   • Natija: **{status}**\n\n"
        )
    await callback.message.answer(res_text, parse_mode="Markdown")
    await callback.answer()

# WebApp Native Data Receiver
@dp.message(F.web_app_data)
async def handle_webapp_data(message: Message):
    try:
        import json
        payload = json.loads(message.web_app_data.data)
        full_name = payload.get("userName", message.from_user.full_name)
        s1 = payload.get("stage1Score", 0)
        s2 = payload.get("stage2Score", 0)
        s3_p1 = payload.get("stage3Part1Score", 0)
        s3_p2 = payload.get("stage3Part2Score", 0)
        is_passed = payload.get("isPassed", False)
        
        database.save_result(message.from_user.id, full_name, s1, s2, s3_p1, s3_p2, is_passed)
        
        verdict = "🏆 TABRIKLAYMIZ! SIZ TESTDAN O'TDINGIZ!" if is_passed else "⚠️ SIZ TESTDAN O'TA OLMADINGIZ"
        await message.answer(
            f"{verdict}\n\n"
            f"👤 **Nomzod:** {full_name}\n"
            f"1-Bosqich: {s1}/5 | 2-Bosqich: {s2}/5 | 3-Bosqich: {s3_p1}/15, {s3_p2}/71\n\n"
            f"✅ Natijalaringiz tizimda saqlandi!",
            parse_mode="Markdown"
        )
    except Exception as e:
        logger.error(f"Error handling WebApp data: {e}")

# -------------------------------------------------------------
# QUIZ ENGINE WITH TIME TRACKING
# -------------------------------------------------------------
@dp.callback_query(F.data == "start_quiz")
async def start_quiz_flow(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    
    # 1: Sample Stage 1 (5 logic questions)
    stage1_qs = random.sample(LOGIC_POOL, min(config.STAGE1_COUNT, len(LOGIC_POOL)))
    for q in stage1_qs:
        random.shuffle(q["options"])
        
    # 2: Sample Stage 2 (5 image questions)
    stage2_qs = random.sample(IMAGE_POOL, min(config.STAGE2_COUNT, len(IMAGE_POOL)))
    for q in stage2_qs:
        random.shuffle(q["options"])
        
    # 3: Stage 3 (86 psychological questions)
    stage3_qs = list(PSYCHO_POOL)
    
    now = time.time()
    await state.update_data(
        stage1_questions=stage1_qs, stage1_index=0, stage1_answers={}, stage1_start_time=now,
        stage2_questions=stage2_qs, stage2_index=0, stage2_answers={}, stage2_start_time=0,
        stage3_questions=stage3_qs, stage3_index=0, stage3_answers={}, stage3_start_time=0
    )
    
    await state.set_state(QuizFSM.stage1_logic)
    try:
        await callback.message.delete()
    except Exception:
        pass
        
    # Also update bottom keyboard to quiz menu
    await bot.send_message(
        callback.message.chat.id,
        "🏁 **Test boshlandi! Omad tilaymiz!**",
        reply_markup=keyboards.get_reply_quiz_menu(lang),
        parse_mode="Markdown"
    )
    await send_stage1_question(callback.message.chat.id, state)

async def send_stage1_question(chat_id: int, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    idx = data.get("stage1_index", 0)
    questions = data.get("stage1_questions", [])
    start_time = data.get("stage1_start_time", time.time())
    
    # Check timeout
    elapsed = int(time.time() - start_time)
    remaining = max(0, STAGE1_TIME_LIMIT - elapsed)
    
    if remaining <= 0 or idx >= len(questions):
        trans_msg = {
            "lat": "⏱️ **1-Bosqich yakunlandi!**\n\n🖼️ **2-Bosqich (Rasmli mantiqiy savollar - 5 daqiqa)** boshlanmoqda...",
            "cyr": "⏱️ **1-Босқич якунланди!**\n\n🖼️ **2-Босқич (Расмли мантиқий саволлар - 5 дақиқа)** бошланмоқда...",
            "rus": "⏱️ **Этап 1 завершен!**\n\n🖼️ Начинается **Этап 2 (Вопросы с изображениями - 5 мин)**..."
        }
        await bot.send_message(chat_id, trans_msg.get(lang, trans_msg["lat"]), parse_mode="Markdown")
        await state.update_data(stage2_start_time=time.time())
        await state.set_state(QuizFSM.stage2_images)
        await send_stage2_question(chat_id, state)
        return

    q = questions[idx]
    q_text = get_text(q["question"], lang)
    
    letters = ["A", "B", "C", "D", "E"]
    options_text = ""
    for i, opt in enumerate(q["options"]):
        options_text += f"\n**{letters[i]})** {get_text(opt['text'], lang)}"
        
    msg_body = (
        f"🧩 **1-Bosqich: Mantiqiy Savollar** ({idx + 1}/{len(questions)})\n"
        f"⏳ **Qolgan vaqt:** `{format_time(remaining)}`\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"❓ {q_text}\n"
        f"{options_text}"
    )
    
    await bot.send_message(chat_id, msg_body, reply_markup=keyboards.get_options_kb(len(q["options"]), True, lang), parse_mode="Markdown")

async def send_stage2_question(chat_id: int, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    idx = data.get("stage2_index", 0)
    questions = data.get("stage2_questions", [])
    start_time = data.get("stage2_start_time", time.time())
    
    # Check timeout
    elapsed = int(time.time() - start_time)
    remaining = max(0, STAGE2_TIME_LIMIT - elapsed)
    
    if remaining <= 0 or idx >= len(questions):
        trans_msg = {
            "lat": "⏱️ **2-Bosqich yakunlandi!**\n\n🧠 **3-Bosqich: Psixologik profil tahlili (86 ta savol - 45 daqiqa)** boshlanmoqda...",
            "cyr": "⏱️ **2-Босқич якунланди!**\n\n🧠 **3-Босқич: Психологик профил таҳлили (86 та савол - 45 дақиқа)** бошланмоқда...",
            "rus": "⏱️ **Этап 2 завершен!**\n\n🧠 Начинается **Этап 3: Психологический профиль (86 вопросов - 45 мин)**..."
        }
        await bot.send_message(chat_id, trans_msg.get(lang, trans_msg["lat"]), parse_mode="Markdown")
        await state.update_data(stage3_start_time=time.time())
        await state.set_state(QuizFSM.stage3_psycho)
        await send_stage3_question(chat_id, state)
        return

    q = questions[idx]
    q_text = get_text(q["question"], lang)
    
    letters = ["A", "B", "C", "D", "E"]
    options_text = ""
    for i, opt in enumerate(q["options"]):
        options_text += f"\n**{letters[i]})** {get_text(opt['text'], lang)}"
        
    caption = (
        f"🖼️ **2-Bosqich: Rasmli Savollar** ({idx + 1}/{len(questions)})\n"
        f"⏳ **Qolgan vaqt:** `{format_time(remaining)}`\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"❓ {q_text}\n"
        f"{options_text}"
    )
    
    img_rel_path = q.get("image", "")
    img_path = find_image_path(img_rel_path)
    
    if img_path and os.path.exists(img_path):
        try:
            photo = FSInputFile(img_path)
            await bot.send_photo(chat_id, photo, caption=caption, reply_markup=keyboards.get_options_kb(len(q["options"]), True, lang), parse_mode="Markdown")
        except Exception as e:
            logger.warning(f"Savol rasmini yuklashda xatolik: {e}")
            await bot.send_message(chat_id, caption, reply_markup=keyboards.get_options_kb(len(q["options"]), True, lang), parse_mode="Markdown")
    else:
        await bot.send_message(chat_id, caption, reply_markup=keyboards.get_options_kb(len(q["options"]), True, lang), parse_mode="Markdown")

async def send_stage3_question(chat_id: int, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    idx = data.get("stage3_index", 0)
    questions = data.get("stage3_questions", [])
    start_time = data.get("stage3_start_time", time.time())
    
    # Check timeout
    elapsed = int(time.time() - start_time)
    remaining = max(0, STAGE3_TIME_LIMIT - elapsed)
    
    if remaining <= 0 or idx >= len(questions):
        await calculate_and_send_results(chat_id, state)
        return

    q = questions[idx]
    q_text = get_text(q["question"], lang)
    
    part_label = "1-Qism (1–15)" if idx < 15 else "2-Qism (16–86)"
    
    letters = ["A", "B", "C", "D", "E"]
    options_text = ""
    for i, opt in enumerate(q["options"]):
        options_text += f"\n**{letters[i]})** {get_text(opt['text'], lang)}"
        
    msg_body = (
        f"🧠 **3-Bosqich: Psixologiya — {part_label}** ({idx + 1}/{len(questions)})\n"
        f"⏳ **Qolgan vaqt:** `{format_time(remaining)}`\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"❓ {q_text}\n"
        f"{options_text}"
    )
    
    await bot.send_message(chat_id, msg_body, reply_markup=keyboards.get_options_kb(len(q["options"]), False, lang), parse_mode="Markdown")

# -------------------------------------------------------------
# ANSWER, SKIP & FINISH HANDLERS
# -------------------------------------------------------------
@dp.callback_query(F.data.startswith("ans_"))
async def handle_answer_callback(callback: CallbackQuery, state: FSMContext):
    current_state = await state.get_state()
    ans_idx = int(callback.data.replace("ans_", ""))
    data = await state.get_data()
    
    if current_state == QuizFSM.stage1_logic.state:
        idx = data.get("stage1_index", 0)
        answers = data.get("stage1_answers", {})
        answers[str(idx)] = ans_idx
        await state.update_data(stage1_answers=answers, stage1_index=idx + 1)
        try:
            await callback.message.delete()
        except Exception:
            pass
        await send_stage1_question(callback.message.chat.id, state)
        
    elif current_state == QuizFSM.stage2_images.state:
        idx = data.get("stage2_index", 0)
        answers = data.get("stage2_answers", {})
        answers[str(idx)] = ans_idx
        await state.update_data(stage2_answers=answers, stage2_index=idx + 1)
        try:
            await callback.message.delete()
        except Exception:
            pass
        await send_stage2_question(callback.message.chat.id, state)
        
    elif current_state == QuizFSM.stage3_psycho.state:
        idx = data.get("stage3_index", 0)
        answers = data.get("stage3_answers", {})
        answers[str(idx)] = ans_idx
        await state.update_data(stage3_answers=answers, stage3_index=idx + 1)
        try:
            await callback.message.delete()
        except Exception:
            pass
        await send_stage3_question(callback.message.chat.id, state)

@dp.callback_query(F.data == "skip_question")
async def handle_skip_callback(callback: CallbackQuery, state: FSMContext):
    current_state = await state.get_state()
    data = await state.get_data()
    
    if current_state == QuizFSM.stage1_logic.state:
        idx = data.get("stage1_index", 0)
        await state.update_data(stage1_index=idx + 1)
        try:
            await callback.message.delete()
        except Exception:
            pass
        await send_stage1_question(callback.message.chat.id, state)
        
    elif current_state == QuizFSM.stage2_images.state:
        idx = data.get("stage2_index", 0)
        await state.update_data(stage2_index=idx + 1)
        try:
            await callback.message.delete()
        except Exception:
            pass
        await send_stage2_question(callback.message.chat.id, state)

# Early Finish Confirmation
@dp.callback_query(F.data == "confirm_finish_early")
async def handle_confirm_finish(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    confirm_texts = {
        "lat": "⚠️ **Haqiqatan ham testni muddatidan oldin yakunlab, natijalarni ko'rmoqchimisiz?**",
        "cyr": "⚠️ **Ҳақиқатан ҳам тестни муддатидан олдин якунлаб, натижаларни кўрмоқчимисиз?**",
        "rus": "⚠️ **Вы действительно хотите завершить тест досрочно и увидеть результаты?**"
    }
    await callback.message.reply(confirm_texts.get(lang, confirm_texts["lat"]), reply_markup=keyboards.get_confirm_finish_kb(lang), parse_mode="Markdown")
    await callback.answer()

@dp.callback_query(F.data == "finish_test_now")
async def handle_finish_now(callback: CallbackQuery, state: FSMContext):
    try:
        await callback.message.delete()
    except Exception:
        pass
    await calculate_and_send_results(callback.message.chat.id, state)

@dp.callback_query(F.data == "resume_quiz")
async def handle_resume_quiz(callback: CallbackQuery, state: FSMContext):
    try:
        await callback.message.delete()
    except Exception:
        pass
    await callback.answer("Davom etamiz! / Продолжаем!")

# -------------------------------------------------------------
# RESULTS CALCULATION & VERDICT
# -------------------------------------------------------------
async def calculate_and_send_results(chat_id: int, state: FSMContext):
    data = await state.get_data()
    lang = data.get("lang", "lat")
    full_name = data.get("full_name", "Foydalanuvchi")
    
    # 1: Stage 1 Score
    s1_qs = data.get("stage1_questions", [])
    s1_ans = data.get("stage1_answers", {})
    s1_score = 0
    for i, q in enumerate(s1_qs):
        chosen = s1_ans.get(str(i))
        if chosen is not None and chosen < len(q["options"]) and q["options"][chosen].get("is_correct") is True:
            s1_score += 1

    # 2: Stage 2 Score
    s2_qs = data.get("stage2_questions", [])
    s2_ans = data.get("stage2_answers", {})
    s2_score = 0
    for i, q in enumerate(s2_qs):
        chosen = s2_ans.get(str(i))
        if chosen is not None and chosen < len(q["options"]) and q["options"][chosen].get("is_correct") is True:
            s2_score += 1

    # 3: Stage 3 Scores (Part 1: 0..14, Part 2: 15..85)
    s3_qs = data.get("stage3_questions", [])
    s3_ans = data.get("stage3_answers", {})
    s3_p1_score = 0
    s3_p2_score = 0
    
    for i in range(min(15, len(s3_qs))):
        chosen = s3_ans.get(str(i))
        if chosen is not None and chosen < len(s3_qs[i]["options"]) and s3_qs[i]["options"][chosen].get("is_correct") is True:
            s3_p1_score += 1
            
    for i in range(15, len(s3_qs)):
        chosen = s3_ans.get(str(i))
        if chosen is not None and chosen < len(s3_qs[i]["options"]) and s3_qs[i]["options"][chosen].get("is_correct") is True:
            s3_p2_score += 1

    # Evaluation Criteria
    s1_pass = (s1_score >= config.STAGE1_MIN_PASS)
    s2_pass = (s2_score >= config.STAGE2_MIN_PASS)
    s3_p1_pass = (s3_p1_score >= config.STAGE3_PART1_MIN_PASS)
    s3_p2_pass = (s3_p2_score >= config.STAGE3_PART2_MIN_PASS)
    
    is_passed = (s1_pass and s2_pass and s3_p1_pass and s3_p2_pass)
    
    # Save to SQLite DB
    database.save_result(chat_id, full_name, s1_score, s2_score, s3_p1_score, s3_p2_score, is_passed)
    
    verdict_badge = "🏆 **TABRIKLAYMIZ! SIZ TESTDAN MUVAFFAQIYATLI O'TDINGIZ!**" if is_passed else "⚠️ **SIZ TESTDAN O'TA OLMADINGIZ**"
    
    results_msg = (
        f"{verdict_badge}\n\n"
        f"👤 **Nomzod:** {full_name}\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"1️⃣ **1-Bosqich (Mantiq):** {s1_score} / 5 ta ({'✅ O\'tdi' if s1_pass else '❌ Yiqildi'})\n"
        f"   *(Talab: kamida 2 ta)*\n\n"
        f"2️⃣ **2-Bosqich (Rasmli):** {s2_score} / 5 ta ({'✅ O\'tdi' if s2_pass else '❌ Yiqildi'})\n"
        f"   *(Talab: kamida 2 ta)*\n\n"
        f"3️⃣ **3-Bosqich (Psixologiya):**\n"
        f"   🔹 **1-Qism (1–15):** {s3_p1_score} / 15 ta ({'✅ O\'tdi' if s3_p1_pass else '❌ Yiqildi'})\n"
        f"      *(Talab: kamida 4 ta)*\n"
        f"   🔹 **2-Qism (16–86):** {s3_p2_score} / 71 ta ({'✅ O\'tdi' if s3_p2_pass else '❌ Yiqildi'})\n"
        f"      *(Talab: kamida 40 ta)*\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"🎯 **Umumiy Xulosa:** {'🎉 TAVSIYA ETILADI' if is_passed else '❌ Qayta topshirish tavsiya etiladi'}"
    )
    
    # Return main persistent reply keyboard
    await bot.send_message(
        chat_id,
        results_msg,
        reply_markup=keyboards.get_reply_main_menu(lang),
        parse_mode="Markdown"
    )
    await state.clear()

# -------------------------------------------------------------
# WEBHOOK & WEB SERVER (FOR 24/7 CLOUD HOSTING)
# -------------------------------------------------------------
from aiogram.webhook.aiohttp_server import SimpleRequestHandler, setup_application

WEBHOOK_PATH = "/webhook"
WEBHOOK_URL = os.environ.get("RENDER_EXTERNAL_URL") or os.environ.get("WEBHOOK_URL", "")

async def on_startup(bot: Bot):
    await setup_bot_commands(bot)
    if WEBHOOK_URL:
        full_webhook_url = f"{WEBHOOK_URL.rstrip('/')}{WEBHOOK_PATH}"
        await bot.set_webhook(full_webhook_url, drop_pending_updates=True)
        logger.info(f"🌐 Telegram Webhook muvaffaqiyatli o'rnatildi: {full_webhook_url}")
    else:
        logger.info("ℹ️ Webhook URL topilmadi, mahalliy rejim.")

async def on_shutdown(bot: Bot):
    logger.info("Bot to'xtatilmoqda...")
    if WEBHOOK_URL:
        await bot.delete_webhook()
    await bot.session.close()

async def health_check(request):
    return web.json_response({
        "status": "ok",
        "bot": "@psixologikIIBbot",
        "service": "Psixologik Test Platformasi Telegram Boti",
        "uptime": "24/7 active"
    })

def main():
    port = int(os.environ.get("PORT", 8080))
    app = web.Application()
    app.router.add_get("/", health_check)
    app.router.add_get("/health", health_check)
    
    if WEBHOOK_URL:
        # 🌐 Production Webhook Mode on Render
        webhook_requests_handler = SimpleRequestHandler(
            dispatcher=dp,
            bot=bot
        )
        webhook_requests_handler.register(app, path=WEBHOOK_PATH)
        dp.startup.register(on_startup)
        dp.shutdown.register(on_shutdown)
        setup_application(app, dp, bot=bot)
        logger.info(f"🚀 Render Webhook server {port}-portda ishga tushmoqda...")
        web.run_app(app, host="0.0.0.0", port=port)
    else:
        # 💻 Local Polling Mode
        async def run_local():
            await bot.delete_webhook(drop_pending_updates=True)
            await setup_bot_commands(bot)
            await dp.start_polling(bot)
        asyncio.run(run_local())

if __name__ == "__main__":
    main()
