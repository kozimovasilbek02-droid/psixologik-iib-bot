from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
from config import WEBAPP_URL

def get_language_kb():
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🇺🇿 O'zbek tili (Lotin)", callback_data="lang_lat")],
        [InlineKeyboardButton(text="🇺🇿 Ўзбек тили (Кирилл)", callback_data="lang_cyr")],
        [InlineKeyboardButton(text="🇷🇺 Русский язык", callback_data="lang_rus")]
    ])

# 📱 PASTKI DOIMIY MENYU TUGMALARI (REPLY KEYBOARD)
def get_reply_main_menu(lang: str = "lat"):
    texts = {
        "lat": {
            "start": "🚀 Testni Boshlash",
            "results": "📊 Mening Natijalarim",
            "criteria": "📋 Baholash Mezonlari",
            "lang": "🌐 Tilni O'zgartirish",
            "help": "ℹ️ Yo'riqnoma",
            "webapp": "🌐 Web Ilova"
        },
        "cyr": {
            "start": "🚀 Тестни Бошлаш",
            "results": "📊 Менинг Натижаларим",
            "criteria": "📋 Баҳолаш Мезонлари",
            "lang": "🌐 Тилни Ўзгартириш",
            "help": "ℹ️ Йўриқнома",
            "webapp": "🌐 Веб Илова"
        },
        "rus": {
            "start": "🚀 Начать Тестирование",
            "results": "📊 Мои Результаты",
            "criteria": "📋 Критерии Оценки",
            "lang": "🌐 Сменить Язык",
            "help": "ℹ️ Инструкция",
            "webapp": "🌐 Web App"
        }
    }
    t = texts.get(lang, texts["lat"])
    
    keyboard = [
        [KeyboardButton(text=t["start"]), KeyboardButton(text=t["results"])],
        [KeyboardButton(text=t["criteria"]), KeyboardButton(text=t["lang"])],
        [KeyboardButton(text=t["help"])]
    ]
    
    if WEBAPP_URL:
        keyboard[2].append(KeyboardButton(text=t["webapp"], web_app=WebAppInfo(url=WEBAPP_URL)))
        
    return ReplyKeyboardMarkup(keyboard=keyboard, resize_keyboard=True, persistent=True)

# 📱 TEST VAQTIDAGI PASTKI TUGMALAR
def get_reply_quiz_menu(lang: str = "lat"):
    texts = {
        "lat": {"finish": "🏁 Testni Yakunlash", "stop": "🛑 Testni Bekor Qilish"},
        "cyr": {"finish": "🏁 Тестни Якунлаш", "stop": "🛑 Тестни Бекор Қилиш"},
        "rus": {"finish": "🏁 Завершить Тест", "stop": "🛑 Отменить Тест"}
    }
    t = texts.get(lang, texts["lat"])
    return ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text=t["finish"]), KeyboardButton(text=t["stop"])]
        ],
        resize_keyboard=True,
        persistent=True
    )

def get_main_menu_kb(lang: str = "lat"):
    texts = {
        "lat": {"start": "🚀 Testni Boshlash (Chatda)", "webapp": "🌐 Web Ilovada Testni Ochish", "results": "📊 Mening Natijalarim"},
        "cyr": {"start": "🚀 Тестни Бошлаш (Чатда)", "webapp": "🌐 Веб Иловада Тестни Очиш", "results": "📊 Менинг Натижаларим"},
        "rus": {"start": "🚀 Начать Тест (В чате)", "webapp": "🌐 Открыть в Web App", "results": "📊 Мои Результаты"}
    }
    t = texts.get(lang, texts["lat"])
    
    inline_buttons = [
        [InlineKeyboardButton(text=t["start"], callback_data="start_quiz")]
    ]
    
    if WEBAPP_URL:
        inline_buttons.append([InlineKeyboardButton(text=t["webapp"], web_app=WebAppInfo(url=WEBAPP_URL))])
        
    inline_buttons.append([InlineKeyboardButton(text=t["results"], callback_data="my_results")])
    return InlineKeyboardMarkup(inline_keyboard=inline_buttons)

def get_options_kb(options_count: int, allow_skip: bool = True, lang: str = "lat"):
    letters = ["A", "B", "C", "D", "E"]
    buttons = []
    
    # 2 option buttons per row
    row = []
    for i in range(options_count):
        letter = letters[i] if i < len(letters) else str(i + 1)
        row.append(InlineKeyboardButton(text=f"🔘 {letter}", callback_data=f"ans_{i}"))
        if len(row) == 2:
            buttons.append(row)
            row = []
    if row:
        buttons.append(row)
        
    action_row = []
    if allow_skip:
        skip_text = {
            "lat": "O'tkazib yuborish ↷",
            "cyr": "Ўтказиб юбориш ↷",
            "rus": "Пропустить ↷"
        }
        action_row.append(InlineKeyboardButton(text=skip_text.get(lang, skip_text["lat"]), callback_data="skip_question"))
        
    finish_text = {
        "lat": "🏁 Testni yakunlash",
        "cyr": "🏁 Тестни якунлаш",
        "rus": "🏁 Завершить тест"
    }
    action_row.append(InlineKeyboardButton(text=finish_text.get(lang, finish_text["lat"]), callback_data="confirm_finish_early"))
    
    buttons.append(action_row)
    return InlineKeyboardMarkup(inline_keyboard=buttons)

def get_confirm_finish_kb(lang: str = "lat"):
    texts = {
        "lat": {"yes": "✅ Ha, yakunlash", "no": "❌ Yo'q, davom etish"},
        "cyr": {"yes": "✅ Ҳа, якунлаш", "no": "❌ Йўқ, давом этиш"},
        "rus": {"yes": "✅ Да, завершить", "no": "❌ Нет, продолжить"}
    }
    t = texts.get(lang, texts["lat"])
    return InlineKeyboardMarkup(inline_keyboard=[
        [
            InlineKeyboardButton(text=t["yes"], callback_data="finish_test_now"),
            InlineKeyboardButton(text=t["no"], callback_data="resume_quiz")
        ]
    ])

def get_restart_kb(lang: str = "lat"):
    texts = {
        "lat": "🔄 Qaytadan topshirish",
        "cyr": "🔄 Қайтадан топшириш",
        "rus": "🔄 Пройти заново"
    }
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=texts.get(lang, texts["lat"]), callback_data="start_quiz")]
    ])
