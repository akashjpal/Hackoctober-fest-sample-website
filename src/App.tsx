import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <style>{`
        .nav-link {
          color: #1a1a1a;
        }
      `}</style>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 Hacktoberfest. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App