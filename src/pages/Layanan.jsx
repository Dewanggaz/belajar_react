import { Link } from "react-router-dom"

const layananList = [
  {
    id: 1,
    title: "Jabatan Fungsional PTP",
    desc: "Layanan pengelolaan jabatan fungsional Pranata Teknologi Pendidikan di lingkungan Kemendikdasmen.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: 2,
    title: "SPBE",
    desc: "Sistem Pemerintahan Berbasis Elektronik untuk mendukung tata kelola pemerintahan yang efektif.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    id: 3,
    title: "EduCSIRT",
    desc: "Tim respon insiden keamanan siber di bidang pendidikan untuk melindungi ekosistem digital.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    id: 4,
    title: "Dapodik",
    desc: "Data Pokok Pendidikan, sistem pendataan utama yang digunakan di seluruh satuan pendidikan.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    id: 5,
    title: "Akun Pembelajaran",
    desc: "Akun resmi belajar.id yang diberikan kepada seluruh peserta didik dan pendidik Indonesia.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80",
  },
  {
    id: 6,
    title: "MELIA",
    desc: "Manajemen Layanan Infrastruktur Anda, platform pengelolaan infrastruktur teknologi Kemendikdasmen.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
]

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        style={{ background: "linear-gradient(135deg, #0d2b6b 0%, #1a4b8c 100%)" }}
        className="py-16 px-4 text-center"
      >
        <h1 className="text-white text-4xl font-bold mb-3">Layanan Kami</h1>
        <p className="text-blue-200 text-base">
          Temukan berbagai layanan digital Kemendikdasmen
        </p>
      </div>

      {/* Grid Layanan */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layananList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0d2b6b] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="px-5 pb-5">
                <Link
                  to={`/layanan/${item.id}`}
                  className="block w-full text-center border border-[#1a4b8c] text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}