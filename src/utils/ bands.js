import { MIN_F, MAX_F } from "./constants";

export const BANDS = [
    { id: "radio",   name: "Radio",        fMin: 0,      fMax: 3e9 },
    { id: "micro",   name: "Microondas",   fMin: 3e9,    fMax: 3e11 },
    { id: "ir",      name: "Infrarrojo",   fMin: 3e11,   fMax: 4e14 },
    { id: "vis",     name: "Visible",      fMin: 4e14,   fMax: 7.5e14 },
    { id: "uv",      name: "Ultravioleta", fMin: 7.5e14, fMax: 3e16 },
    { id: "x",       name: "Rayos X",      fMin: 3e16,   fMax: 3e19 },
    { id: "gamma",   name: "Rayos gamma",  fMin: 3e19,   fMax: Infinity },
];

export function detectBand(fHz) {
    for (const band of BANDS) {
        if (fHz >= band.fMin && fHz < band.fMax) return band;
    }
    return BANDS[BANDS.length - 1];
}

export function computeMarkerPosition(fHz) {
    const clamped = Math.min(Math.max(fHz, MIN_F), MAX_F);
    const pos =
        (Math.log10(clamped) - Math.log10(MIN_F)) /
        (Math.log10(MAX_F) - Math.log10(MIN_F));
    return `${(pos * 100).toFixed(2)}%`;
}
