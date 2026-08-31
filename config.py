import os
import sys

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from dotenv import load_dotenv
load_dotenv()

# Telegram Bot Token
BOT_TOKEN = (os.getenv("BOT_TOKEN") or "8965354358:AAGwzOhzKqPyVP1tilLqgP7EjLGEDOBq1_A").strip()

# Admin IDs (ixtiyoriy, natijalarni ko'rish uchun)
ADMIN_IDS = [int(x.strip()) for x in os.getenv("ADMIN_IDS", "").split(",") if x.strip().isdigit()]

# Web App URL (Agar veb-platforma hostingga qo'yilsa yoki ngrok/localhost bo'lsa)
WEBAPP_URL = os.getenv("WEBAPP_URL", "")

# Stage criteria
STAGE1_COUNT = 5
STAGE1_MIN_PASS = 2

STAGE2_COUNT = 5
STAGE2_MIN_PASS = 2

STAGE3_COUNT = 86
STAGE3_PART1_COUNT = 15
STAGE3_PART1_MIN_PASS = 4

STAGE3_PART2_COUNT = 71
STAGE3_PART2_MIN_PASS = 40
