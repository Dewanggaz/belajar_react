import { useState } from "react"
import { Link } from "react-router-dom"
import "../style/Blog.css"

const blogList = [
  {
    id: 1,
    tag: "Teknologi",
    title: "Transformasi Digital Pendidikan Indonesia 2026",
    excerpt: "Bagaimana teknologi mengubah cara belajar mengajar di seluruh pelosok Indonesia.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    date: "10 Juni 2026",
  },
  {
    id: 2,
    tag: "Inovasi",
    title: "Rumah Pendidikan: Platform Belajar Masa Depan",
    excerpt: "Mengenal lebih dalam platform Rumah Pendidikan yang menghubungkan guru dan siswa.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80",
    date: "5 Juni 2026",
  },
  {
    id: 3,
    tag: "Keamanan",
    title: "Pentingnya Keamanan Siber di Dunia Pendidikan",
    excerpt: "Ancaman siber semakin meningkat, bagaimana dunia pendidikan menghadapinya?",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    date: "1 Juni 2026",
  },
  {
    id: 4,
    tag: "Data",
    title: "Pemanfaatan Big Data untuk Meningkatkan Mutu Pendidikan",
    excerpt: "Data pendidikan yang terintegrasi membantu pengambilan keputusan yang lebih baik.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "28 Mei 2026",
  },
  {
    id: 5,
    tag: "Guru",
    title: "Pelatihan Digital untuk Guru di Daerah Terpencil",
    excerpt: "Program pelatihan intensif membantu guru di daerah 3T menguasai teknologi.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    date: "20 Mei 2026",
  },
  {
    id: 6,
    tag: "Infrastruktur",
    title: "Membangun Infrastruktur Digital Pendidikan yang Merata",
    excerpt: "Upaya pemerintah dalam memeratakan akses internet di seluruh satuan pendidikan.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    date: "15 Mei 2026",
  },
]

export default function Blog() {
  const [search, setSearch] = useState("")

  const filtered = blogList.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Artikel dan tulisan seputar dunia pendidikan digital</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="blog-search">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Cari</button>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            Artikel tidak ditemukan 😔
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b) => (
              <Link to={`/blog/${b.id}`} key={b.id} className="blog-card">
                <img src={b.image} alt={b.title} className="blog-card__img" />
                <div className="blog-card__body">
                  <span className="blog-card__tag">{b.tag}</span>
                  <h3 className="blog-card__title">{b.title}</h3>
                  <p className="blog-card__excerpt">{b.excerpt}</p>
                  <span className="blog-card__date">{b.date}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}