import { useEffect, useRef, useState } from 'react'

type IconName =
  | 'arrow' | 'menu' | 'close' | 'music'
  | 'video' | 'instagram' | 'youtube' | 'facebook' | 'tiktok' | 'spotify' | 'whatsapp'
  | 'play' | 'pause'

function Icon({ name }: { name: IconName }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    music: <><path d="M9 18V6l10-2v12" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
    play: <path d="m9 6 8 6-8 6V6Z" fill="currentColor" stroke="none" />,
    pause: <path d="M9 6v12M15 6v12" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></>,
    youtube: <><path d="M21 12s0-4-1-5-3-1-8-1-7 0-8 1-1 5-1 5 0 4 1 5 3 1 8 1 7-1 8-1 1-5 1-5Z" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5H18V4a31 31 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8V10H9v3h3v8h2Z" fill="currentColor" stroke="none" />,
    tiktok: <path d="M15 4c.4 2.1 1.6 3.4 3.7 3.5v3.1c-1.5 0-2.8-.4-3.8-1.1v5.8c0 3.5-2.4 5.8-5.7 5.8A5.3 5.3 0 0 1 4 15.8c0-3.1 2.5-5.6 5.7-5.6.3 0 .6 0 .9.1v3.2a2.5 2.5 0 0 0-.9-.2 2.5 2.5 0 1 0 2.5 2.5V4H15Z" fill="currentColor" stroke="none" />,
    spotify: (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />

        <path
          d="M7 9.5c3.6-1.1 7.2-.8 10.2.8"
          fill="none"
          stroke="#090611"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M7.5 12.2c3-.8 6.1-.5 8.8.8"
          fill="none"
          stroke="#090611"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M8.2 14.8c2.3-.5 4.6-.3 6.7.7"
          fill="none"
          stroke="#090611"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
    whatsapp: <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.5.8-.6.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.8-.2-.3.2-.3.7-1.1.1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.4.4 1.7.4.5 0 1.5-.6 1.7-1.1.2-.5.2-.9.1-1Z" fill="currentColor" stroke="none" />
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="/">
      <img src="/images/MARCA.png" alt="Jhojan Vega Música" />
    </a>
  )
}

const audios = [
  { title: 'LA LEY DE LA VIDA', composer: 'Jhojan Vega', cover: '/images/covers/01 LA LEY DE LA VIDA .png', file: '/audio/01 LA LEY DE LA VIDA  .mp3' },
  { title: 'ANGEL DE AMOR', composer: 'Jhojan Vega', cover: '/images/covers/02 ANGEL DE AMOR .jpg', file: '/audio/02 ANGEL DE AMOR .mp3' },
  { title: 'SIEMPRE PA LANTE', composer: 'Jhojan Vega', cover: '/images/covers/03 SIEMPRE PA LANTE.png', file: '/audio/03 SIEMPRE PA LANTE.mp3' },
]


const videos = [
  {
    title: 'LA LEY DE LA VIDA',
    youtube: 'https://youtu.be/8EE6pGTmW1A',
    thumbnail: 'https://img.youtube.com/vi/8EE6pGTmW1A/hqdefault.jpg'
  },
  {
    title: 'ANGEL DE AMOR',
    youtube: 'https://youtu.be/ffnVPIfU7Rc',
    thumbnail: 'https://img.youtube.com/vi/ffnVPIfU7Rc/hqdefault.jpg'
  },
  {
    title: 'MIL AÑOS',
    youtube: 'https://youtu.be/nDUDa2BBcYQ',
    thumbnail: 'https://img.youtube.com/vi/nDUDa2BBcYQ/hqdefault.jpg'
  }
]

const reels = [
  { title: 'DESPECHO', file: '/media/reels/01 DESPECHO.mp4', cover: '/media/reels/covers/01.jpg' },
  { title: 'VALLENATO', file: '/media/reels/02 VALLENATO.mp4', cover: '/media/reels/covers/02.jpg' },
  { title: 'VALLENATO MIX', file: '/media/reels/03 VALLENATO MIX.mp4', cover: '/media/reels/covers/03.jpg' },
  { title: 'VALLENATO', file: '/media/reels/04 VALLENATO.mp4', cover: '/media/reels/covers/04.jpg' },
  { title: 'CATALOGO', file: '/media/reels/05 CATALOGO.mp4', cover: '/media/reels/covers/05.jpg' },
  { title: 'DISCOTECA', file: '/media/reels/06 DISCOTECA.mp4', cover: '/media/reels/covers/06.jpg' }
]

