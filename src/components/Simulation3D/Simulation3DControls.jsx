import { useState } from "react";

export default function Simulation3DControls({ onChange }) {
    const [amplitude, setAmplitude] = useState(1.2);
    const [tubeRadius, setTubeRadius] = useState(0.05);
    const [speed, setSpeed] = useState(1);
    const [bloom, setBloom] = useState(1.5);
    const [useBandColor, setUseBandColor] = useState(true);
    const [customColor, setCustomColor] = useState("#2563eb");
    const [showArrows, setShowArrows] = useState(true);
    const [showWavefront, setShowWavefront] = useState(true);
    const [showGrid, setShowGrid] = useState(true);

    const update = (values) => {
        onChange({
            amplitude,
            tubeRadius,
            speed,
            bloom,
            useBandColor,
            customColor,
            showArrows,
            showWavefront,
            showGrid,
            ...values,
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">

            <h2 className="text-xl font-semibold text-slate-800">Controles 3D</h2>

            {/* Amplitud */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Amplitud (onda)
                </label>
                <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={amplitude}
                    onChange={(e) => {
                        setAmplitude(Number(e.target.value));
                        update({ amplitude: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Grosor del tubo */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Grosor del tubo (onda)
                </label>
                <input
                    type="range"
                    min="0.02"
                    max="0.2"
                    step="0.01"
                    value={tubeRadius}
                    onChange={(e) => {
                        setTubeRadius(Number(e.target.value));
                        update({ tubeRadius: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Velocidad */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Velocidad visual de propagación (x{speed})
                </label>
                <input
                    type="range"
                    min="0.2"
                    max="3"
                    step="0.1"
                    value={speed}
                    onChange={(e) => {
                        setSpeed(Number(e.target.value));
                        update({ speed: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Intensidad del Bloom */}
            <div>
                <label className="text-sm font-medium text-slate-700">
                    Brillo (Bloom)
                </label>
                <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.1"
                    value={bloom}
                    onChange={(e) => {
                        setBloom(Number(e.target.value));
                        update({ bloom: Number(e.target.value) });
                    }}
                    className="w-full"
                />
            </div>

            {/* Color */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={useBandColor}
                    onChange={() => {
                        setUseBandColor(!useBandColor);
                        update({ useBandColor: !useBandColor });
                    }}
                />
                <label className="text-sm text-slate-800">Usar color de la banda EM</label>
            </div>

            {!useBandColor && (
                <div>
                    <label className="text-sm font-medium text-slate-700">
                        Color personalizado
                    </label>
                    <input
                        type="color"
                        value={customColor}
                        onChange={(e) => {
                            setCustomColor(e.target.value);
                            update({ customColor: e.target.value });
                        }}
                        className="w-12 h-8 border rounded cursor-pointer"
                    />
                </div>
            )}

            {/* Toggles */}
            <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={showArrows}
                        onChange={() => {
                            setShowArrows(!showArrows);
                            update({ showArrows: !showArrows });
                        }}
                    />
                    Mostrar vectores (E y B)
                </label>

                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={showWavefront}
                        onChange={() => {
                            setShowWavefront(!showWavefront);
                            update({ showWavefront: !showWavefront });
                        }}
                    />
                    Mostrar frente de onda
                </label>

                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={() => {
                            setShowGrid(!showGrid);
                            update({ showGrid: !showGrid });
                        }}
                    />
                    Mostrar rejilla (grid)
                </label>
            </div>

        </div>
    );
}