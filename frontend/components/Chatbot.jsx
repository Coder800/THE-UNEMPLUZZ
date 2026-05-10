import { useState } from "react"
import {
  Bot,
  Paperclip,
  SendHorizonal,
} from "lucide-react"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
const sendMessage = async () => {
  const userPrefs = JSON.parse(localStorage.getItem("claribuddy_user"));

  const payload = {
    message: input,
    user_context: userPrefs // Pass the name, tone, and obstacles here!
  };

  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  // ... handle response
};
export default function Chatbot() {
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState([
    {
      sender: "bot",
      text: "Welcome back! I’m ready to help explain medical information, prescriptions, doctor’s notes, and anything else you need clarified.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function sendMessage() {
    if (!message.trim() || isLoading) return

    const userText = message.trim()
    setMessage("")
    setConversation((prev) => [...prev, { sender: "user", text: userText }])
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch(`${BACKEND_URL}/chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userText,
          age: 30,
          interests: ["General"],
          tone: "Friendly",
          obstacles: [],
          primary_language: "English",
          occupation: "General",
          name: "User",
          gender: "Not specified",
          origin: "Unknown",
          diagnosis: "None",
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || "Backend request failed")
      }

      const data = await response.json()
      const botText = data.answer || "Sorry, I couldn’t get a reply from the backend."
      setConversation((prev) => [...prev, { sender: "bot", text: botText }])
    } catch (err) {
      const messageText = err instanceof Error ? err.message : String(err)
      setError(messageText)
      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: "There was a problem contacting the backend. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200 p-3 sm:p-6">
      <div className="flex h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-5 sm:px-8 sm:py-7">
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-16 sm:w-16">
              <img src="real_claribuddy.gif" alt="ClariBuddy" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-4xl">ClarityBot</h1>
              <p className="mt-1 text-sm text-indigo-100 sm:text-lg">Ask me anything, I&apos;ll help you clarify</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-white px-3 py-4 sm:px-8 sm:py-8">
          {conversation.map((item, index) => (
            <div
              key={`${item.sender}-${index}`}
              className={`flex items-start gap-3 sm:gap-4 ${item.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-12 sm:w-12">
                {item.sender === "bot" ? <Bot size={20} className="text-slate-500" /> : <span className="text-slate-700">You</span>}
              </div>
              <div className={`max-w-[85%] rounded-3xl px-4 py-4 sm:max-w-4xl sm:px-7 sm:py-6 ${item.sender === "bot" ? "bg-slate-100 text-slate-700" : "bg-indigo-600 text-white"}`}>
                <p className="text-base leading-8 sm:text-xl sm:leading-10">{item.text}</p>
              </div>
            </div>
          ))}
          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </div>

        <div className="border-t border-slate-200 bg-white p-3 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              disabled
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-300 text-slate-500 transition sm:h-16 sm:w-16 sm:rounded-2xl"
            >
              <Paperclip size={20} />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              placeholder="Type your message..."
              className="h-12 flex-1 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:h-16 sm:rounded-2xl sm:px-6 sm:text-xl"
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading}
              className={`flex h-12 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition sm:h-16 sm:rounded-2xl sm:px-8 sm:text-xl ${isLoading ? "bg-slate-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
            >
              <SendHorizonal size={18} />
              <span className="hidden sm:block">{isLoading ? "Sending..." : "Send"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