export function Home() {

  const [playing, setPlaying] = useState<string | null>(null)
  const player = useRef<HTMLAudioElement | null>(null)
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null)
  const reelPlayers = useRef<Record<string, HTMLVideoElement | null>>({})
  const [reelPlaying, setReelPlaying] = useState<string | null>(null)
  const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
    const footer = document.getElementById('contacto')

    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  const toggle = async (audio: typeof audios[number]) => {
    if (playing === audio.title) {
      player.current?.pause()
      setPlaying(null)
      return
    }

    player.current?.pause()

    const nextPlayer = new Audio()
    nextPlayer.src = audio.file
    nextPlayer.preload = 'auto'
    player.current = nextPlayer

    try {
      await nextPlayer.play()
      setPlaying(audio.title)
    } catch (error) {
      console.error('No se pudo reproducir el audio:', error)
      setPlaying(null)
    }

    nextPlayer.onended = () => {
      setPlaying(null)
    }
  }

  const toggleReel = (reel: typeof reels[number]) => {
    const current = reelPlayers.current[reel.file]

    Object.values(reelPlayers.current).forEach((video) => {
      if (video && video !== current) {
        video.pause()
        video.currentTime = 0
      }
    })

    if (!current) return

    if (current.paused) {
      current.play()
      setReelPlaying(reel.file)
    } else {
      current.pause()
      setReelPlaying(null)
    }

  }



  return (
    <main className="home-page">

      <section className="hero">
        <div className="copy">
          <p className="eyebrow">MÚSICA · JHOJAN VEGA</p>

          <h1>
            Jhojan Vega <em>Música</em>
          </h1>


          <a className="primary" href="/audios">
            Escuchar audios
            <Icon name="arrow" />
          </a>
        </div>

        <div className="portrait" aria-label="Fotografía oficial de Jhojan Vega">
          <img src="/images/portada-artista.png" alt="Jhojan Vega" />
        </div>

      </section>

      <section className="section">
        <div className="heading compact-heading">
          <h2>Audios</h2>
        </div>

        <div className="audio-list">
          {audios.map((audio, i) => (
            <article className="audio" key={audio.title}>
              <b>0{i + 1}</b>

              <figure className={`audio-cover ${playing === audio.title ? 'playing' : ''}`}>
                <img src={audio.cover} alt={`Carátula de ${audio.title}`} />
              </figure>

              <div>
                <h3>{audio.title}</h3>
                <span>{audio.composer}</span>
              </div>

              <div className={`progress ${playing === audio.title ? 'playing' : ''}`}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <button
                onClick={() => toggle(audio)}
                aria-label={playing === audio.title ? 'Pausar' : 'Reproducir'}
              >
                <Icon name={playing === audio.title ? 'pause' : 'play'} />
              </button>
            </article>
          ))}
        </div>

        <a className="text-link" href="/audios">
          Ver los 12 audios
          <Icon name="arrow" />
        </a>
      </section>

      <section className="section band">
        <div className="heading compact-heading">
          <h2>Videos</h2>
        </div>

        <div className="cards videos">
          {videos.map((video, i) => (
            <article className="card" key={video.title}>
              <div
                className={`visual video video-home-${i + 1}`}
              >
                {videoPlaying === video.youtube ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtube.split('/').pop()}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                    />

                    <button
                      onClick={() => setVideoPlaying(video.youtube)}
                      aria-label={`Reproducir ${video.title}`}
                    >
                      <Icon name="play" />
                    </button>

                    <small>VIDEO</small>
                  </>
                )}
              </div>

            </article>
          ))}
        </div>

        <a className="outline" href="/videos">
          Ver los 6 videos
          <Icon name="arrow" />
        </a>
      </section>

      <section className="section">
        <div className="heading compact-heading">
          <h2>Reels en vivo</h2>
        </div>

        <div className="cards reels">
          {reels.slice(0, 4).map((reel, i) => (
            <article className="card" key={reel.title}>
              <div className={`visual reel r${i}`}>
                <video
                  ref={(element) => {
                    reelPlayers.current[reel.file] = element
                  }}
                  poster={reel.cover}
                  src={reel.file}
                  preload="metadata"
                  playsInline
                  onPlay={() => setReelPlaying(reel.file)}
                  onPause={() => {
                    if (reelPlayers.current[reel.file]?.ended) {
                      setReelPlaying(null)
                    }
                  }}
                />
                <button
                  onClick={() => toggleReel(reel)}
                  aria-label={reelPlaying === reel.file ? 'Pausar' : 'Reproducir'}
                >
                  <Icon name={reelPlaying === reel.file ? 'pause' : 'play'} />
                </button>
                <small>EN VIVO</small>
              </div>

              <div>
                <span>Jhojan Vega</span>
                <h3>{reel.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <a className="outline" href="/reels">
          Ver los 6 reels
          <Icon name="arrow" />
        </a>
      </section>


      <footer id="contacto">
        <Brand />


        <aside className="footer-socials">

          <div className="social-link">
            <a
              href="https://www.tiktok.com/@jhojan_vega_musica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Icon name="tiktok" />
            </a>
            <span>TikTok</span>
          </div>

          <div className="social-link">
            <a
              href="https://www.youtube.com/@jhojanvegamusica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Icon name="youtube" />
            </a>
            <span>YouTube</span>
          </div>

          <div className="social-link">
            <a
              href="https://www.instagram.com/jhojanvega_compositor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon name="instagram" />
            </a>
            <span>Instagram</span>
          </div>

          <div className="social-link">
            <a
              href="https://www.facebook.com/dinastiiavallenata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon name="facebook" />
            </a>
            <span>Facebook</span>
          </div>

          <div className="social-link">
            <a
              href="https://open.spotify.com/intl-es/artist/3WGop7cjVVkwnfoWBz0e5O"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <Icon name="spotify" />
            </a>
            <span>Spotify</span>
          </div>

        </aside>

      </footer>
      <div className={`whatsapp-float ${footerVisible ? 'footer-visible' : ''}`}>
        <button aria-label="WhatsApp">
          <Icon name="whatsapp" />
        </button>
      </div>
    </main>
  )
}
