🧸 ClariBuddy
ClariBuddy is an adaptive AI assistant built to make information accessible for everyone. It uses a modular prompting system to adjust its explanations based on user needs, such as learning disabilities, language barriers, or technical experience.

🚀 Setup
API Key: Get a Gemini API key from Google AI Studio.

Environment: Create a file at backend/.env and add your key:

Plaintext
GEMINI_API_KEY=your_key_here
Run: Launch the entire stack using Docker:

Bash
docker compose up --build
🛠 Tech Stack
Frontend: React + Vite + Tailwind CSS

Backend: FastAPI (Python)

AI: Google Gemini 1.5 Flash

Deployment: Docker

🧠 Features
Modular Prompts: Customizes AI behavior based on user onboarding data.

Accessibility Focused: Specialized support for Dyslexia, ADHD, and ESL users.

Tone Control: Choose between Simple, Step-by-Step, or Detailed explanations.

📁 Folder Structure
/frontend: React UI and Prompt Builder logic.

/backend: FastAPI server and AI integration.

/docker-compose.yml: Orchestration for the frontend and backend.