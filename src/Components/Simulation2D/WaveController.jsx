import { useState } from "react";

export default function WaveController({ onChange }) {
    const [amplitude, setAmplitude] = useState(40);
    const [speed, setSpeed] = useState(1);
    const [color, setColor] = useState("#2563eb");
    const [zoom, setZoom] = useState(1);
    const [mode, setMode] = useState("electric"); // electric | magnetic
    const [paused, setPaused] = useState(false);

    const update = (newValues) => {
        onChange({
            amplitude,
            speed,
            zoom,
            color,
            mode,
            paused,
            ...newValues,
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">

            <h2 className="text-xl font-semibold text-slate-800">Controles avanzados</h2>

            {/* Amplitud */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Amplitud ({amplitude}px)
                </label>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={amplitude}
                    onChange={(e) => {
                        setAmplitude(Number(e.target.value));
                        update({ amplitude: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Velocidad */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Velocidad de animación (x{speed})
                </label>
                <input
                    type="range"
                    min="0.2"
                    max="5"
                    step="0.1"
                    value={speed}
                    onChange={(e) => {
                        setSpeed(Number(e.target.value));
                        update({ speed: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Zoom */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Zoom horizontal (x{zoom})
                </label>
                <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.1"
                    value={zoom}
                    onChange={(e) => {
                        setZoom(Number(e.target.value));
                        update({ zoom: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Color */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Color de la onda
                </label>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                        update({ color: e.target.value });
                    }}
                    className="w-12 h-8 border rounded cursor-pointer"
                />
            </div>

            {/* Modo */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Tipo de onda
                </label>

                <select
                    value={mode}
                    onChange={(e) => {
                        setMode(e.target.value);
                        update({ mode: e.target.value });
                    }}
                    className="w-full rounded border px-2 py-2 mt-1"
                >
                    <option value="electric">Campo eléctrico</option>
                    <option value="magnetic">Campo magnético</option>
                </select>
            </div>

            {/* Pausar */}
            <button
                onClick={() => {
                    setPaused(!paused);
                    update({ paused: !paused });
                }}
                className={`w-full py-2 rounded-lg text-white font-medium ${
                    paused ? "bg-green-600" : "bg-red-600"
                }`}
            >
                {paused ? "Reanudar" : "Pausar animación"}
            </button>
        </div>
    );
}