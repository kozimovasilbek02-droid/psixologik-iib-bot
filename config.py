import os
import sys
from dotenv import load_dotenv

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

load_dotenv()

# Telegram Bot Token (Faqat Environment Variable yoki .env faylidan xavfsiz olinadi)
BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()

if not BOT_TOKEN:
    print("OGOHLANTIRISH: BOT_TOKEN topilmadi. Uni .env faylida yoki Render Environment Variables bo'limida o'rnating.")

# Admin IDs (ixtiyoriy, natijalarni ko'rish uchun)
ADMIN_IDS = [int(x.strip()) for x in os.getenv("ADMIN_IDS", "").split(",") if x.strip().isdigit()]

# Web App URL (Agar veb-platforma hostingga qo'yilsa yoki ngrok/localhost bo'lsa)
WEBAPP_URL = os.getenv("WEBAPP_URL", "").strip()

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
