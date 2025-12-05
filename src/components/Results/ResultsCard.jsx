import ResultItem from "./ResultItem";
import { formatWithUnit, formatSci } from "../../utils/formatters";

export default function ResultsCard({ data }) {
    const { fHz, lambdaM, energyJ, energyEV, band } = data;

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
                Resultados del Cálculo
            </h2>

            <div className="divide-y divide-slate-200 text-sm">
                <ResultItem
                    label="Frecuencia"
                    value={fHz ? formatWithUnit(fHz, "Hz") : "—"}
                />

                <ResultItem
                    label="Longitud de onda"
                    value={lambdaM ? formatWithUnit(lambdaM, "m") : "—"}
                />

                <ResultItem
                    label="Energía (J)"
                    value={energyJ ? formatSci(energyJ) : "—"}
                />

                <ResultItem
                    label="Energía (eV)"
                    value={energyEV ? formatSci(energyEV) : "—"}
                />

                <ResultItem
                    label="Banda del espectro"
                    value={band ? band.name : "—"}
                />
            </div>
        </section>
    );
}
