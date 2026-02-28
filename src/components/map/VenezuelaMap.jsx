import { useState } from 'react'
import { MapPin } from 'lucide-react'

// Venezuelan states with approximate SVG coords and performance scores
const STATES = [
    { id: 've-am', name: 'Amazonas', score: 62, x: 220, y: 290, w: 80, h: 90 },
    { id: 've-an', name: 'Anzoátegui', score: 78, x: 380, y: 160, w: 80, h: 65 },
    { id: 've-ap', name: 'Apure', score: 55, x: 175, y: 200, w: 120, h: 90 },
    { id: 've-ar', name: 'Aragua', score: 82, x: 290, y: 140, w: 45, h: 40 },
    { id: 've-ba', name: 'Barinas', score: 69, x: 185, y: 145, w: 80, h: 70 },
    { id: 've-bo', name: 'Bolívar', score: 71, x: 310, y: 210, w: 140, h: 130 },
    { id: 've-ca', name: 'Carabobo', score: 88, x: 265, y: 120, w: 40, h: 40 },
    { id: 've-co', name: 'Cojedes', score: 74, x: 253, y: 145, w: 45, h: 45 },
    { id: 've-da', name: 'Delta Amacuro', score: 59, x: 450, y: 190, w: 60, h: 80 },
    { id: 've-dc', name: 'Caracas (DC)', score: 91, x: 300, y: 105, w: 20, h: 20 },
    { id: 've-fa', name: 'Falcón', score: 67, x: 225, y: 65, w: 90, h: 55 },
    { id: 've-gu', name: 'Guárico', score: 73, x: 290, y: 175, w: 90, h: 70 },
    { id: 've-la', name: 'Lara', score: 80, x: 210, y: 90, w: 75, h: 55 },
    { id: 've-me', name: 'Mérida', score: 77, x: 160, y: 115, w: 55, h: 50 },
    { id: 've-mi', name: 'Miranda', score: 85, x: 325, y: 120, w: 50, h: 45 },
    { id: 've-mo', name: 'Monagas', score: 76, x: 415, y: 150, w: 65, h: 60 },
    { id: 've-ne', name: 'Nueva Esparta', score: 83, x: 420, y: 90, w: 30, h: 25 },
    { id: 've-po', name: 'Portuguesa', score: 71, x: 225, y: 120, w: 60, h: 55 },
    { id: 've-su', name: 'Sucre', score: 68, x: 430, y: 120, w: 60, h: 45 },
    { id: 've-ta', name: 'Táchira', score: 79, x: 140, y: 150, w: 50, h: 50 },
    { id: 've-tr', name: 'Trujillo', score: 72, x: 200, y: 100, w: 45, h: 45 },
    { id: 've-ya', name: 'Yaracuy', score: 75, x: 250, y: 100, w: 38, h: 38 },
    { id: 've-zu', name: 'Zulia', score: 87, x: 120, y: 60, w: 80, h: 110 },
]

function getScoreColor(score) {
    if (score >= 85) return '#C9A84C'      // Gold = excellent
    if (score >= 75) return '#1a5c3a'      // Dark green = good
    if (score >= 65) return '#1a3566'      // Deep blue = moderate
    return '#3d2020'                        // Dark red = low
}
function getScoreBorder(score) {
    if (score >= 85) return 'rgba(201,168,76,0.6)'
    if (score >= 75) return 'rgba(34,197,94,0.4)'
    if (score >= 65) return 'rgba(96,165,250,0.3)'
    return 'rgba(239,68,68,0.3)'
}

