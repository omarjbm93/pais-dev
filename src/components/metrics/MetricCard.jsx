import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

// Generate mock sparkline data
const generateData = (base, trend, volatility = 3) =>
    Array.from({ length: 12 }, (_, i) => ({
        v: Math.max(0, base + trend * i + (Math.random() - 0.5) * volatility),
    }))

export const METRICS = [
    {
        id: 'pib',
        title: 'Crecimiento del PIB',
        value: '+4.7%',
        delta: '+0.8%',
        trend: 'up',
        unit: 'vs trimestre anterior',
        color: '#22c55e',
        data: generateData(3, 0.15, 1.2),
        large: true,
        description: 'Producto Interno Bruto Nacional',
    },
    {
        id: 'agricola',
        title: 'Producción Agrícola',
        value: '8.3M',
        delta: '+12.4%',
        trend: 'up',
        unit: 'toneladas métricas',
        color: '#86efac',
        data: generateData(6, 0.2, 2),
        large: false,
    },
    {
        id: 'logistica',
        title: 'Eficiencia Logística',
        value: '78.2',
        delta: '-1.3%',
        trend: 'down',
        unit: 'índice nacional',
        color: '#f87171',
        data: generateData(80, -0.1, 3),
        large: false,
    },
    {
        id: 'exportaciones',
        title: 'Exportaciones',
        value: '$14.8B',
        delta: '+6.1%',
        trend: 'up',
        unit: 'USD · acumulado anual',
        color: '#C9A84C',
        data: generateData(10, 0.4, 1.5),
        large: true,
    },
    {
        id: 'inflacion',
        title: 'Índice de Inflación',
        value: '18.4%',
        delta: '-2.1%',
        trend: 'up',
        unit: 'interanual controlada',
        color: '#fb923c',
        data: generateData(25, -0.5, 2),
        large: false,
    },
    {
        id: 'empleo',
        title: 'Empleo Formal',
        value: '6.2M',
        delta: '+3.5%',
        trend: 'up',
        unit: 'trabajadores registrados',
        color: '#60a5fa',
        data: generateData(5.5, 0.06, 0.3),
        large: false,
    },
]

export default function MetricCard({ metric }) {
    const TrendIcon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Minus
    const deltaColor = metric.trend === 'up' ? '#22c55e' : metric.trend === 'down' ? '#ef4444' : '#94a3b8'

    return (
        <div
            className="glass-card"
            style={{
                borderRadius: '16px',
                padding: metric.large ? '1.8rem' : '1.4rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top glow accent */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
                opacity: 0.7,
            }} />

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{
                        fontSize: '0.68rem', color: 'var(--slate-500)', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px',
                    }}>
                        {metric.title}
                    </div>
                    {metric.description && (
                        <div style={{ fontSize: '0.72rem', color: 'var(--slate-600)', marginTop: '2px' }}>
                            {metric.description}
                        </div>
                    )}
                </div>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    padding: '3px 10px', borderRadius: '100px',
                    background: `${deltaColor}18`,
                    border: `1px solid ${deltaColor}40`,
                }}>
                    <TrendIcon size={11} color={deltaColor} />
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: deltaColor }}>
                        {metric.delta}
                    </span>
                </div>
            </div>

            {/* Value */}
            <div>
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: metric.large ? '2.8rem' : '2rem',
                    fontWeight: 600,
                    color: '#f1f5f9',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                }}>
                    {metric.value}
                </div>
                <div style={{
                    fontSize: '0.7rem', color: 'var(--slate-500)',
                    marginTop: '4px', fontWeight: 400,
                }}>
                    {metric.unit}
                </div>
            </div>

            {/* Sparkline */}
            <div style={{ height: metric.large ? '72px' : '56px', width: '100%' }}>
                <ResponsiveContainer width="100%" height={metric.large ? 72 : 56}>
                    <AreaChart data={metric.data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={metric.color} stopOpacity={0.35} />
                                <stop offset="95%" stopColor={metric.color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip
                            contentStyle={{
                                background: '#060d1a', border: '1px solid rgba(201,168,76,0.15)',
                                borderRadius: '8px', fontSize: '0.72rem', padding: '6px 10px',
                            }}
                            formatter={(v) => [v.toFixed(1), metric.title]}
                            labelFormatter={() => ''}
                        />
                        <Area
                            type="monotone"
                            dataKey="v"
                            stroke={metric.color}
                            strokeWidth={1.8}
                            fill={`url(#grad-${metric.id})`}
                            dot={false}
                            activeDot={{ r: 3, fill: metric.color }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
