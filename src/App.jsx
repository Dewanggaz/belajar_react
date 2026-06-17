import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LayananPage from './pages/Layanan'
import DetailLayanan from './pages/DetailLayanan'
import DetailBerita from './pages/DetailBerita'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/layanan/:id" element={<DetailLayanan />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}