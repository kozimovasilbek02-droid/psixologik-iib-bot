import os
import sys
import re
import json

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(CURRENT_DIR)

SEARCH_DIRS = [
    os.path.join(CURRENT_DIR, "data"),
    os.path.join(CURRENT_DIR, "Test_Platformasi", "js"),
    os.path.join(CURRENT_DIR, "js"),
    os.path.join(BASE_DIR, "Test_Platformasi", "js"),
]

def find_question_file(filename):
    for d in SEARCH_DIRS:
        fp = os.path.join(d, filename)
        if os.path.exists(fp):
            return fp
    raise FileNotFoundError(f"Savollar fayli topilmadi: {filename}")

def extract_js_array(filename, var_name):
    filepath = find_question_file(filename)
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find array starting with const VAR_NAME = [
    match = re.search(r'const\s+' + var_name + r'\s*=\s*(\[[\s\S]*?\]);', content)
    if not match:
        raise ValueError(f"Could not find array {var_name} in {filepath}")
    
    json_str = match.group(1)
    # Remove trailing commas before } or ] which are valid JS but invalid JSON
    clean_json = re.sub(r',\s*([\]}])', r'\1', json_str)
    return json.loads(clean_json)

def get_logic_questions():
    return extract_js_array("questions_logic.js", "LOGIC_QUESTIONS")

def get_image_questions():
    return extract_js_array("questions_images.js", "IMAGE_QUESTIONS")

def get_psycho_questions():
    return extract_js_array("questions_psycho.js", "PSYCHO_QUESTIONS")

if __name__ == "__main__":
    if sys.platform == "win32":
        try:
            sys.stdout.reconfigure(encoding='utf-8')
        except Exception:
            pass
    logic = get_logic_questions()
    images = get_image_questions()
    psycho = get_psycho_questions()
    print(f"✅ Loaded successfully: Logic={len(logic)}, Images={len(images)}, Psycho={len(psycho)}")
