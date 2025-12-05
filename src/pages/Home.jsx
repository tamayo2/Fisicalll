import Calculator from "../components/Calculator/Calculator";
import ResultsCard from "../components/Results/ResultsCard";
import SpectrumBar from "../components/Spectrum/SpectrumBar";
import TheoryCard from "../components/Theory/TheoryCard";
import { useState } from "react";
import SimulationPanel2D from "../Components/Simulation2D/SimulationPanel2D.jsx";
import Simulation3DPanel from "../Components/Simulation3D/Simulation3DPanel.jsx";

export default function Home() {
    const [data, setData] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

            {/* Título principal */}
            <header className="text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                    Explorador del Espectro Electromagnético
                </h1>
                <p className="text-slate-600 mt-1">
                    Simulador profesional de ondas EM con cálculos, espectro y visualizaciones.
                </p>
            </header>

            {/* Calculadora */}
            <Calculator onDataComputed={setData} />

            {/* Resultados + espectro (solo si hay datos) */}
            {data && (
                <div className="space-y-6">
                    <ResultsCard data={data} />
                    <SpectrumBar frequency={data.fHz} />
                    <SimulationPanel2D data={data} />
                    <Simulation3DPanel data={data} />
                </div>
            )}

            {/* Teoría */}
            <TheoryCard />
        </div>
    );
}
