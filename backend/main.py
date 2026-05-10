#CREATE THE FAST API APP
# ENABLE CORS
#REGISTER THE ROUTES
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.chat import router as chat_router


from prompts.choices import INTEREST_AREAS, TONE_STYLES, OBSTACLES

app = FastAPI(title="Adaptive AI Bridge")


origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173", # Good to have both
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(chat_router)

@app.get("/")
def root():
    return {"message": "Adaptive AI Backend is running"}


@app.get("/config")
def get_config():
    return {
        "interests": INTEREST_AREAS,
        "tones": TONE_STYLES,
        "obstacles": OBSTACLES
    }

@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI"}