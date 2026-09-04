import { useRef, useState } from 'react'
import { ResponsiveSocials } from '../components/ResponsiveSocials'

const reels = [
  { id: '01', title: 'DESPECHO', file: '/media/reels/01 DESPECHO.mp4', cover: '/images/reels/01 R CARATULA.jpg' },
  { id: '02', title: 'VALLENATO', file: '/media/reels/02 VALLENATO.mp4', cover: '/images/reels/02 R CARATULA.jpg' },
  { id: '03', title: 'VALLENATO MIX', file: '/media/reels/03 VALLENATO MIX.mp4', cover: '/images/reels/03 R CARATULA.jpg' },
  { id: '04', title: 'VALLENATO', file: '/media/reels/04 VALLENATO.mp4', cover: '/images/reels/04 R CARATULA.jpg' },
  { id: '05', title: 'CATALOGO', file: '/media/reels/05 CATALOGO.mp4', cover: '/images/reels/05 R CARATULA.jpg' },
  { id: '06', title: 'DISCOTECA', file: '/media/reels/06 DISCOTECA.mp4', cover: '/images/reels/06 R CARATULA.jpg' },
  { id: '07', title: 'FIESTA', file: '/media/reels/07 FIESTA.mp4', cover: '/images/reels/07 R CARATULA.jpg' },
  { id: '08', title: 'DISCO', file: '/media/reels/08 DISCO.mp4', cover: '/images/reels/08 R CARATULA.jpg' }
]

export function Reels() {
  const players = useRef<Record<string, HTMLVideoElement | null>>({})
  const [playingId, setPlayingId] = useState<string | null>(null)

  const toggleReel = (reel: typeof reels[number]) => {
    const current = players.current[reel.id]
    if (!current) return

    Object.entries(players.current).forEach(([id, video]) => {
      if (id !== reel.id) video?.pause()
    })

    if (current.paused) {
      void current.play().catch((error) => {
        console.error('No se pudo reproducir el reel:', error)
        setPlayingId(null)
      })
    } else {
      current.pause()
    }
  }

  return (
    <main className="reels-page">
      <div className="reels-musical-pattern" aria-hidden="true" />
      <section className="reels-hero"><h1>Reels</h1><ResponsiveSocials className="reels-responsive-socials" /></section>
      <section className="reels-content" aria-label="Reels de Jhojan Vega">
        <div className="reels-page-grid">
          {reels.map((reel) => {
            const isPlaying = playingId === reel.id
            return (
              <article className="reels-page-card" key={reel.id}>
                <div className="reels-page-visual">
                  <video
                    ref={(element) => { players.current[reel.id] = element }}
                    src={reel.file}
                    poster={reel.cover}
                    preload="none"
                    playsInline
                    onPlay={() => setPlayingId(reel.id)}
                    onPause={() => setPlayingId((current) => current === reel.id ? null : current)}
                    onEnded={() => setPlayingId(null)}
                  />
                  <button type="button" onClick={() => toggleReel(reel)} aria-label={isPlaying ? `Pausar ${reel.title}` : `Reproducir ${reel.title}`}>
                    <span className="reels-page-play" aria-hidden="true">{isPlaying ? '❚❚' : '▶'}</span>
                  </button>
                </div>
                <h2>{reel.title}</h2>
              </article>
            )
          })}
        </div>
      </section>
      <div className="whatsapp-float reels-whatsapp"><a href="https://wa.me/573136249756" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.5.8-.6.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.8-.2-.3.2-.3.7-1.1.1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.4.4 1.7.4.5 0 1.5-.6 1.7-1.1.2-.5.2-.9.1-1Z" fill="currentColor" stroke="none" /></svg>
      </a></div>
    </main>
  )
}
