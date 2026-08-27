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
  const [progress, setProgress] = useState(0)

  const toggle = (audio: typeof audios[number]) => {
    if (playing === audio.title) {
      player.current?.pause()
      setPlaying(null)
      return
    }

    if (player.current) {
      player.current.pause()
    }

    const nextPlayer = new Audio(audio.file)
    player.current = nextPlayer
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
    }
  }

  return (
    <main className="audios-page">
      <section className="section">
        <div className="heading">
          <p><b>01</b> AUDIOS PARA SENTIR</p>
          <h1>Mi música</h1>
          <span>
            Escucha una selección de canciones de Jhojan Vega.
          </span>
        </div>

        <div className="audio-list">
          {audios.map((audio, i) => (
            <article className="audio" key={audio.title}>
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
    </main>
  )
}