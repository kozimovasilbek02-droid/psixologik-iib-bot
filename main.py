import os
import sys
import asyncio
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import config
import bot as bot_module

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

async def bot_worker():
    await asyncio.sleep(2)
    if not config.BOT_TOKEN or "Placeholder" in str(bot_module.bot.token):
        logger.error("❌ BOT_TOKEN topilmadi! Iltimos, Render.com da Environment Variables bo'limiga BOT_TOKEN kalitini qo'shing.")
        return
    logger.info("🤖 Telegram Bot 24/7 doimiy polling rejimida ishga tushmoqda...")
    try:
        await bot_module.bot.delete_webhook(drop_pending_updates=False)
        await bot_module.setup_bot_commands(bot_module.bot)
        logger.info("✅ Telegram Bot polling faol va xabarlarni qabul qilmoqda!")
        await bot_module.dp.start_polling(bot_module.bot)
    except Exception as e:
        logger.error(f"Bot worker xatosi: {e}")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    task = asyncio.create_task(bot_worker())
    yield
    # Shutdown
    task.cancel()
    try:
        await bot_module.bot.session.close()
    except Exception:
        pass

app = FastAPI(title="Psixologik IIB Bot", version="2.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.api_route("/", methods=["GET", "HEAD"])
@app.api_route("/health", methods=["GET", "HEAD"])
async def health_check():
    return {
        "status": "ok",
        "bot": "@psixologikIIBbot",
        "service": "Psixologik Test Platformasi Telegram Boti",
        "uptime": "24/7 active"
    }

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
