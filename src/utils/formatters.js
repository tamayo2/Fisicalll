// Formato con prefijos para frecuencia y longitud de onda
export function formatWithUnit(value, baseUnit) {
    if (!Number.isFinite(value)) return "—";

    if (baseUnit === "Hz") {
        if (value >= 1e12) return `${(value / 1e12).toFixed(3)} THz`;
        if (value >= 1e9)  return `${(value / 1e9).toFixed(3)} GHz`;
        if (value >= 1e6)  return `${(value / 1e6).toFixed(3)} MHz`;
        if (value >= 1e3)  return `${(value / 1e3).toFixed(3)} kHz`;
        return `${value.toFixed(3)} Hz`;
    }

    if (baseUnit === "m") {
        if (value < 1e-9)  return `${(value / 1e-12).toFixed(3)} pm`;
        if (value < 1e-6)  return `${(value / 1e-9).toFixed(3)} nm`;
        if (value < 1e-3)  return `${(value / 1e-6).toFixed(3)} µm`;
        if (value < 1)     return `${(value / 1e-3).toFixed(3)} mm`;
        return `${value.toFixed(3)} m`;
    }

    return `${value}`;
}

export function formatSci(value, sigFigs = 3) {
    if (!Number.isFinite(value) || value === 0) return "0";
    const exp = Math.floor(Math.log10(Math.abs(value)));
    const mant = value / Math.pow(10, exp);
    return `${mant.toFixed(sigFigs - 1)} × 10^${exp}`;
}
