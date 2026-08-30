import { useRef, useState } from 'react'

const audios = [
  { title: 'LA LEY DE LA VIDA', cover: '/images/covers/01 LA LEY DE LA VIDA .png', file: '/audio/01 LA LEY DE LA VIDA  .mp3' },
  { title: 'ANGEL DE AMOR', cover: '/images/covers/02 ANGEL DE AMOR .jpg', file: '/audio/02 ANGEL DE AMOR .mp3' },
  { title: 'SIEMPRE PA LANTE', cover: '/images/covers/03 SIEMPRE PA LANTE.png', file: '/audio/03 SIEMPRE PA LANTE.mp3' },
  { title: 'CENIZAS MOJADAS', cover: '/images/covers/04 CENIZAS MOJADAS .png', file: '/audio/04 CENISAS MOJADAS .mp3' },
  { title: 'MIL AÑOS', cover: '/images/covers/05 MIL AÑOS .png', file: '/audio/05 MIL AÑOS Mp3.mp3' },
  { title: 'MI FORTUNA', cover: '/images/covers/06 MI FORTUNA.jpg', file: '/audio/06 MI FORTUNA .mp3' },
  { title: 'LLUVIA DE AMOR', cover: '/images/covers/07 LLUVIA DE AMOR .jpg', file: '/audio/07 LLUVIA DE AMOR .mp3' },
  { title: 'MI ULTIMO DIA', cover: '/images/covers/08 MI ULTIMO DIA.png', file: '/audio/08 MI ULTIMO DIA .mp3' },
  { title: 'LLORA TU PENA', cover: '/images/covers/09 LLORA TU PENA .jpg', file: '/audio/09 LLORA TU PENA .mp3' },
  { title: 'A PUNTA DE TRAGO', cover: '/images/covers/10 A PUNTA DE TRAGO .png', file: '/audio/10 A PUNTA DE TRAGO .mp3' },
  { title: 'CORAZON DE MADRE', cover: '/images/covers/11 CORAZON DE MADRE .png', file: '/audio/11 CORAZON DE MADRE .mp3' },
  { title: 'EL INDOMABLE', cover: '/images/covers/12 EL INDOMABLE.png', file: '/audio/12 EL INDOMABLE.mp3' }
]

export function Audios() {
  const [playing, setPlaying] = useState<string | null>(null)
  const player = useRef<HTMLAudioElement | null>(null)
  const currentAudio = useRef<string | null>(null)
  const [progress, setProgress] = useState(0)

  const toggle = (audio: typeof audios[number]) => {
    if (currentAudio.current === audio.file && player.current) {
      if (player.current.paused) {
        void player.current.play()
        setPlaying(audio.title)
      } else {
        player.current.pause()
        setPlaying(null)
      }
      return
    }

    if (player.current) {
      player.current.pause()
      player.current.currentTime = 0
    }

    const nextPlayer = new Audio(audio.file)
    player.current = nextPlayer
    currentAudio.current = audio.file
    setProgress(0)

    nextPlayer.play()
    setPlaying(audio.title)
    nextPlayer.ontimeupdate = () => {
  if (nextPlayer.duration) {
    setProgress((nextPlayer.currentTime / nextPlayer.duration) * 100)
  }
}

    nextPlayer.onended = () => {
      setPlaying(null)
      setProgress(0)
      currentAudio.current = null
    }
  }

  return (
    <main className="audios-page">
      <div className="audios-musical-pattern" aria-hidden="true" />
      <div className="audios-art" aria-hidden="true">
        <img className="audios-art-sillon" src="/images/jhojan-vega-sillon.png" alt="" />
        <img className="audios-art-angel" src="/images/covers/02 ANGEL DE AMOR .jpg" alt="" />
        <img className="audios-art-ultimo" src="/images/covers/08 MI ULTIMO DIA.png" alt="" />
      </div>
      <section className="section audios-content">
        <div className="heading audios-heading">
          <img className="audios-brand" src="/images/MARCA.png" alt="Jhojan Vega MÃºsica" />
          <h1 className="audios-title">Mis mejores<br />canciones</h1>
          
          <h1>Mi música</h1>
          <span>
            Escucha una selección de canciones de Jhojan Vega.
          </span>
        </div>

        <div className="audio-list audios-list">
          {audios.map((audio, i) => (
            <article className="audio audios-track" key={audio.title}>
              <b>{String(i + 1).padStart(2, '0')}</b>

              <figure className={`audio-cover ${playing === audio.title ? 'playing' : ''}`}>
                <img src={audio.cover} alt={`Carátula de ${audio.title}`} />
              </figure>

              <div>
                <h3>{audio.title}</h3>
                <span>Jhojan Vega</span>
              </div>

              <div className="progress">
                <div style={{ width: `${playing === audio.title ? progress : 0}%` }} />
              </div>
              

              <button
                onClick={() => toggle(audio)}
                aria-label={playing === audio.title ? `Pausar ${audio.title}` : `Reproducir ${audio.title}`}
              >
                {playing === audio.title ? '❚❚' : '▶'}
              </button>
            </article>
          ))}
        </div>
      </section>
      <a className="whatsapp-float audios-whatsapp" href="https://wa.me/573136249756" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.5.8-.6.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.8-.2-.3.2-.3.7-1.1.1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.4.4 1.7.4.5 0 1.5-.6 1.7-1.1.2-.5.2-.9.1-1Z" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </main>
  )
}
