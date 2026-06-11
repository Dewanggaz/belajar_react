import { useState, useRef } from "react"

const dataItems = [
  {
    title: "Layanan Portal Data",
    desc: "Akses data pendidikan terpadu dan terintegrasi.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Dasbor Pendidikan",
    desc: "Visualisasi data pendidikan secara real-time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Referensi Data Pendidikan",
    desc: "Standar dan referensi data pendidikan nasional.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    title: "Sekolah Kita",
    desc: "Informasi lengkap profil sekolah seluruh Indonesia.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
]

export default function DataSection() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)

  const handlePrev = () => {
    const next = Math.max(current - 1, 0)
    setCurrent(next)
    scrollTo(next)
  }

  const handleNext = () => {
    const next = Math.min(current + 1, dataItems.length - 1)
    setCurrent(next)
    scrollTo(next)
  }

  const scrollTo = (idx) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / dataItems.length
      trackRef.current.scrollTo({ left: cardWidth * idx, behavior: "smooth" })
    }
  }

  return (
    <section id="data" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d2b6b] mb-10">
          Telusuri Data Kemendikdasmen
        </h2>

        <div className="flex items-center gap-3">
          {/* Tombol Prev */}
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white hover:border-[#1a4b8c] disabled:opacity-30 transition ,flex-shrink-0"
          >
            ←
          </button>

          {/* Track */}
          <div className="overflow-hidden flex-1">
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {dataItems.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px], flex-shrink-0, bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#0d2b6b] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 text-sm px-4 py-1.5 rounded-lg transition">
                      Selengkapnya ›
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Next */}
          <button
            onClick={handleNext}
            disabled={current === dataItems.length - 1}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white hover:border-[#1a4b8c] disabled:opacity-30 transition ,flex-shrink-0"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}