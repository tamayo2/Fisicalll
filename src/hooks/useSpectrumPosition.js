import { computeMarkerPosition} from "../utils/ bands.js";

/**
 * Hook para trabajar con la posición del marcador en el espectro.
 * Encapsula la lógica de escala logarítmica para que los componentes
 * de UI solo se preocupen por pintar.
 */
export function useSpectrumPosition() {
    const getMarkerLeft = (fHz) => {
        if (!fHz || !Number.isFinite(fHz)) {
            // posición por defecto al inicio de la barra
            return "0%";
        }
        return computeMarkerPosition(fHz);
    };

    return { getMarkerLeft };
}
