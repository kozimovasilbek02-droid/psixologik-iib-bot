import sqlite3
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), "test_bot.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                user_id INTEGER PRIMARY KEY,
                username TEXT,
                full_name TEXT,
                language TEXT DEFAULT 'lat',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                full_name TEXT,
                stage1_score INTEGER,
                stage2_score INTEGER,
                stage3_part1_score INTEGER,
                stage3_part2_score INTEGER,
                is_passed BOOLEAN,
                completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(user_id)
            )
        """)
        conn.commit()

def save_or_update_user(user_id: int, username: str, full_name: str, language: str = 'lat'):
    with get_db() as conn:
        conn.execute("""
            INSERT INTO users (user_id, username, full_name, language)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                username=excluded.username,
                full_name=excluded.full_name,
                language=excluded.language
        """, (user_id, username, full_name, language))
        conn.commit()

def save_result(user_id: int, full_name: str, s1: int, s2: int, s3_p1: int, s3_p2: int, is_passed: bool):
    with get_db() as conn:
        cursor = conn.execute("""
            INSERT INTO results (user_id, full_name, stage1_score, stage2_score, stage3_part1_score, stage3_part2_score, is_passed)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (user_id, full_name, s1, s2, s3_p1, s3_p2, is_passed))
        conn.commit()
        return cursor.lastrowid

def get_user_results(user_id: int):
    with get_db() as conn:
        return conn.execute("SELECT * FROM results WHERE user_id = ? ORDER BY completed_at DESC", (user_id,)).fetchall()

def get_all_results(limit: int = 50):
    with get_db() as conn:
        return conn.execute("SELECT * FROM results ORDER BY completed_at DESC LIMIT ?", (limit,)).fetchall()

init_db()
