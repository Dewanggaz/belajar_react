import Hero from '../components/Hero'
import Layanan from '../components/Layanan'
import DataSection from '../components/DataSection'
import Berita from '../components/Berita'
import Users from '../components/Users'

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <DataSection />
      <Berita />
      <Users />
    </div>
  )
}