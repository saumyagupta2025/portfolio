import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-8 pt-28 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
