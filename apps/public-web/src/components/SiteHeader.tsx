import { useState } from 'react'

type IconName =
    | 'menu'
    | 'close'
    | 'instagram'
    | 'youtube'
    | 'facebook'
    | 'tiktok'
    | 'spotify'

function Icon({ name }: { name: IconName }) {
    const paths = {
        menu: <path d="M4 7h16M4 12h16M4 17h16" />,
        close: <path d="m6 6 12 12M18 6 6 18" />,
        instagram: (
            <>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
            </>
        ),
        youtube: (
            <>
                <path d="M21 12s0-4-1-5-3-1-8-1-7 0-8 1-1 5-1 5 0 4 1 5 3 1 8 1 7-1 8-1 1-5 1-5Z" />
                <path
                    d="m10 9 5 3-5 3V9Z"
                    fill="currentColor"
                    stroke="none"
                />
            </>
        ),
        facebook: (
            <path
                d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5H18V4a31 31 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8V10H9v3h3v8h2Z"
                fill="currentColor"
                stroke="none"
            />
        ),
        tiktok: (
            <path
                d="M15 4c.4 2.1 1.6 3.4 3.7 3.5v3.1c-1.5 0-2.8-.4-3.8-1.1v5.8c0 3.5-2.4 5.8-5.7 5.8A5.3 5.3 0 0 1 4 15.8c0-3.1 2.5-5.6 5.7-5.6.3 0 .6 0 .9.1v3.2a2.5 2.5 0 0 0-.9-.2 2.5 2.5 0 1 0 2.5 2.5V4H15Z"
                fill="currentColor"
                stroke="none"
            />
        ),

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
                    d="M7.5 12.2c3-0.8 6.1-.5 8.8.8"
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
        )
    }

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
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

const nav = [
    ['Inicio', '/'],
    ['Audios', '/audios'],
    ['Videos', '/videos'],
    ['Reels en vivo', '/reels'],
    ['Historias', '/historias'],
    ['Contacto', '/#contacto']
]

export function SiteHeader() {
    const [menu, setMenu] = useState(false)

    return (
        <header className="site-header">
            <div className="nav">
                <Brand />

                <button
                    className="menu"
                    onClick={() => setMenu(!menu)}
                    aria-label="Abrir menú"
                >
                    <Icon name={menu ? 'close' : 'menu'} />
                </button>

                <nav className={menu ? 'open' : ''}>
                    {nav.map(([name, link]) => (
                        <a
                            href={link}
                            key={name}
                            onClick={() => setMenu(false)}
                        >
                            {name}
                        </a>
                    ))}

                    <div className="mini-socials">

                        <div className="social-item">
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

                        <div className="social-item">
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

                        <div className="social-item">
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

                        <div className="social-item">
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

                        <div className="social-item">
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

                    </div>

                </nav>
            </div>
        </header>
    )
}