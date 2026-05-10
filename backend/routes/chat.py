import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv
from prompts.choices import INTEREST_AREAS, TONE_STYLES, OBSTACLES

load_dotenv()

router = APIRouter(
    prefix="/chat",
    tags=["chat"]
)

# Initialize the Gemini 2.5 Client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

class ChatRequest(BaseModel):
    prompt: str
    age: int
    interests: list[str]
    tone: str
    obstacles: list[str]
    ocr_text: str = None  # Optional field for when your OCR teammate is ready

@router.post("/")
async def chat_with_gemini(request: ChatRequest):
    try:
        # 1. Build Adaptive Instructions based on Obstacles
        adaptations = []
        if "Dyslexia" in request.obstacles:
            adaptations.append("Use bullet points, bold key terms, and keep paragraphs very short.")
        if "No Technical Background" in request.obstacles:
            adaptations.append("Explain technical concepts using simple everyday analogies.")
        if "Language Barrier" in request.obstacles:
            adaptations.append("Use basic vocabulary and avoid all slang or cultural idioms.")
        if "Information Overload" in request.obstacles:
            adaptations.append("Provide a short summary first, then the details.")

        # 2. Construct the Personalized System Persona
        persona = (
            f"You are a knowledge bridge for an {request.age}-year-old interested in {', '.join(request.interests)}. "
            f"Tone: {request.tone}. "
            f"User Adaptations: {' '.join(adaptations)}"
        )

        # 3. Handle OCR integration (The 'Prompt Wrapper' logic)
        final_user_content = request.prompt
        if request.ocr_text:
            final_user_content = f"Context from uploaded image: {request.ocr_text}\n\nUser Question: {request.prompt}"

        # 4. Gemini 2.5 Call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=final_user_content,
            config=types.GenerateContentConfig(
                system_instruction=persona,
                thinking_config=types.ThinkingConfig(include_thoughts=True),
                temperature=0.7
            )
        )
        
        # 5. Extract Answer and Thoughts
        candidate = response.candidates[0]
        thoughts = [p.text for p in candidate.content.parts if hasattr(p, 'thought') and p.thought]
        
        return {
            "answer": response.text,
            "thoughts": thoughts[0] if thoughts else None,
            "applied_persona": persona if os.getenv("DEBUG") else None
        }
        
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")