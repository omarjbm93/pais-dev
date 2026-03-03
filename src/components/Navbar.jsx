import { useEffect, useRef, useState } from 'react'
import { Menu, X, Shield, ChevronDown, Sun, Moon } from 'lucide-react'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Métricas', href: '#metrics' },
    { label: 'Estados', href: '#estados' },
    { label: 'Reportes', href: '#reportes' },
]

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('Inicio')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.4s ease',
                background: scrolled
                    ? 'var(--bg-nav)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                padding: '0 2rem',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '36px', height: '36px', background: 'linear-gradient(135deg, #C9A84C, #f0d080)',
                        borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 12px rgba(201,168,76,0.4)',
                    }}>
                        <Shield size={18} color="#0A1628" fill="#0A1628" />
                    </div>
                    <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: '#E8C96D', lineHeight: 1 }}>
                            PVF
                        </div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--slate-400)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Control Nacional
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActiveLink(link.label)}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: activeLink === link.label ? 'var(--accent-gold)' : 'var(--text-muted)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                                position: 'relative',
                                paddingBottom: '2px',
                            }}
                        >
                            {link.label}
                            {activeLink === link.label && (
                                <span style={{
                                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                                    height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                                }} />
                            )}
                        </a>
                    ))}
                    <a
                        href="#metrics"
                        className="btn-gold"
                        style={{
                            padding: '8px 20px', borderRadius: '6px', fontSize: '0.78rem',
                            fontWeight: 600, letterSpacing: '0.06em', textDecoration: 'none',
                            textTransform: 'uppercase',
                        }}
                    >
                        Acceder
                    </a>
                    <button
                        onClick={toggleTheme}
                        aria-label="Alternar modo de color"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '6px',
                            borderRadius: '50%',
                        }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Hamburger */}
                <button
                    className="show-mobile"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'none', border: '1px solid rgba(201,168,76,0.3)',
                        borderRadius: '6px', padding: '6px', cursor: 'pointer', color: '#E8C96D',
                        display: 'none',
                    }}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    background: 'var(--bg-nav)',
                    borderTop: '1px solid var(--border-color)',
                    padding: '1.5rem 2rem',
                    display: 'flex', flexDirection: 'column', gap: '1.2rem',
                    animation: 'fadeInDown 0.3s ease both',
                }}>
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => { setActiveLink(link.label); setMenuOpen(false) }}
                            style={{
                                color: activeLink === link.label ? 'var(--accent-gold)' : 'var(--text-muted)',
                                textDecoration: 'none', fontWeight: 500,
                                fontSize: '0.95rem', letterSpacing: '0.04em',
                                borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#metrics"
                        className="btn-gold"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            padding: '10px 20px', borderRadius: '6px', textAlign: 'center',
                            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em',
                            textDecoration: 'none',
                        }}
                    >
                        Acceder al Dashboard
                    </a>
                    <button
                        onClick={toggleTheme}
                        aria-label="Alternar modo de color"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 0',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                        }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                    </button>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </nav>
    )
}
