import { Suspense } from 'react'
import { ChevronDown, BarChart2, Radio } from 'lucide-react'
import ParticleField from './ParticleField'

export default function HeroSection() {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at 30% 40%, var(--bg-surface) 0%, var(--bg-main) 80%, var(--bg-main) 100%)',
            }}
        >
            {/* Three.js Particle Canvas */}
            <Suspense fallback={null}>
                <ParticleField />
            </Suspense>

            {/* Gradient overlays */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'radial-gradient(ellipse at center bottom, rgba(201,168,76,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 1,
                background: 'linear-gradient(to top, var(--bg-main), transparent)',
                pointerEvents: 'none',
            }} />

            {/* Flag stripe accent */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #CF142B 0%, #CF142B 33.33%, #003087 33.33%, #003087 66.66%, #FFCE00 66.66%, #FFCE00 100%)',
                opacity: 0.7, zIndex: 2,
            }} />

            {/* Content */}
            <div style={{
                position: 'relative', zIndex: 2, textAlign: 'center',
                padding: '0 1.5rem', maxWidth: '900px', width: '100%',
            }}>
                {/* Badge */}
                <div
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)',
                        borderRadius: '100px', padding: '6px 18px', marginBottom: '2rem',
                        animation: 'fadeInUp 0.7s ease both',
                    }}
                >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', display: 'inline-block' }} className="animate-live-pulse" />
                    <span style={{ fontSize: '0.72rem', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        Sistema Activo · Datos en Tiempo Real
                    </span>
                </div>

                {/* Main title */}
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                        fontWeight: 600,
                        lineHeight: 1.05,
                        color: 'var(--text-main)',
                        marginBottom: '0.3rem',
                        animation: 'fadeInUp 0.9s 0.1s ease both',
                    }}
                >
                    País Venezuela
                </h1>
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        lineHeight: 1.05,
                        marginBottom: '2rem',
                        animation: 'fadeInUp 0.9s 0.25s ease both',
                    }}
                    className="text-gold-shimmer"
                >
                    Abierta al Futuro
                </h1>

                {/* Divider */}
                <div className="gold-divider" style={{ marginBottom: '2rem', animation: 'fadeInUp 0.9s 0.4s ease both' }} />

                {/* Subtitle */}
                <p
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
                        color: 'var(--slate-400)',
                        maxWidth: '620px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        animation: 'fadeInUp 0.9s 0.5s ease both',
                    }}
                >
                    Plataforma Centralizada de Control Interno y Métricas Nacionales
                    para la toma de decisiones estratégicas en tiempo real.
                </p>

                {/* CTAs */}
                <div
                    style={{
                        display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
                        animation: 'fadeInUp 0.9s 0.65s ease both',
                    }}
                >
                    <a
                        href="#metrics"
                        className="btn-gold"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 32px', borderRadius: '8px', fontSize: '0.88rem',
                            fontWeight: 600, letterSpacing: '0.06em', textDecoration: 'none',
                            textTransform: 'uppercase',
                        }}
                    >
                        <BarChart2 size={16} />
                        Acceder al Dashboard
                    </a>
                    <a
                        href="#estados"
                        className="btn-outline"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 32px', borderRadius: '8px', fontSize: '0.88rem',
                            textDecoration: 'none', textTransform: 'uppercase',
                        }}
                    >
                        <Radio size={16} />
                        Reportes en Vivo
                    </a>
                </div>

                {/* Stats strip */}
                <div
                    style={{
                        display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 5vw, 4rem)',
                        marginTop: '4rem', flexWrap: 'wrap',
                        animation: 'fadeInUp 0.9s 0.85s ease both',
                    }}
                >
                    {[
                        { num: '24', label: 'Estados', suffix: '' },
                        { num: '340+', label: 'Indicadores', suffix: '' },
                        { num: '99.8', label: 'Uptime', suffix: '%' },
                    ].map(stat => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                                fontWeight: 600, color: 'var(--accent-gold)', lineHeight: 1,
                            }}>
                                {stat.num}{stat.suffix}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
                    zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    animation: 'fadeInUp 1s 1.2s ease both',
                }}
            >
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                    Explorar
                </span>
                <ChevronDown size={16} color="var(--gold-400)" className="animate-bounce-chevron" style={{ color: 'var(--gold-400)' }} />
            </div>
        </section>
    )
}
