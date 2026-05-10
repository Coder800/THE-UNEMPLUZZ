import { useState } from "react"
import {
  Bot,
  Paperclip,
  SendHorizonal,
} from "lucide-react"

export default function Chatbot() {

  const [message, setMessage] = useState("")

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200 p-3 sm:p-6">

      {/* CHAT CONTAINER */}
      <div className="flex h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-5 sm:px-8 sm:py-7">

          <div className="flex items-center gap-3 sm:gap-5">

            {/* ICON */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-16 sm:w-16">
              <img src = "real_claribuddy.gif"/>
            </div>

            {/* TITLE */}
            <div>

              <h1 className="text-2xl font-bold text-white sm:text-4xl">
                ClarityBot
              </h1>

              <p className="mt-1 text-sm text-indigo-100 sm:text-lg">
                Ask me anything, I&apos;ll help you clarify
              </p>

            </div>

          </div>

        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto bg-white px-3 py-4 sm:px-8 sm:py-8">

          {/* MESSAGE */}
          <div className="flex items-start gap-3 sm:gap-4">

            {/* BOT ICON */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-12 sm:w-12">
              <Bot
                size={20}
                className="text-slate-500 sm:size-6"
              />
            </div>

            {/* MESSAGE BUBBLE */}
            <div className="max-w-[85%] rounded-3xl bg-slate-100 px-4 py-4 sm:max-w-4xl sm:px-7 sm:py-6">

              <p className="text-base leading-8 text-slate-700 sm:text-2xl sm:leading-10">
                Welcome back! I&apos;m ready to help explain medical
                information, prescriptions, doctor&apos;s notes,
                and anything else you need clarified.
              </p>

              <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                02:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* INPUT AREA */}
        <div className="border-t border-slate-200 bg-white p-3 sm:p-5">

          <div className="flex items-center gap-2 sm:gap-4">

            {/* ATTACH */}
            <button
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-xl border border-slate-300
                text-slate-500 transition
                hover:bg-slate-100
                sm:h-16 sm:w-16 sm:rounded-2xl
              "
            >
              <Paperclip size={20} />
            </button>

            {/* INPUT */}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="
                h-12 flex-1 rounded-xl border border-slate-300
                bg-white px-4 text-sm text-slate-700
                outline-none transition
                focus:border-indigo-400
                focus:ring-4 focus:ring-indigo-100

                sm:h-16 sm:rounded-2xl sm:px-6 sm:text-xl
              "
            />

            {/* SEND */}
            <button
              className="
                flex h-12 items-center gap-2
                rounded-xl bg-indigo-600
                px-4 text-sm font-semibold text-white
                transition hover:bg-indigo-700

                sm:h-16 sm:rounded-2xl sm:px-8 sm:text-xl
              "
            >

              <SendHorizonal size={18} />

              <span className="hidden sm:block">
                Send
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}