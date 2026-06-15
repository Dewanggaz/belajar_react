import { useParams, Link } from "react-router-dom"

const beritaList = [
  {
    id: 1,
    kategori: ["Berita", "KemendikdasmenRAMAH"],
    title: "Tasyakuran Hardiknas 2026: Kemendikdasmen Beri Penghargaan Daerah",
    excerpt: "Jakarta, 2 Mei 2026 — Kemendikdasmen menggelar tasyakuran Hari Pendidikan Nasional 2026.",
    isi: "Jakarta, 2 Mei 2026 — Kementerian Pendidikan Dasar dan Menengah menggelar tasyakuran Hari Pendidikan Nasional 2026 dengan pemberian penghargaan kepada daerah-daerah yang berprestasi dalam bidang pendidikan. Acara ini dihadiri oleh para pejabat tinggi kementerian dan perwakilan dari seluruh provinsi di Indonesia. Penghargaan diberikan kepada daerah yang berhasil meningkatkan kualitas pendidikan secara signifikan.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "2 Mei 2026",
  },
  {
    id: 2,
    kategori: ["Berita", "PendidikanBermutuuntukSemua"],
    title: "Kemendikdasmen Ajak Masyarakat Dukung Rumah Pendidikan",
    excerpt: "Jakarta, 18 April 2026 — Dua inovasi digital unggulan Kemendikdasmen dipresentasikan.",
    isi: "Jakarta, 18 April 2026 — Kementerian Pendidikan Dasar dan Menengah mengajak seluruh lapisan masyarakat untuk mendukung program Rumah Pendidikan. Program ini merupakan inovasi digital unggulan yang bertujuan untuk meningkatkan akses dan kualitas pendidikan di seluruh Indonesia. Melalui platform digital ini, masyarakat dapat berpartisipasi aktif dalam mendukung ekosistem pendidikan yang lebih baik.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    date: "18 April 2026",
  },
  {
    id: 3,
    kategori: ["Artikel Lomba", "Cybersecurity"],
    title: "Program Bug Bounty 2026 Resmi Diluncurkan",
    excerpt: "Pusdatin meluncurkan program Bug Bounty 2026 untuk memperkuat keamanan siber.",
    isi: "Pusat Data dan Teknologi Informasi Kemendikdasmen secara resmi meluncurkan Program Bug Bounty 2026. Program ini mengundang para peneliti keamanan siber untuk menemukan dan melaporkan kerentanan dalam sistem digital Kemendikdasmen. Peserta yang berhasil menemukan bug kritis akan mendapatkan hadiah yang menarik. Program ini merupakan bagian dari upaya Kemendikdasmen dalam memperkuat keamanan ekosistem digital pendidikan nasional.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    date: "10 April 2026",
  },
  {
    id: 4,
    kategori: ["PendidikanBermutuuntukSemua", "KemendikdasmenRAMAH"],
    title: "Sekolah 3T di NTT Rasakan Dampak Langsung Digitalisasi",
    excerpt: "Kabupaten Malaka, NTT, 18 Maret 2026 — Digitalisasi pembelajaran mulai menunjukkan hasil.",
    isi: "Kabupaten Malaka, NTT, 18 Maret 2026 — Sekolah-sekolah di daerah 3T (Tertinggal, Terdepan, dan Terluar) di Nusa Tenggara Timur mulai merasakan dampak positif dari program digitalisasi pembelajaran yang digagas oleh Kemendikdasmen. Para siswa kini dapat mengakses materi pembelajaran berkualitas melalui perangkat digital yang disediakan oleh pemerintah.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    date: "18 Maret 2026",
  },
  {
    id: 5,
    kategori: ["Berita", "RumahPendidikan"],
    title: "Kemendikdasmen Dorong Guru Optimalkan Pemanfaatan Teknologi",
    excerpt: "Jakarta, 14 Februari 2026 — Kemendikdasmen mendorong guru mengoptimalkan teknologi.",
    isi: "Jakarta, 14 Februari 2026 — Kementerian Pendidikan Dasar dan Menengah terus mendorong para guru untuk mengoptimalkan pemanfaatan teknologi dalam proses pembelajaran. Berbagai pelatihan dan workshop telah diselenggarakan untuk meningkatkan kompetensi digital para pendidik di seluruh Indonesia. Upaya ini merupakan bagian dari transformasi digital pendidikan yang sedang digalakkan oleh Kemendikdasmen.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    date: "14 Februari 2026",
  },
  {
    id: 6,
    kategori: ["Berita", "KemendikdasmenRAMAH"],
    title: "Webinar Rilis Pelatihan Mandiri: Papan Interaktif Digital",
    excerpt: "Pusdatin menggelar webinar pelatihan mandiri bertema papan interaktif digital.",
    isi: "Pusat Data dan Teknologi Informasi Kemendikdasmen menggelar webinar pelatihan mandiri dengan tema pemanfaatan papan interaktif digital dalam pembelajaran. Webinar ini diikuti oleh ribuan guru dari seluruh Indonesia secara daring. Para peserta mendapatkan pengetahuan dan keterampilan baru dalam menggunakan teknologi papan interaktif untuk menciptakan pembelajaran yang lebih menarik dan efektif.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    date: "5 Februari 2026",
  },
]

export default function DetailBerita() {
  const { id } = useParams()
  const berita = beritaList.find((b) => b.id === parseInt(id))

  if (!berita) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Berita tidak ditemukan</p>
          <Link to="/" className="text-[#1a4b8c] font-semibold hover:underline">
            ← Kembali ke Home
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
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {berita.kategori.map((k) => (
            <span key={k} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
              {k}
            </span>
          ))}
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug">
          {berita.title}
        </h1>
        <p className="text-blue-200 text-sm mt-3">{berita.date}</p>
      </div>

      {/* Konten */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <img
          src={berita.image}
          alt={berita.title}
          className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
        />
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {berita.isi}
        </p>
        <Link
          to="/"
          className="inline-block border border-[#1a4b8c] text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </div>
  )
}