import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 900 }) {
    const mesh = useRef()
    const mouse = useRef({ x: 0, y: 0 })

    // Generate random positions on a sphere
    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3)
        const col = new Float32Array(count * 3)
        const goldColor = new THREE.Color('#C9A84C')
        const whiteColor = new THREE.Color('#ffffff')
        const navyColor = new THREE.Color('#3a5a8c')

        for (let i = 0; i < count; i++) {
            // Distribute on sphere surface + some inside
            const r = 4 + Math.random() * 3
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.75
            pos[i * 3 + 2] = r * Math.cos(phi)

            // Mix gold / white / navy colors
            const rand = Math.random()
            const c = rand < 0.35 ? goldColor : rand < 0.65 ? whiteColor : navyColor
            col[i * 3] = c.r
            col[i * 3 + 1] = c.g
            col[i * 3 + 2] = c.b
        }
        return [pos, col]
    }, [count])

    // Animaton: slow rotation + mouse parallax
    useFrame(({ clock }) => {
        if (!mesh.current) return
        const t = clock.getElapsedTime()
        mesh.current.rotation.y = t * 0.02
        mesh.current.rotation.x = t * 0.008 + mouse.current.y * 0.08
        mesh.current.rotation.z = mouse.current.x * 0.05
    })

    // Track mouse for parallax
    useMemo(() => {
        const handler = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
            mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.045}
                vertexColors
                transparent
                opacity={0.35}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    )
}

// Lines connecting nearby particles
function ConstellationLines({ count = 120 }) {
    const ref = useRef()
    const positions = useMemo(() => {
        const pts = new Float32Array(count * 6)
        for (let i = 0; i < count; i++) {
            const spread = 5.5
            pts[i * 6] = (Math.random() - 0.5) * spread * 2
            pts[i * 6 + 1] = (Math.random() - 0.5) * spread
            pts[i * 6 + 2] = (Math.random() - 0.5) * spread * 2
            pts[i * 6 + 3] = pts[i * 6] + (Math.random() - 0.5) * 2
            pts[i * 6 + 4] = pts[i * 6 + 1] + (Math.random() - 0.5) * 1.5
            pts[i * 6 + 5] = pts[i * 6 + 2] + (Math.random() - 0.5) * 2
        }
        return pts
    }, [count])

    useFrame(({ clock }) => {
        if (!ref.current) return
        ref.current.rotation.y = clock.getElapsedTime() * 0.03
    })

    return (
        <lineSegments ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#C9A84C" transparent opacity={0.04} />
        </lineSegments>
    )
}

export default function ParticleField() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{ position: 'absolute', inset: 0 }}
            gl={{ antialias: true, alpha: true }}
        >
            <Particles count={900} />
            <ConstellationLines count={150} />
        </Canvas>
    )
}
