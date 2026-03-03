import { Shield, Github, Globe, Mail, Phone } from 'lucide-react'

const footerLinks = {
    plataforma: ['Dashboard', 'Métricas', 'Reportes', 'Análisis Regional'],
    gobierno: ['Ministerios', 'Gobernaciones', 'Municipios', 'Organismos'],
    soporte: ['Documentación', 'API', 'Estado del Sistema', 'Contacto'],
}

export default function Footer() {
    return (
        <footer
            id="reportes"
            style={{
                background: 'var(--bg-nav)',
                borderTop: '1px solid var(--border-color)',
                padding: 'clamp(3rem, 6vw, 5rem) clamp(1.2rem, 5vw, 3rem) 2rem',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <div style={{
                                width: '38px', height: '38px',
                                background: 'linear-gradient(135deg, #C9A84C, #f0d080)',
                                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 14px rgba(201,168,76,0.35)',
                            }}>
                                <Shield size={18} color="#0A1628" />
                            </div>
                            <div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: '#E8C96D' }}>
                                    PVF
                                </div>
                                <div style={{ fontSize: '0.58rem', color: 'var(--slate-500)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                                    Control Nacional
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                            Sistema Nacional de Métricas e Indicadores Estratégicos de la República Bolivariana de Venezuela.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Globe, Mail, Phone].map((Icon, i) => (
                                <button key={i} aria-label={['Sitio web', 'Correo', 'Teléfono'][i]} style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', transition: 'all 0.2s',
                                }}>
                                    <Icon size={14} color="#C9A84C" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <div style={{
                                fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em',
                                textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem',
                            }}>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {links.map(link => (
                                    <li key={link}>
                                        <a href="#" style={{
                                            fontSize: '0.83rem', color: 'var(--slate-500)',
                                            textDecoration: 'none', transition: 'color 0.2s',
                                        }}
                                            onMouseEnter={e => e.target.style.color = '#E8C96D'}
                                            onMouseLeave={e => e.target.style.color = 'var(--slate-500)'}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '1.5rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: '1rem',
                }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                        © 2026 Sistema Nacional de Métricas · País Venezuela Abierta al Futuro
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {['Privacidad', 'Términos', 'Seguridad'].map(item => (
                            <a key={item} href="#" style={{
                                fontSize: '0.72rem', color: 'var(--slate-600)',
                                textDecoration: 'none', transition: 'color 0.2s',
                            }}>
                                {item}
                            </a>
                        ))}
                    </div>
                    {/* Flag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ display: 'flex', borderRadius: '3px', overflow: 'hidden', height: '14px' }}>
                            <div style={{ width: '18px', background: '#FFCE00' }} />
                            <div style={{ width: '18px', background: '#003087' }} />
                            <div style={{ width: '18px', background: '#CF142B' }} />
                        </div>
                        <span style={{ fontSize: '0.65rem', color: 'var(--slate-600)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            República Bolivariana
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
