import { useState } from "react";
import WaveController from "./WaveController";
import SimulationCanvas from "./SimulationCanvas";
import WaveInfo from "./WaveInfo";

export default function SimulationPanel2D({ data }) {
    const [config, setConfig] = useState({
        amplitude: 40,
        speed: 1,
        zoom: 1,
        color: "#2563eb",
        mode: "electric",
        paused: false,
    });

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    };

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
                Simulación 2D interactiva
            </h2>
            <p className="text-sm text-slate-600">
                Ajusta los parámetros de la onda y observa cómo cambian su forma y sus
                propiedades físicas. Esta sección funciona como un pequeño laboratorio
                virtual de ondas electromagnéticas.
            </p>

            <div className="grid gap-4 lg:grid-cols-[1.1fr,1.9fr]">
                {/* Controles avanzados */}
                <WaveController onChange={handleConfigChange} />

                {/* Canvas + panel de info */}
                <div className="space-y-4">
                    <SimulationCanvas
                        frequency={data?.fHz}
                        wavelength={data?.lambdaM}
                        config={config}
                    />
                    <WaveInfo
                        frequency={data?.fHz}
                        wavelength={data?.lambdaM}
                        config={config}
                    />
                </div>
            </div>
        </section>
    );
}
