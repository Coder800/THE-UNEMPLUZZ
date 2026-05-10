import { useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Questions() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Hi, Welcome to ClariBuddy!
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                We'd like to learn a little about you so we can make
                conversations clearer, simpler, and more helpful.
              </p>

              <p className="mt-2 text-slate-500">
                Everything is optional.
              </p>
            </div>

            <button
              onClick={nextStep}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Start
              <ArrowRight size={22} />
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Tell us about yourself
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                Help ClariBuddy personalize your experience.
              </p>
            </div>

            <div className="space-y-6">

              <div>
                <label className="mb-2 block text-lg font-medium text-slate-800">
                  What should we call you?
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium text-slate-800">
                  What do you do day-to-day?
                </label>

                <input
                  type="text"
                  placeholder="Student, nurse, teacher..."
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium text-slate-800">
                  Age
                </label>

                <input
                  type="text"
                  placeholder="18"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium text-slate-800">
                  Gender
                </label>

                <input
                  type="text"
                  placeholder="Female"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700"
              >
                Back
              </button>

              <button
                onClick={nextStep}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-lg font-semibold text-white"
              >
                Next
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-8">

            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Communication Preferences
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                What would help ClariBuddy communicate more clearly with you?
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "English is not my first language",
                "I prefer simpler explanations",
                "I’m new to technology",
                "I prefer step-by-step guidance",
                "I have difficulty reading long text",
                "I learn better with examples",
              ].map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-400 hover:bg-indigo-50"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5"
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </label>
              ))}

            </div>

            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextStep}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-lg font-semibold text-white"
              >
                Next
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-8">

            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Choose a Communication Style
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                How would you like ClariBuddy to respond?
              </p>
            </div>

            <div className="space-y-4">

              {[
                {
                  title: "Simple & Short",
                  desc: "Easy-to-understand responses",
                },
                {
                  title: "Step-by-Step",
                  desc: "Guided explanations one step at a time",
                },
                {
                  title: "Friendly & Encouraging",
                  desc: "Supportive and conversational",
                },
                {
                  title: "Detailed Explanations",
                  desc: "More in-depth information",
                },
              ].map((style) => (
                <label
                  key={style.title}
                  className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-6 transition hover:border-indigo-400 hover:bg-indigo-50"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {style.title}
                    </h3>

                    <p className="mt-1 text-slate-500">
                      {style.desc}
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="tone"
                    className="h-6 w-6"
                  />
                </label>
              ))}

            </div>

            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700"
              >
                Back
              </button>

              <button
                onClick={() => navigate("/chatsession")}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-lg font-semibold text-white"
              >
                Start Chatting with ClariBuddy
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}