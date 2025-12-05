import { useEffect, useRef } from "react";

/**
 * Simulación 2D de una onda EM usando canvas.
 * - frequency: frecuencia física en Hz
 * - wavelength: longitud de onda en metros
 * - config: { amplitude, speed, zoom, color, mode, paused }
 */
export default function SimulationCanvas({ frequency, wavelength, config }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    const amplitude = config?.amplitude ?? 40;
    const speedFactor = config?.speed ?? 1;
    const zoom = config?.zoom ?? 1;
    const color = config?.color ?? "#2563eb";
    const mode = config?.mode ?? "electric"; // electric | magnetic
    const paused = config?.paused ?? false;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let t = 0;

        // Frecuencia de animación base (solo visual, no 1 a 1 con f física)
        const baseSpeed = frequency ? Math.log10(frequency) / 80 : 0.03;
        const animSpeed = baseSpeed * speedFactor;

        // "Número de onda" visual (más zoom = más ciclos)
        const k = 0.02 * zoom;

        const drawFrame = () => {
            const width = canvas.width;
            const height = canvas.height;
            const mid = height / 2;

            ctx.clearRect(0, 0, width, height);

            // Fondo suave
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            if (mode === "electric") {
                gradient.addColorStop(0, "#e0f2fe");
                gradient.addColorStop(1, "#dbeafe");
            } else {
                gradient.addColorStop(0, "#fee2e2");
                gradient.addColorStop(1, "#fef9c3");
            }
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Eje central
            ctx.strokeStyle = "rgba(15,23,42,0.25)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, mid);
            ctx.lineTo(width, mid);
            ctx.stroke();

            // Configuración de la onda
            ctx.lineWidth = 3;
            ctx.strokeStyle = color;
            ctx.beginPath();

            for (let x = 0; x < width; x++) {
                const phase = x * k + t;
                const y = mid + Math.sin(phase) * amplitude;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.stroke();

            // Indicador de modo (E o B)
            ctx.fillStyle = "rgba(15,23,42,0.8)";
            ctx.font = "12px system-ui";
            ctx.fillText(
                mode === "electric" ? "Campo eléctrico (E)" : "Campo magnético (B)",
                10,
                18
            );

            // Solo avanzar el tiempo si no está pausado
            if (!paused) {
                t += animSpeed;
            }

            animRef.current = requestAnimationFrame(drawFrame);
        };

        drawFrame();

        return () => cancelAnimationFrame(animRef.current);
    }, [frequency, wavelength, amplitude, speedFactor, zoom, color, mode, paused]);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Simulación 2D de la Onda Electromagnética
            </h2>

            <canvas
                ref={canvasRef}
                width={600}
                height={220}
                className="w-full border border-slate-300 rounded-lg shadow-inner bg-slate-50"
            />

            <p className="text-xs text-slate-600 mt-3">
                La forma de la onda se actualiza según la frecuencia, la longitud de onda y los
                controles avanzados de la simulación.
            </p>
        </div>
    );
}
