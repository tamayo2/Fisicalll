// Conversión de frecuencia a Hz
export function toHz(value, unit) {
    const table = {
        Hz: 1,
        kHz: 1e3,
        MHz: 1e6,
        GHz: 1e9,
        THz: 1e12,
    };
    return value * table[unit];
}

// Conversión de longitud de onda a metros
export function toMeters(value, unit) {
    const table = {
        m: 1,
        cm: 1e-2,
        mm: 1e-3,
        um: 1e-6,
        nm: 1e-9,
    };
    return value * table[unit];
}
