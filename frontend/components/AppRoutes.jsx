import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Chat from "../pages/Chat"
import Questions from "../pages/Questions"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Questions />} />

        <Route path="/chatsession" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}