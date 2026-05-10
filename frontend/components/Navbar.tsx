import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  // TEMPORARY fake auth state
  // later this comes from backend/auth
  const isLoggedIn = true

  // TEMPORARY fake user
  const username = "kjhhb"


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/chat", label: "Chat" },
    { path: "/about", label: "About" },
    //{ path: "/settings", label: "Settings" },
  ]

  return (
    <nav className="w-full border-b border-gray-200 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-600"
        >
          ClariBuddy🧸
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-2xl px-5 py-3 text-lg font-medium transition-all duration-200
                  
                  ${
                    isActive
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}