import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Audios } from './pages/Audios'
import { Videos } from './pages/Videos'
import { Reels } from './pages/Reels'
import { Historias } from './pages/Historias'
import { Contacto } from './pages/Contacto'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}
