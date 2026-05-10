import os
import base64
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/chat", tags=["chat"])

# Initialize Gemini Client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# --- PROMPT TEMPLATES (Moved here to prevent Import Errors) ---
SYSTEM_BASE_INSTRUCTION = """
You are a 'Knowledge Bridge' AI. Your mission is to democratize information by 
translating complex concepts into language the user understands. 
You use analogies, simplify vocabulary, and adapt to specific learning obstacles.
"""

SAFETY_GUIDELINES = "Do not provide legal, medical, or financial advice. Stick to educational facts."

# --- REQUEST SCHEMA ---
class ChatRequest(BaseModel):
    prompt: str
    age: int
    interests: list[str]
    tone: str
    obstacles: list[str]
    image_base64: str = None 
    primary_language: str = "English" 
    occupation: str = "General"

@router.post("/")
async def chat_with_gemini(request: ChatRequest):
    try:
        # 1. Build Adaptive Logic
        adaptations = []
        if "Dyslexia" in request.obstacles:
            adaptations.append("Use bullet points, bold key terms, and very short paragraphs.")
        if "No Technical Background" in request.obstacles:
            adaptations.append(f"Use simple analogies related to being a {request.occupation}.")
        if "Language Barrier" in request.obstacles:
            adaptations.append("Use Level 1 basic vocabulary; avoid all slang/idioms.")
        if "Information Overload" in request.obstacles:
            adaptations.append("Provide a 2-sentence summary first, then the details.")

        # 2. Construct the Hyper-Personalized Persona
        persona = (
            f"{SYSTEM_BASE_INSTRUCTION}\n"
            f"USER PROFILE:\n"
            f"- Age: {request.age}\n"
            f"- Occupation: {request.occupation}\n"
            f"- Interests: {', '.join(request.interests)}\n"
            f"- Adaptation Rules: {' '.join(adaptations)}\n\n"
            f"CRITICAL: You MUST respond entirely in {request.primary_language}.\n"
            f"TONE: {request.tone}\n"
            f"{SAFETY_GUIDELINES}"
        )

        # 3. Handle Multimodal Input
        contents = [request.prompt]
        if request.image_base64:
            # Clean base64 string
            encoded_data = request.image_base64.split(",")[-1]
            image_part = types.Part.from_bytes(
                data=base64.b64decode(encoded_data),
                mime_type="image/jpeg"
            )
            contents.append(image_part)

        # 4. Execute Gemini 2.5 Flash
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=persona,
                thinking_config=types.ThinkingConfig(include_thoughts=True),
                temperature=0.7
            )
        )
        
        # 5. Extract Candidates
        candidate = response.candidates[0]
        thoughts = [p.text for p in candidate.content.parts if hasattr(p, 'thought') and p.thought]
        
        return {
            "answer": response.text,
            "thoughts": thoughts[0] if thoughts else None,
            "status": "Success",
            "language": request.primary_language
        }
        
    except Exception as e:
        print(f"Server Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))