export default function VenezuelaMap() {
    const [tooltip, setTooltip] = useState(null)
    const [hovered, setHovered] = useState(null)

    const handleMouseEnter = (state, e) => {
        setHovered(state.id)
        setTooltip({ state, x: e.clientX, y: e.clientY })
    }
    const handleMouseMove = (e) => {
        if (tooltip) setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
    const handleMouseLeave = () => {
        setHovered(null)
        setTooltip(null)
    }

    return (
        <section
            id="estados"
            style={{
                padding: 'clamp(4rem, 8vw, 7rem) clamp(1.2rem, 5vw, 3rem)',
                background: 'linear-gradient(180deg, #060d1a 0%, #0A1628 100%)',
                position: 'relative', overflow: 'hidden',
            }}
        >
            {/* Flag stripe accent */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, #CF142B 0%, #CF142B 33.33%, #003087 33.33%, #003087 66.66%, #FFCE00 66.66%, #FFCE00 100%)',
                opacity: 0.5,
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
                        <MapPin size={14} color="#C9A84C" />
                        <span style={{ fontSize: '0.72rem', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Cobertura Territorial
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 600, color: '#f1f5f9', marginBottom: '1rem',
                    }}>
                        Control por Estado
                    </h2>
                    <p style={{ color: 'var(--slate-500)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
                        Monitoreo individualizado de los 24 estados con indicadores de rendimiento operacional en tiempo real.
                    </p>
                    <div className="gold-divider" style={{ marginTop: '1.5rem' }} />
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    {/* Stylized Map */}
                    <div
                        style={{
                            flex: '1 1 520px',
                            background: 'rgba(10,22,40,0.6)',
                            border: '1px solid rgba(201,168,76,0.12)',
                            borderRadius: '20px',
                            padding: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Map grid bg */}
                        <div style={{
                            position: 'absolute', inset: 0, borderRadius: '20px',
                            backgroundImage: `radial-gradient(rgba(201,168,76,0.05) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                            pointerEvents: 'none',
                        }} />

                        <div style={{ fontSize: '0.65rem', color: 'var(--slate-600)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>
                            República Bolivariana de Venezuela · Vista General
                        </div>

                        {/* SVG Map */}
                        <svg
                            viewBox="100 50 420 300"
                            style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
                            onMouseMove={handleMouseMove}
                        >
                            {/* Ocean background */}
                            <rect x="100" y="50" width="420" height="300" fill="rgba(10,22,40,0.3)" rx="8" />

                            {/* State rectangles (stylized) */}
                            {STATES.map(state => (
                                <g key={state.id}>
                                    <rect
                                        x={state.x}
                                        y={state.y}
                                        width={state.w}
                                        height={state.h}
                                        rx="4"
                                        fill={hovered === state.id ? '#C9A84C' : getScoreColor(state.score)}
                                        stroke={hovered === state.id ? '#f0d080' : getScoreBorder(state.score)}
                                        strokeWidth={hovered === state.id ? 1.5 : 0.8}
                                        opacity={hovered === state.id ? 1 : 0.85}
                                        style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                                        onMouseEnter={(e) => handleMouseEnter(state, e)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                    {state.w > 50 && state.h > 40 && (
                                        <text
                                            x={state.x + state.w / 2}
                                            y={state.y + state.h / 2 + 3}
                                            textAnchor="middle"
                                            fill="rgba(255,255,255,0.55)"
                                            fontSize="7"
                                            fontFamily="var(--font-body)"
                                            fontWeight="500"
                                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                                        >
                                            {state.name.split(' ')[0]}
                                        </text>
                                    )}
                                    {/* Score dot */}
                                    <circle
                                        cx={state.x + state.w - 8}
                                        cy={state.y + 8}
                                        r="3"
                                        fill={state.score >= 80 ? '#22c55e' : state.score >= 65 ? '#C9A84C' : '#ef4444'}
                                        opacity={0.9}
                                        style={{ pointerEvents: 'none' }}
                                    />
                                </g>
                            ))}
                        </svg>

                        {/* Legend */}
                        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                            {[
                                { label: 'Excelente', color: '#C9A84C', min: 85 },
                                { label: 'Bueno', color: '#22c55e', min: 75 },
                                { label: 'Moderado', color: '#60a5fa', min: 65 },
                                { label: 'Crítico', color: '#ef4444', min: 0 },
                            ].map(l => (
                                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: l.color, display: 'inline-block' }} />
                                    <span style={{ fontSize: '0.65rem', color: 'var(--slate-500)', fontWeight: 500 }}>{l.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* State Cards Grid */}
                    <div style={{ flex: '1 1 320px' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                            gap: '0.75rem',
                            maxHeight: '450px',
                            overflowY: 'auto',
                            paddingRight: '4px',
                        }}>
                            {STATES.sort((a, b) => b.score - a.score).map(state => (
                                <div
                                    key={state.id}
                                    className="glass-card"
                                    style={{
                                        borderRadius: '10px', padding: '0.85rem',
                                        cursor: 'pointer',
                                        borderColor: hovered === state.id ? 'rgba(201,168,76,0.5)' : undefined,
                                    }}
                                    onMouseEnter={() => setHovered(state.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.3 }}>
                                            {state.name}
                                        </span>
                                        <span style={{
                                            fontSize: '0.72rem', fontWeight: 700,
                                            color: state.score >= 80 ? '#22c55e' : state.score >= 65 ? '#C9A84C' : '#ef4444',
                                        }}>
                                            {state.score}
                                        </span>
                                    </div>
                                    {/* Score bar */}
                                    <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%', borderRadius: '2px', width: `${state.score}%`,
                                            background: state.score >= 80 ? '#22c55e' : state.score >= 65 ? '#C9A84C' : '#ef4444',
                                            transition: 'width 0.8s ease',
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div style={{
                    position: 'fixed', left: tooltip.x + 16, top: tooltip.y - 8,
                    background: '#060d1a', border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '10px', padding: '10px 14px', zIndex: 999,
                    pointerEvents: 'none', minWidth: '160px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}>
                    <div style={{ fontWeight: 600, color: '#E8C96D', fontSize: '0.85rem', marginBottom: '4px' }}>
                        {tooltip.state.name}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Rendimiento</span>
                        <span style={{
                            fontSize: '0.8rem', fontWeight: 700,
                            color: tooltip.state.score >= 80 ? '#22c55e' : tooltip.state.score >= 65 ? '#C9A84C' : '#ef4444',
                        }}>
                            {tooltip.state.score}/100
                        </span>
                    </div>
                </div>
            )}
        </section>
    )
}
