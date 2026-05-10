import os
import base64
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv
from prompts.choices import INTEREST_AREAS, TONE_STYLES, OBSTACLES

load_dotenv()

router = APIRouter(prefix="/chat", tags=["chat"])

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# --- 1. UPDATE THE SCHEMA ---
class ChatRequest(BaseModel):
    prompt: str
    age: int
    interests: list[str]
    tone: str
    obstacles: list[str]
    image_base64: str = None  # New field for the raw image data

@router.post("/")
async def chat_with_gemini(request: ChatRequest):
    try:
        # Build adaptations (keeping your logic)
        adaptations = []
        if "Dyslexia" in request.obstacles:
            adaptations.append("Use bullet points, bold key terms, and keep paragraphs very short.")
        if "No Technical Background" in request.obstacles:
            adaptations.append("Explain technical concepts using simple everyday analogies.")
        if "Language Barrier" in request.obstacles:
            adaptations.append("Use basic vocabulary and avoid all slang or cultural idioms.")
        if "Information Overload" in request.obstacles:
            adaptations.append("Provide a short summary first, then the details.")

        persona = (
            f"You are a knowledge bridge for an {request.age}-year-old interested in {', '.join(request.interests)}. "
            f"Tone: {request.tone}. User Adaptations: {' '.join(adaptations)}"
        )

        # --- 2. UPDATE CONTENT HANDLING ---
        # We build a list of parts for Gemini to process
        contents = [request.prompt]

        if request.image_base64:
            # Strip metadata prefix if frontend sends it (e.g., "data:image/jpeg;base64,")
            header, encoded = (request.image_base64.split(",", 1) 
                              if "," in request.image_base64 
                              else (None, request.image_base64))
            
            # Create a Part object from the image bytes
            image_part = types.Part.from_bytes(
                data=base64.b64decode(encoded),
                mime_type="image/jpeg" # Gemini handles most common formats
            )
            contents.append(image_part)

        # --- 3. CALL GEMINI ---
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=contents, # Sending the list [Text, Image]
            config=types.GenerateContentConfig(
                system_instruction=persona,
                thinking_config=types.ThinkingConfig(include_thoughts=True),
                temperature=0.7
            )
        )
        
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