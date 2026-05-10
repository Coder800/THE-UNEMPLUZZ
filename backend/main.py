from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.chat import router as chat_router

# Import choices for the config endpoint
# (Ensure prompts/choices.py exists or move the lists here!)
try:
    from prompts.choices import INTEREST_AREAS, TONE_STYLES, OBSTACLES, LANGUAGES, OCCUPATIONS
except ImportError:
    # Fallback lists if the file is missing
    INTEREST_AREAS = ["Technology", "Science", "Finance"]
    TONE_STYLES = ["Analytical", "Casual"]
    OBSTACLES = ["None", "Dyslexia"]
    LANGUAGES = ["English", "Spanish"]
    OCCUPATIONS = ["Student", "General"]

app = FastAPI(title="Adaptive AI Bridge")

# CORS Setup
origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(chat_router)

@app.get("/")
def root():
    return {"message": "Adaptive AI Backend is online"}

@app.get("/config")
def get_config():
    return {
        "interests": INTEREST_AREAS,
        "tones": TONE_STYLES,
        "obstacles": OBSTACLES,
        "languages": LANGUAGES,
        "occupations": OCCUPATIONS
    }