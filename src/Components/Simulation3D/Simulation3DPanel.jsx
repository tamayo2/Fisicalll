import { useState } from "react";
import Simulation3DControls from "./Simulation3DControls";
import EMWaveScene from "./EMWaveScene";
import { formatWithUnit } from "../../utils/formatters";
import { C } from "../../utils/constants";

export default function Simulation3DPanel({ data }) {
    const [config, setConfig] = useState({
        amplitude: 1.2,
        tubeRadius: 0.05,
        speed: 1,
        bloom: 1.5,
        useBandColor: true,
        customColor: "#2563eb",
        showArrows: true,
        showWavefront: true,
        showGrid: true,
    });

    const handleConfig = (newVals) => setConfig(newVals);

    if (!data) return null;

    return (
        <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
                Simulación 3D avanzada
            </h2>

            <p className="text-sm text-slate-600">
                Visualización tridimensional de una onda electromagnética con control
                total de parámetros físicos y estéticos. Esta simulación actúa como
                un laboratorio virtual interactivo.
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.1fr,1.9fr]">

                {/* Panel de controles */}
                <Simulation3DControls onChange={handleConfig} />

                {/* Escena 3D */}
                <div className="space-y-4">
                    <div className="h-96 rounded-xl overflow-hidden border border-slate-800">
                        <EMWaveScene
                            frequency={data?.fHz}
                            wavelength={data?.lambdaM}
                            band={data?.band}
                            config={config}
                        />
                    </div>

                    {/* Info */}
                    <div className="bg-white rounded-xl shadow p-4 text-sm">
                        <h3 className="font-semibold text-slate-800 mb-2">
                            Parámetros físicos utilizados
                        </h3>
                        <p>Frecuencia: {formatWithUnit(data.fHz, "Hz")}</p>
                        <p>Longitud de onda: {formatWithUnit(data.lambdaM, "m")}</p>
                        <p>Velocidad de propagación (c): {C.toExponential(3)} m/s</p>
                    </div>
                </div>
            </div>
        </section>
    );
}