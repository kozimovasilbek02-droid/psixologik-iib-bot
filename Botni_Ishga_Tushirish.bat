@echo off
chcp 65001 > nul
title Test Baholash Platformasi Telegram Boti
cd /d "%~dp0"
echo ========================================================
echo   Test Baholash Platformasi Telegram Boti
echo ========================================================
echo.
python bot.py
echo.
pause
