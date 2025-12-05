const EXAMPLES = [
    { label: "Wi‑Fi 2.4 GHz",  f: 2.4,  fUnit: "GHz" },
    { label: "Wi‑Fi 5 GHz",    f: 5,    fUnit: "GHz" },
    { label: "Luz roja 650 nm", lambda: 650, lambdaUnit: "nm" },
    { label: "Luz verde 555 nm", lambda: 555, lambdaUnit: "nm" },
    { label: "IR mando TV 940 nm", lambda: 940, lambdaUnit: "nm" },
    { label: "UVA 365 nm", lambda: 365, lambdaUnit: "nm" },
    { label: "Rayos X 100 keV", f: 2.42e19, fUnit: "Hz" },
];

export default function ExampleChips({ onSelect }) {
    return (
        <div>
            <h3 className="text-sm font-semibold mb-2">Ejemplos rápidos</h3>

            <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                    <button
                        key={ex.label}
                        type="button"
                        onClick={() => onSelect(ex)}
                        className="text-xs rounded-full border border-slate-300
                       px-3 py-1 bg-slate-50 hover:bg-blue-50
                       hover:border-blue-400 transition"
                    >
                        {ex.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
