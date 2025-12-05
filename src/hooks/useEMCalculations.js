import { C, H, QE } from "../utils/constants";
import { toHz, toMeters } from "../utils/units";
import { detectBand } from "../utils/ bands.js";

/**
 * Hook para realizar los cálculos principales de ondas electromagnéticas.
 * - Recibe valores de frecuencia / longitud de onda y sus unidades.
 * - Completa el dato faltante usando λ = c / f.
 * - Calcula energía en J y eV.
 * - Determina en qué banda del espectro se encuentra.
 *
 * Se usa en la Calculadora y en las simulaciones.
 */
export function useEMCalculations() {
    /**
     * calculate(params)
     * params: {
     *   freqValue: string | number | null,
     *   freqUnit: "Hz" | "kHz" | "MHz" | "GHz" | "THz",
     *   lambdaValue: string | number | null,
     *   lambdaUnit: "m" | "cm" | "mm" | "um" | "nm"
     * }
     */
    const calculate = ({ freqValue, freqUnit, lambdaValue, lambdaUnit }) => {
        const hasFreq = freqValue !== "" && freqValue !== null && freqValue !== undefined;
        const hasLambda = lambdaValue !== "" && lambdaValue !== null && lambdaValue !== undefined;

        if (!hasFreq && !hasLambda) {
            throw new Error("Se debe ingresar al menos frecuencia o longitud de onda.");
        }

        // Convertimos a unidades base
        let fHz = hasFreq ? toHz(Number(freqValue), freqUnit) : null;
        let lambdaM = hasLambda ? toMeters(Number(lambdaValue), lambdaUnit) : null;

        // Completamos el valor faltante usando λ = c / f
        if (!fHz && lambdaM) {
            fHz = C / lambdaM;
        } else if (!lambdaM && fHz) {
            lambdaM = C / fHz;
        }

        if (!Number.isFinite(fHz) || fHz <= 0) {
            throw new Error("La frecuencia calculada no es física.");
        }

        // Cálculo de energías
        const energyJ = H * fHz;
        const energyEV = energyJ / QE;

        // Banda
        const band = detectBand(fHz);

        return {
            fHz,
            lambdaM,
            energyJ,
            energyEV,
            band,
        };
    };

    return { calculate };
}
