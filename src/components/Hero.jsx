import { useState, useEffect, useRef } from "react"

const words = ["RAMAH", "Responsif", "Akuntabel", "Melayani", "Adaptif", "Harmonis"]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section style={{
      background: "linear-gradient(135deg, #0d2b6b 0%, #1a4b8c 50%, #2563a8 100%)",
      minHeight: "550px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 1rem",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "48rem" }}>
        <p className="text-blue-200 text-sm uppercase tracking-widest mb-4">
          Pusat Data dan Teknologi Informasi
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-3">
          Mari bersama membangun ekosistem pendidikan yang{" "}
          <span className={`text-yellow-400 transition-all duration-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            {words[index]}
          </span>
        </h1>

        <p className="text-white/60 text-base mb-8">
          (Responsif, Akuntabel, Melayani, Adaptif, Harmonis)
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#layanan" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition">
            Telusuri Layanan
          </a>
          <a href="#data" className="border border-white/50 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition">
            Lihat Data
          </a>
        </div>
      </div>
    </section>
  )
}