import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Interests from './pages/Interests'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Knowledge from './pages/Knowledge'
import KnowledgeNote from './pages/KnowledgeNote'
import Library from './pages/Library'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true)
  const [splashMounted, setSplashMounted] = useState(true)

  useEffect(() => {
    const fadeOut = setTimeout(() => setSplashVisible(false), 2200)
    const unmount = setTimeout(() => setSplashMounted(false), 2900)
    return () => { clearTimeout(fadeOut); clearTimeout(unmount) }
  }, [])

  return (
    <>
      {splashMounted && <SplashScreen visible={splashVisible} />}
      <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:slug" element={<KnowledgeNote />} />
          <Route path="/library" element={<Library />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}
