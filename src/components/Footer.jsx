export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#1a4b8c] flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <p className="font-bold text-lg">
                  <span className="text-[#1a4b8c]">Kemen</span>
                  <span className="text-yellow-500">dikdasmen</span>
                </p>
                <p className="text-xs text-gray-400">Pusat Data dan Teknologi Informasi</p>
              </div>
            </div>
          </div>

          {/* Alamat */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span>📍</span>
              <div>
                <p className="font-semibold text-sm text-[#0d2b6b]">Alamat Kantor</p>
                <p className="text-sm text-gray-600">Jl. RE. Martadinata</p>
                <p className="text-sm text-gray-600">Ciputat, Tangerang Selatan, 15411</p>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span>💬</span>
              <div>
                <p className="font-semibold text-sm text-[#0d2b6b]">Unit Layanan Terpadu</p>
                <p className="text-sm text-gray-600">Telp. 177</p>
                <p className="text-sm text-gray-600">WhatsApp: 081218040427</p>
              </div>
            </div>
          </div>

          {/* Jam & Kontak */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span>🕐</span>
              <div>
                <p className="font-semibold text-sm text-[#0d2b6b]">Jam Operasional</p>
                <p className="text-sm text-gray-600">Senin – Jum'at</p>
                <p className="text-sm text-gray-600">08:00 – 15:00 WIB</p>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span>📞</span>
              <div>
                <p className="font-semibold text-sm text-[#0d2b6b]">Kontak Kami</p>
                <p className="text-sm text-gray-600">(021) 741 8808</p>
                <p className="text-sm text-gray-600">pusdatin@kemendikdasmen.go.id</p>
              </div>
            </div>
          </div>

          {/* Sosmed */}
          <div>
            <p className="font-semibold text-sm text-[#0d2b6b] mb-3">
              Temukan kami di sosial media
            </p>
            <div className="flex gap-3">
                {["📘", "📸", "▶️", "✕"].map((icon, i) => (
                    <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-bold"
                 >
                    {icon}
                 </a>   
                )
            )}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0d2b6b] py-3 px-4 text-center">
        <p className="text-white/70 text-xs">
          Hak cipta © 2024 Pusdatin Kemendikdasmen. Seluruh hak cipta dilindungi undang-undang
          dan terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia
        </p>
      </div>
    </footer>
  )
}