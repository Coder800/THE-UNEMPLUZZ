#THIS IS THE PERSONALIZATION PART
#HAVE TAGS LIEK IF BEGINNER THEN EXPLAIN SIMPLY...OR IF STEP BY STEP THEN USE STEP BY STEP INSTRUCTIONS....OR IF NON NATIVE ENGLISH THEN AVOID COMPLEX VOCABULARY

def build_prompt(tags, user_message):

    system_prompt = """
    You are an accessibility-focused AI assistant.

    Always:
    - explain clearly
    - avoid unnecessary jargon
    - adapt explanations to the user
    - provide helpful structured responses
    """

    tag_context = ""

    if "beginner" in tags:
        tag_context += "Use beginner-friendly explanations.\n"

    if "step_by_step" in tags:
        tag_context += "Respond step-by-step.\n"

    if "non_native_english" in tags:
        tag_context += "Avoid advanced vocabulary.\n"

    if "concise" in tags:
        tag_context += "Keep responses concise.\n"

    final_prompt = f"""
    {system_prompt}

    User preferences:
    {tag_context}

    User request:
    {user_message}
    """

    return final_prompt