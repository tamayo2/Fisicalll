export default function WavelengthInput({ value, unit, onValueChange, onUnitChange }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Longitud de onda</label>

            <div className="flex gap-2">
                <input
                    type="number"
                    step="any"
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: 650"
                />

                <select
                    value={unit}
                    onChange={(e) => onUnitChange(e.target.value)}
                    className="rounded-lg border border-slate-300 px-2 py-2 text-sm
                     focus:outline-none focus:ring-ofc"
                >
                    <option value="m">m</option>
                    <option value="cm">cm</option>
                    <option value="mm">mm</option>
                    <option value="um">µm</option>
                    <option value="nm">nm</option>
                </select>
            </div>

            <p className="text-xs text-slate-500">
                Puedes dejar este campo vacío si ingresas solo frecuencia.
            </p>
        </div>
    );
}