import { useRef } from 'react'
import { Activity } from 'lucide-react'
import MetricCard, { METRICS } from './MetricCard'

export default function MetricsDashboard() {
    const sectionRef = useRef(null)

    return (
        <section
            id="metrics"
            ref={sectionRef}
            style={{
                padding: 'clamp(4rem, 8vw, 7rem) clamp(1.2rem, 5vw, 3rem)',
                background: 'linear-gradient(180deg, var(--bg-main) 0%, var(--bg-surface) 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background grid */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <div style={{
                            width: '32px', height: '32px', background: 'rgba(201,168,76,0.1)',
                            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid rgba(201,168,76,0.25)',
                        }}>
                            <Activity size={15} color="#C9A84C" />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Dashboard Nacional
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} className="animate-live-pulse" />
                            <span style={{ fontSize: '0.68rem', color: 'var(--slate-500)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>En vivo</span>
                        </div>
                    </div>

                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        marginBottom: '0.75rem',
                    }}>
                        Métricas de Control Nacional
                    </h2>
                    <p style={{ color: 'var(--slate-500)', maxWidth: '540px', lineHeight: 1.7, fontSize: '0.9rem' }}>
                        Indicadores estratégicos actualizados en tiempo real para el análisis
                        y seguimiento del desempeño económico y productivo del país.
                    </p>
                    <div className="gold-divider" style={{ marginTop: '1.5rem', marginLeft: 0 }} />
                </div>

                {/* Bento Grid */}
                <div style={{
                    display: 'grid',
                    gap: '1.2rem',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: 'auto',
                }}>
                    {/* PIB - large top left */}
                    <div style={{ gridColumn: 'span 5', gridRow: 'span 2' }} className="bento-large">
                        <MetricCard metric={METRICS[0]} />
                    </div>

                    {/* Producción Agrícola */}
                    <div style={{ gridColumn: 'span 4' }} className="bento-sm">
                        <MetricCard metric={METRICS[1]} />
                    </div>

                    {/* Eficiencia Logística */}
                    <div style={{ gridColumn: 'span 3' }} className="bento-sm">
                        <MetricCard metric={METRICS[2]} />
                    </div>

                    {/* Exportaciones - large */}
                    <div style={{ gridColumn: 'span 4' }} className="bento-sm">
                        <MetricCard metric={METRICS[3]} />
                    </div>

                    {/* Inflacion */}
                    <div style={{ gridColumn: 'span 3' }} className="bento-sm">
                        <MetricCard metric={METRICS[4]} />
                    </div>

                    {/* Empleo Formal */}
                    <div style={{ gridColumn: 'span 7' }} className="bento-sm">
                        <MetricCard metric={METRICS[5]} />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .bento-large { grid-column: span 12 !important; grid-row: span 1 !important; }
          .bento-sm    { grid-column: span 6 !important; }
        }
        @media (max-width: 640px) {
          .bento-large { grid-column: span 12 !important; }
          .bento-sm    { grid-column: span 12 !important; }
        }
      `}</style>
        </section>
    )
}
