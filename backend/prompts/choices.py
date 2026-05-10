# config/choices.py

INTEREST_AREAS = [
    "Technology", "Career", "Education", 
    "Health", "Finance", "Relationships", 
    "Creativity", "Business", "Personal Growth", 
    "Science", "Gaming", "Religious"
]

TONE_STYLES = [
    "Professional", 
    "Casual", 
    "Empathetic", 
    "Analytical"
]



OBSTACLES = [
    "Language Barrier", 
    "Dyslexia", 
    "No Technical Background", 
    "Information Overload", "Stupidity"
    "None"
]

# prompts/templates.py

SYSTEM_BASE_INSTRUCTION = """
You are a 'Knowledge Bridge' AI. Your goal is to democratize information.
You must adapt your complexity based on the user's age and obstacles.
If a user has a specific interest, use it to create analogies.
"""

# You can add more specific prompts here later
SAFETY_GUIDELINES = "Do not provide legal or medical advice. Stick to educational facts."