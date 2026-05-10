#THIS DEFINES THE REQUEST AND RESPONCE ARCHITECTURE OR LIKE A SCHEMA
from pydantic import BaseModel
from typing import List

class ChatRequest(BaseModel):
    message: str
    tags: List[str]