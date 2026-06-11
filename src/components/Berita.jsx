import { useState } from "react"

const beritaItems = [
  {
    id: 1,
    kategori: ["Berita", "KemendikdasmenRAMAH"],
    title: "Tasyakuran Hardiknas 2026: Kemendikdasmen Beri Penghargaan Daerah",
    excerpt: "Jakarta, 2 Mei 2026 — Kemendikdasmen menggelar tasyakuran Hari Pendidikan Nasional 2026 dengan pemberian penghargaan kepada daerah berprestasi.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    date: "2 Mei 2026",
  },
  {
    id: 2,
    kategori: ["Berita", "PendidikanBermutuuntukSemua"],
    title: "Kemendikdasmen Ajak Masyarakat Dukung Rumah Pendidikan",
    excerpt: "Jakarta, 18 April 2026 — Dua inovasi digital unggulan Kemendikdasmen resmi dipresentasikan di forum internasional.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    date: "18 April 2026",
  },
  {
    id: 3,
    kategori: ["Artikel Lomba", "Cybersecurity"],
    title: "Program Bug Bounty 2026 Resmi Diluncurkan",
    excerpt: "Pusdatin meluncurkan program Bug Bounty 2026 untuk memperkuat keamanan siber ekosistem pendidikan digital nasional.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    date: "10 April 2026",
  },
  {
    id: 4,
    kategori: ["PendidikanBermutuuntukSemua", "KemendikdasmenRAMAH"],
    title: "Sekolah 3T di NTT Rasakan Dampak Langsung Digitalisasi",
    excerpt: "Kabupaten Malaka, NTT, 18 Maret 2026 — Digitalisasi pembelajaran di daerah 3T mulai menunjukkan hasil nyata.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    date: "18 Maret 2026",
  },
  {
    id: 5,
    kategori: ["Berita", "RumahPendidikan"],
    title: "Kemendikdasmen Dorong Guru Optimalkan Pemanfaatan Teknologi",
    excerpt: "Jakarta, 14 Februari 2026 — Kemendikdasmen mendorong para guru untuk mengoptimalkan teknologi dalam pembelajaran.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    date: "14 Februari 2026",
  },
  {
    id: 6,
    kategori: ["Berita", "KemendikdasmenRAMAH"],
    title: "Webinar Rilis Pelatihan Mandiri: Papan Interaktif Digital",
    excerpt: "Pusdatin menggelar webinar pelatihan mandiri bertema pemanfaatan papan interaktif digital dalam pembelajaran.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    date: "5 Februari 2026",
  },
]

const allKategori = ["Semua", "Berita", "PendidikanBermutuuntukSemua", "KemendikdasmenRAMAH"]

export default function Berita() {
  const [activeTab, setActiveTab] = useState("Semua")
  const [featured, setFeatured] = useState(beritaItems[0])

  const filtered = activeTab === "Semua"
    ? beritaItems
    : beritaItems.filter((b) => b.kategori.includes(activeTab))

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0d2b6b] mb-8">Berita Terbaru</h2>

        {/* Layout atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Sidebar */}
          <div>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {allKategori.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setActiveTab(kat)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    activeTab === kat
                      ? "bg-[#1a4b8c] text-white border-[#1a4b8c]"
                      : "bg-blue-50 text-[#1a4b8c] border-gray-200 hover:bg-blue-100"
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>

            {/* Featured info */}
            <h3 className="font-bold text-[#0d2b6b] text-lg leading-snug mb-1">
              {featured.title}
            </h3>
            <p className="text-xs text-gray-400 mb-4">{featured.date}</p>

            {/* List berita kecil */}
            {filtered.slice(0, 2).map((b) => (
              <div
                key={b.id}
                onClick={() => setFeatured(b)}
                className="flex gap-3 mb-3 cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-16 h-12 object-cover rounded-md ,flex-shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{b.title}</p>
                  <span className="text-xs text-gray-400">{b.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gambar featured */}
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow-md">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover max-h-80"
            />
          </div>
        </div>

        {/* Grid berita */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <div
              key={b.id}
              onClick={() => setFeatured(b)}
              className="rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition bg-white"
            >
              <div className="h-44 overflow-hidden">
                <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {b.kategori.slice(0, 2).map((k) => (
                    <span key={k} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                      {k}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-[#0d2b6b] text-sm mb-1 leading-snug">{b.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{b.excerpt}</p>
                <span className="text-xs text-gray-400">{b.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}