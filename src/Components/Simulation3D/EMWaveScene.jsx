import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import FieldArrows from "./FieldArrows";
import Wavefront from "./Wavefront";


// ==== GENERADOR DE TUBOS PARA ONDA EM ====
function EMFieldTube({
                         frequency,
                         wavelength,
                         amplitude,
                         tubeRadius,
                         speed,
                         color,
                         phaseShift = 0,
                         axis = "y",
                     }) {
    const meshRef = useRef();

    const basePoints = useMemo(() => {
        const pts = [];
        const N = 200;
        for (let i = 0; i < N; i++) {
            const x = -5 + (10 * i) / (N - 1);
            pts.push(new THREE.Vector3(x, 0, 0));
        }
        return pts;
    }, []);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        const t = clock.getElapsedTime();

        const f = frequency || 1e9;
        const omega = Math.log10(f) * 0.8 * speed;
        const lambda = wavelength || 1;

        const k = 6 / lambda; // número de onda visual

        basePoints.forEach((p, i) => {
            const x = -5 + (10 * i) / (basePoints.length - 1);
            const phase = k * x - omega * t + phaseShift;

            if (axis === "y") p.set(x, amplitude * Math.sin(phase), 0);
            if (axis === "z") p.set(x, 0, amplitude * Math.sin(phase));
        });

        const curve = new THREE.CatmullRomCurve3(basePoints);
        meshRef.current.geometry = new THREE.TubeGeometry(
            curve,
            200,
            tubeRadius,
            16,
            false
        );
    });

    return (
        <mesh ref={meshRef}>
            <meshStandardMaterial
                color={color}
                roughness={0.35}
                metalness={0.4}
                emissive={color}
                emissiveIntensity={0.7}
            />
        </mesh>
    );
}



// ==== ESCENA COMPLETA CON CONFIGURACIÓN ====
export default function EMWaveScene({ frequency, wavelength, band, config }) {
    const {
        amplitude,
        tubeRadius,
        speed,
        bloom,
        useBandColor,
        customColor,
        showArrows,
        showWavefront,
        showGrid,
    } = config;

    // Color según banda del espectro
    const bandColor =
        {
            radio: "#4f46e5",
            micro: "#0ea5e9",
            ir: "#f97316",
            vis: "#22c55e",
            uv: "#a855f7",
            x: "#e11d48",
            gamma: "#000000",
        }[band?.id] || "#2563eb";

    const finalColor = useBandColor ? bandColor : customColor;

    return (
        <Canvas
            camera={{ position: [0, 2.5, 10], fov: 45 }}
            style={{ width: "100%", height: "100%" }}
            shadows
        >
            {/* Fondo */}
            <color attach="background" args={["#020617"]} />

            {/* Luces */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />

            {/* Grid y axes opcionales */}
            {showGrid && <gridHelper args={[20, 20, "#334155", "#1e293b"]} />}
            {showGrid && <axesHelper args={[4]} />}

            {/* CAMPO ELÉCTRICO */}
            <EMFieldTube
                frequency={frequency}
                wavelength={wavelength}
                amplitude={amplitude}
                tubeRadius={tubeRadius}
                speed={speed}
                color={finalColor}
                axis="y"
            />

            {/* CAMPO MAGNÉTICO */}
            <EMFieldTube
                frequency={frequency}
                wavelength={wavelength}
                amplitude={amplitude}
                tubeRadius={tubeRadius}
                speed={speed}
                color="#fbbf24"
                axis="z"
                phaseShift={Math.PI / 2}
            />

            {/* FLECHAS VECTORIALES */}
            {showArrows && (
                <FieldArrows frequency={frequency} wavelength={wavelength} />
            )}

            {/* FRENTE DE ONDA */}
            {showWavefront && <Wavefront frequency={frequency} />}

            {/* CONTROLES DE CÁMARA */}
            <OrbitControls enableDamping dampingFactor={0.1} />

            {/* EFECTO BLOOM */}
            <EffectComposer>
                <Bloom
                    intensity={bloom}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                    radius={0.85}
                />
            </EffectComposer>
        </Canvas>
    );
}