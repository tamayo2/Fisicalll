import BandSegment from "./BandSegment";
import SpectrumMarker from "./SpectrumMarker";
import { BANDS} from "../../utils/ bands.js";

const COLORS = {
    radio: "#4f46e5",    // Indigo
    micro: "#0ea5e9",    // Sky
    ir: "#f97316",       // Orange
    vis: "#22c55e",      // Green
    uv: "#a855f7",       // Purple
    x: "#e11d48",        // Rose
    gamma: "#000000",    // Black
};

export default function SpectrumBar({ frequency }) {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
                Posición en el Espectro Electromagnético
            </h2>

            <div className="relative mt-4">
                {/* Barra de espectro con segmentos */}
                <div className="flex w-full h-6 rounded overflow-hidden">
                    {BANDS.map((band) => (
                        <BandSegment
                            key={band.id}
                            name={band.name}
                            fMin={band.fMin}
                            fMax={band.fMax}
                            color={COLORS[band.id]}
                        />
                    ))}
                </div>

                {/* Marcador dinámico */}
                <SpectrumMarker frequency={frequency} />
            </div>

            <p className="text-xs text-slate-600 mt-2">
                Escala logarítmica desde 10³ Hz hasta 10²¹ Hz.
            </p>
        </section>
    );
}