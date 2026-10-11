import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function Layout() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <Link className="logo" to="/">SÖ.</Link>

        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/hakkimda">Hakkımda</Link>
          <Link to="/projelerim">Projelerim</Link>
          <Link to="/iletisim">İletişim</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/projelerim" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} Seher Özmen · Portfolio
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}