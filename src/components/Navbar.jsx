import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#0d2b6b] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
            K
          </div>
          <div>
            <p className="text-sm font-bold leading-none">
              <span className="text-white">Kemen</span>
              <span className="text-yellow-400">dikdasmen</span>
            </p>
            <p className="text-[10px] text-blue-200">Pusat Data dan Teknologi Informasi</p>
          </div>
        </div>

        {/* Menu Desktop */}
{["Layanan", "Data", "Talenta", "Blog", "Informasi", "Profil"].map((item) => (
  <li key={item}>
    <Link
      to={item === "Layanan" ? "/layanan" : "#"}
      className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm transition"
    >
      {item}
    </Link>
  </li>
))}

        {/* Burger Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1e4d] px-4 pb-4 flex flex-col gap-2">
          {["Layanan", "Data", "Talenta", "Blog", "Informasi", "Profil"].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white py-2 text-sm border-b border-white/10">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}