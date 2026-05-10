#HANDLE THE GEMINI API CALLS

import os
from fastapi import FastAPI
from google import genai
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str
    class Config:
        env_file = ".env"

settings = Settings()
app = FastAPI()

# Initialize the Gemini 2.5 Client
client = genai.Client(api_key=settings.gemini_api_key)

@app.get("/generate")
async def generate(prompt: str):
    # Gemini 2.5 Pro is the stable high-reasoning model in 2026
    response = client.models.generate_content(
        model="gemini-2.5-pro",
        contents=prompt
    )
    return {"response": response.text}