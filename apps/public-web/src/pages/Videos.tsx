import { useEffect, useRef, useState } from 'react'

const videos = [
  { title: 'LA LEY DE LA VIDA', youtube: 'https://youtu.be/8EE6pGTmW1A?si=Un15cP8e0YR5drJh', id: '8EE6pGTmW1A' },
  { title: 'ANGEL DE AMOR', youtube: 'https://youtu.be/ffnVPIfU7Rc?si=QdHxaPDi6lN8HlrQ', id: 'ffnVPIfU7Rc' },
  { title: 'MIL AÑOS', youtube: 'https://youtu.be/nDUDa2BBcYQ?si=xxA4usch7ssCMWpd', id: 'nDUDa2BBcYQ' },
  { title: 'CENIZAS MOJADAS', youtube: 'https://youtu.be/Rg3z5V7_5yk?si=E23N3tWFBjwd9QE6', id: 'Rg3z5V7_5yk' },
  { title: 'MI ULTIMO DIA', youtube: 'https://youtu.be/IkxArKuaCtw?si=qKcW2xK6HYC5-pZX', id: 'IkxArKuaCtw' },
  { title: 'SIEMPRE PA’LANTE', youtube: 'https://youtu.be/Zv9GqY0ZWSE?si=n8QTLrZaqZZE5vjK', id: 'Zv9GqY0ZWSE' }
]

type YouTubePlayer = { destroy: () => void; playVideo: () => void; pauseVideo: () => void }
type YouTubeApi = {
  Player: new (element: string | HTMLElement, options: { videoId: string; playerVars: Record<string, number>; events: { onStateChange: (event: { data: number }) => void } }) => YouTubePlayer
  PlayerState: { PLAYING: number; PAUSED: number }
}

let youtubeApiPromise: Promise<YouTubeApi> | null = null

function loadYouTubeApi() {
  if (youtubeApiPromise) return youtubeApiPromise
  youtubeApiPromise = new Promise((resolve, reject) => {
    const youtubeWindow = window as Window & { YT?: YouTubeApi; onYouTubeIframeAPIReady?: () => void }
    if (youtubeWindow.YT?.Player) { resolve(youtubeWindow.YT); return }
    youtubeWindow.onYouTubeIframeAPIReady = () => { if (youtubeWindow.YT) resolve(youtubeWindow.YT) }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.onerror = () => { youtubeApiPromise = null; reject(new Error('No se pudo cargar la API de YouTube')) }
    document.head.appendChild(script)
  })
  return youtubeApiPromise
}

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [sixPlaying, setSixPlaying] = useState(false)
  const youtubePlayer = useRef<YouTubePlayer | null>(null)
  const youtubeContainer = useRef<HTMLDivElement | null>(null)

  const playVideo = (video: typeof videos[number]) => {
    setVideoReady(false)
    setSixPlaying(video.id === 'Zv9GqY0ZWSE')
    setActiveVideo(video.id)
  }

  const toggleSixthVideo = (video: typeof videos[number]) => {
    if (activeVideo !== video.id) {
      playVideo(video)
      return
    }

    if (sixPlaying) {
      youtubePlayer.current?.pauseVideo()
      setSixPlaying(false)
    } else {
      youtubePlayer.current?.playVideo()
      setSixPlaying(true)
    }
  }

  useEffect(() => {
    if (!activeVideo) return
    const currentVideo = videos.find((video) => video.id === activeVideo)
    if (!currentVideo || !youtubeContainer.current) return
    const target = document.createElement('div')
    target.id = `videos-player-${currentVideo.id}`
    youtubeContainer.current.appendChild(target)
    let cancelled = false
    void loadYouTubeApi().then((YT) => {
      if (cancelled) return
      youtubePlayer.current = new YT.Player(target, {
        videoId: currentVideo.id,
        playerVars: { autoplay: 1, rel: 0 },
        events: {
          onStateChange: ({ data }) => {
            if (data === YT.PlayerState.PLAYING) {
              setVideoReady(true)
              if (currentVideo.id === 'Zv9GqY0ZWSE') setSixPlaying(true)
            }
            if (data === YT.PlayerState.PAUSED && currentVideo.id === 'Zv9GqY0ZWSE') setSixPlaying(false)
          }
        }
      })
    }).catch((error) => console.error('No se pudo iniciar el video:', error))
    return () => {
      cancelled = true
      youtubePlayer.current?.destroy()
      youtubePlayer.current = null
      target.remove()
    }
  }, [activeVideo])

  return (
    <main className="videos-page">
      <div className="videos-musical-pattern" aria-hidden="true" />
      <section className="videos-hero">
        <h1>Videos</h1>
      </section>
      <section className="videos-content" aria-label="Videos de Jhojan Vega">
        <div className="videos-grid">
          {videos.map((video) => {
            const isActive = activeVideo === video.id
            const isSixthVideo = video.id === 'Zv9GqY0ZWSE'
            const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
            const cover = isSixthVideo ? '/images/PORTADA 44.png' : thumbnail
            return (
              <article className="videos-card" key={video.id}>
                <div className="videos-visual">
                  {isActive ? <>
                    <div className="videos-player" ref={youtubeContainer} aria-label={`Reproductor de ${video.title}`} />
                    {isSixthVideo ? <button className="videos-sixth-cover" type="button" onClick={() => toggleSixthVideo(video)} aria-label={sixPlaying ? `Pausar ${video.title}` : `Reproducir ${video.title}`}><img src={cover} alt={`Portada de ${video.title}`} /><span className="videos-play" aria-hidden="true">{sixPlaying ? '❚❚' : '▶'}</span></button> : <div className={`videos-loading-cover ${videoReady ? 'ready' : ''}`} aria-hidden="true"><img src={thumbnail} alt="" /><span className="videos-play">▶</span></div>}
                  </> : <button type="button" onClick={() => isSixthVideo ? toggleSixthVideo(video) : playVideo(video)} aria-label={`Reproducir ${video.title}`}><img src={cover} alt={`Portada de ${video.title}`} loading="lazy" /><span className="videos-play" aria-hidden="true">▶</span></button>}
                </div>
                <h2>{video.title}</h2>
              </article>
            )
          })}
        </div>
      </section>
      <div className="whatsapp-float videos-whatsapp"><a href="https://wa.me/573136249756" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.7.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.5.8-.6.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.8-.2-.3.2-.3.7-1.1.1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.4.4 1.7.4.5 0 1.5-.6 1.7-1.1.2-.5.2-.9.1-1Z" fill="currentColor" stroke="none" /></svg>
      </a></div>
    </main>
  )
}
