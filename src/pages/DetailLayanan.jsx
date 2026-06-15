import { useParams, Link } from "react-router-dom"

const layananList = [
  {
    id: 1,
    title: "Jabatan Fungsional PTP",
    desc: "Layanan pengelolaan jabatan fungsional Pranata Teknologi Pendidikan di lingkungan Kemendikdasmen.",
    detail: "Jabatan Fungsional PTP adalah jabatan yang mempunyai ruang lingkup tugas, tanggung jawab, dan wewenang untuk melakukan kegiatan teknologi pendidikan. Layanan ini membantu para tenaga pendidik dalam mengelola karir dan kompetensi mereka di bidang teknologi pendidikan.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 2,
    title: "SPBE",
    desc: "Sistem Pemerintahan Berbasis Elektronik untuk mendukung tata kelola pemerintahan yang efektif.",
    detail: "SPBE adalah penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi untuk memberikan layanan kepada pengguna. Sistem ini mendukung integrasi dan efisiensi proses pemerintahan di lingkungan Kemendikdasmen.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 3,
    title: "EduCSIRT",
    desc: "Tim respon insiden keamanan siber di bidang pendidikan.",
    detail: "EduCSIRT adalah tim yang bertugas menangani insiden keamanan siber di lingkungan pendidikan. Tim ini melindungi ekosistem digital pendidikan dari ancaman siber dan memastikan keamanan data seluruh pengguna layanan Kemendikdasmen.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    id: 4,
    title: "Dapodik",
    desc: "Data Pokok Pendidikan, sistem pendataan utama seluruh satuan pendidikan.",
    detail: "Dapodik adalah sistem pendataan nasional yang digunakan untuk mengelola data pokok pendidikan di seluruh Indonesia. Data yang dikelola meliputi data sekolah, peserta didik, pendidik, dan tenaga kependidikan.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    id: 5,
    title: "Akun Pembelajaran",
    desc: "Akun resmi belajar.id untuk seluruh peserta didik dan pendidik Indonesia.",
    detail: "Akun Pembelajaran belajar.id adalah akun resmi yang diberikan oleh Kemendikdasmen kepada seluruh peserta didik, pendidik, dan tenaga kependidikan. Akun ini memberikan akses ke berbagai platform dan layanan digital pendidikan.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80",
  },
  {
    id: 6,
    title: "MELIA",
    desc: "Manajemen Layanan Infrastruktur Anda.",
    detail: "MELIA adalah platform pengelolaan infrastruktur teknologi informasi di lingkungan Kemendikdasmen. Platform ini memudahkan pengelolaan dan pemantauan seluruh infrastruktur digital yang digunakan dalam ekosistem pendidikan.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
]

export default function DetailLayanan() {
  const { id } = useParams()
  const layanan = layananList.find((item) => item.id === parseInt(id))

  if (!layanan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Layanan tidak ditemukan</p>
          <Link to="/layanan" className="text-[#1a4b8c] font-semibold hover:underline">
            ← Kembali ke Layanan
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        style={{ background: "linear-gradient(135deg, #0d2b6b 0%, #1a4b8c 100%)" }}
        className="py-16 px-4 text-center"
      >
        <h1 className="text-white text-4xl font-bold mb-3">{layanan.title}</h1>
        <p className="text-blue-200">{layanan.desc}</p>
      </div>

      {/* Konten */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <img
          src={layanan.image}
          alt={layanan.title}
          className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
        />
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {layanan.detail}
        </p>
        <Link
          to="/layanan"
          className="inline-block border border-[#1a4b8c] text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          ← Kembali ke Layanan
        </Link>
      </div>
    </div>
  )
}