const layananItems = [
  { title: "Jabatan Fungsional PTP", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
  { title: "SPBE", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
  { title: "EduCSIRT", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
  { title: "Dapodik", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
  { title: "Akun Pembelajaran", image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80" },
  { title: "MELIA", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
]

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d2b6b] mb-10">
          Telusuri Layanan Kemendikdasmen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {layananItems.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md group cursor-pointer">
              
              {/* Gambar */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Footer card */}
              <div className="bg-[#1a4b8c] px-4 py-3 flex justify-between items-center">
                <span className="text-white font-semibold">{item.title}</span>
                <span className="text-white">→</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}