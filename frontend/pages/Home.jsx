import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return(
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200">

  <Navbar />

  {/* HERO */}
  <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">

    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
      🧸
    </div>

    <h1 className="max-w-4xl text-6xl font-bold tracking-tight text-slate-900">
      Your AI best friend, built around <i>you</i>.
    </h1>

    <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
      ClariBuddy helps you refine your thoughts, clarify your questions,
      and find the answers you're really looking for.
    </p>

    <button className="mt-10 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700">
      Start Chatting
    </button>

  </section>

  {/* FEATURE CARDS */}
  <section className="mx-auto mt-24 grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-3">

    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-3xl font-semibold text-slate-900">
        Simple to Start
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Just answer a few quick questions, and ClariBuddy is ready to help. No setup, no confusing options, and no technical knowledge needed.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-3xl font-semibold text-slate-900">
        Made for You
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Everyone communicates differently. ClariBuddy adjusts to your needs, whether that means simpler explanations, more guidance, or a calmer conversation style.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <h3 className="text-3xl font-semibold text-slate-900">
        Friendly & Easy to Use
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Using AI shouldn't feel stressful or intimidating. ClariBuddy is designed to feel welcoming, supportive, and easy to talk to from the very beginning.
      </p>
    </div>

  </section>

</div>
  )
}