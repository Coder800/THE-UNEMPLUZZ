import Navbar from "../components/Navbar"

import {
  MessageCircle,
  HelpCircle,
  Lightbulb,
  Users,
} from "lucide-react"

export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200">

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">

        {/* HERO */}
        <section className="text-center">

          {/* ICON */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">

            <MessageCircle
              size={48}
              className="text-indigo-600"
            />

          </div>

          {/* TITLE */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900">
            About ClariBuddy
          </h1>

          {/* SUBTITLE */}
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">

            Your AI best friend, built around you.

          </p>

        </section>

        {/* MISSION */}
        <section className="mt-16 rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Mission
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-10 text-slate-700">

            <p>
              ClarityBot was created to address an emerging unfair advantage: AI literacy.
            As AI becomes increasingly integrated into education, healthcare, work, and everyday life, the people who know how to effectively use AI gain major advantages in access to information and opportunity. However, millions remain excluded due to language barriers, limited technical knowledge, learning disabilities, or lack of educational access.

            </p>

            <p>
              ClarityBot bridges this gap through an accessibility-first AI experience that adapts to the user — not the other way around. By removing technical intimidation and simplifying communication, we help people access clearer information, greater confidence, and the benefits of AI regardless of their background or experience.
            </p>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="mt-20">

          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* CARD 1 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                <HelpCircle
                  size={32}
                  className="text-blue-600"
                />

              </div>

              <h3 className="mt-6 text-3xl font-semibold text-slate-900">
                1. Ask Anything
              </h3>

              <p className="mt-4 text-lg leading-9 text-slate-600">

                Start with whatever’s on your mind, even if it’s
                unclear or incomplete. There are no wrong questions.

              </p>

            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

                <MessageCircle
                  size={32}
                  className="text-purple-600"
                />

              </div>

              <h3 className="mt-6 text-3xl font-semibold text-slate-900">
                2. Engage in Dialogue
              </h3>

              <p className="mt-4 text-lg leading-9 text-slate-600">

                ClarityBot will ask follow-up questions to understand
                what you're really looking for.

              </p>

            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                <Lightbulb
                  size={32}
                  className="text-green-600"
                />

              </div>

              <h3 className="mt-6 text-3xl font-semibold text-slate-900">
                3. Gain Clarity
              </h3>

              <p className="mt-4 text-lg leading-9 text-slate-600">

                Through the conversation, you'll gain clarity on your
                thoughts and receive targeted answers.

              </p>

            </div>

            {/* CARD 4 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

                <Users
                  size={32}
                  className="text-orange-600"
                />

              </div>

              <h3 className="mt-6 text-3xl font-semibold text-slate-900">
                4. Keep Exploring
              </h3>

              <p className="mt-4 text-lg leading-9 text-slate-600">

                Continue the conversation to dive deeper or explore
                related topics as they come up.

              </p>

            </div>

          </div>

        </section>

        {/* WHO IT'S FOR */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-white shadow-2xl">

          <h2 className="text-4xl font-bold">
            Perfect For
          </h2>

          <ul className="mt-8 space-y-5 text-lg leading-9 text-indigo-50">

            <li>
              • Students trying to understand complex topics
              or refine research questions
            </li>

            <li>
              • Professionals brainstorming solutions or
              clarifying project requirements
            </li>

            <li>
              • Writers overcoming creative blocks or
              organizing their thoughts
            </li>

            <li>
              • Anyone seeking to better articulate their
              ideas and questions
            </li>

          </ul>

        </section>

        {/* CTA */}
        <section className="mt-20 text-center">

          <p className="text-2xl text-slate-600">
            Ready to gain some clarity?
          </p>

          <button
            className="
              mt-8 rounded-2xl bg-indigo-600
              px-10 py-5 text-xl font-semibold
              text-white shadow-lg transition
              hover:bg-indigo-700
            "
          >

            Talk to ClariBuddy

          </button>

        </section>

      </main>

    </div>
  )
}