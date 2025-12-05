import { useState } from "react";
import FrequencyInput from "./FrequencyInput";
import WavelengthInput from "./WavelengthInput";
import ExampleChips from "./ExampleChips";
import { useEMCalculations } from "../../hooks/useEMCalculations";

export default function Calculator({ onDataComputed }) {
    const { calculate } = useEMCalculations();

    const [freqValue, setFreqValue] = useState("");
    const [freqUnit, setFreqUnit] = useState("GHz");

    const [lambdaValue, setLambdaValue] = useState("");
    const [lambdaUnit, setLambdaUnit] = useState("nm");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        try {
            const result = calculate({
                freqValue,
                freqUnit,
                lambdaValue,
                lambdaUnit,
            });

            onDataComputed(result);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleExampleSelect = (ex) => {
        setError("");

        if (ex.f !== undefined) {
            setFreqValue(ex.f);
            setFreqUnit(ex.fUnit || "Hz");
            setLambdaValue("");
        }

        if (ex.lambda !== undefined) {
            setLambdaValue(ex.lambda);
            setLambdaUnit(ex.lambdaUnit || "m");
            setFreqValue("");
        }

        // Calcula automáticamente al escoger un ejemplo
        setTimeout(() => {
            try {
                const result = calculate({
                    freqValue: ex.f ?? "",
                    freqUnit: ex.fUnit ?? freqUnit,
                    lambdaValue: ex.lambda ?? "",
                    lambdaUnit: ex.lambdaUnit ?? lambdaUnit,
                });
                onDataComputed(result);
            } catch (err) {
                setError(err.message);
            }
        }, 0);
    };

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-slate-800">
                Calculadora de Ondas Electromagnéticas
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">

                {/* Componente modular de Frecuencia */}
                <FrequencyInput
                    value={freqValue}
                    unit={freqUnit}
                    onValueChange={setFreqValue}
                    onUnitChange={setFreqUnit}
                />

                {/* Componente modular de Longitud de onda */}
                <WavelengthInput
                    value={lambdaValue}
                    unit={lambdaUnit}
                    onValueChange={setLambdaValue}
                    onUnitChange={setLambdaUnit}
                />

                {/* Botón calcular */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="rounded-full bg-blue-600 text-white px-6 py-2 text-sm font-medium
                       shadow-md hover:bg-blue-700 transition"
                    >
                        Calcular
                    </button>

                    {error && (
                        <p className="text-red-600 text-sm mt-2" aria-live="polite">
                            {error}
                        </p>
                    )}
                </div>
            </form>

            {/* Ejemplos rápidos */}
            <ExampleChips onSelect={handleExampleSelect} />
        </section>
    );
}
