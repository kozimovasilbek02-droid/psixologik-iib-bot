import os
import sys
import asyncio
import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from aiogram.types import Update as TgUpdate
import uvicorn

import bot as bot_module

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="Psixologik IIB Bot", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "bot": "@psixologikIIBbot",
        "service": "Psixologik Test Platformasi Telegram Boti",
        "uptime": "24/7 active"
    }

@app.post("/webhook")
async def telegram_webhook(update: dict):
    try:
        telegram_update = TgUpdate.model_validate(update, context={"bot": bot_module.bot})
        asyncio.create_task(bot_module.dp.feed_update(bot_module.bot, telegram_update))
    except Exception as e:
        logger.error(f"Webhook update xatosi: {e}")
    return {"ok": True}

async def bot_worker():
    await asyncio.sleep(2)
    try:
        await bot_module.setup_bot_commands(bot_module.bot)
        webhook_base = os.environ.get("RENDER_EXTERNAL_URL") or os.environ.get("WEBHOOK_URL", "")
        if webhook_base:
            wh_url = f"{webhook_base.rstrip('/')}/webhook"
            await bot_module.bot.set_webhook(wh_url, drop_pending_updates=False)
            logger.info(f"🌐 Telegram Webhook muvaffaqiyatli o'rnatildi: {wh_url}")
        else:
            logger.info("🤖 Telegram Bot polling rejimida ishlamoqda...")
            while True:
                try:
                    await bot_module.bot.delete_webhook(drop_pending_updates=True)
                    logger.info("✅ Telegram Bot polling faol!")
                    await bot_module.dp.start_polling(bot_module.bot)
                except asyncio.CancelledError:
                    break
                except Exception as e:
                    logger.warning(f"⚠️ Telegram botda xatolik: {e}, 5 soniyada qayta urinmoqda...")
                    await asyncio.sleep(5)
    except Exception as e:
        logger.error(f"Bot worker xatosi: {e}")

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(bot_worker())

@app.on_event("shutdown")
async def shutdown_event():
    await bot_module.bot.session.close()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
