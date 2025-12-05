import { C } from "../../utils/constants";
import { formatWithUnit, formatSci } from "../../utils/formatters";

function InfoItem({ label, children }) {
    return (
        <>
            <dt className="text-xs text-slate-500">{label}</dt>
            <dd className="text-sm text-slate-900">{children}</dd>
        </>
    );
}

export default function WaveInfo({ frequency, wavelength, config }) {
    const fHz = frequency;
    const lambdaM = wavelength;
    const period = fHz ? 1 / fHz : null;

    const amplitude = config?.amplitude ?? 40;
    const speedFactor = config?.speed ?? 1;
    const zoom = config?.zoom ?? 1;
    const mode = config?.mode ?? "electric";
    const paused = config?.paused ?? false;

    return (
        <div className="bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-base font-semibold text-slate-800 mb-2">
                Parámetros de la simulación
            </h3>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-1">
                <InfoItem label="Frecuencia">
                    {fHz ? formatWithUnit(fHz, "Hz") : "—"}
                </InfoItem>

                <InfoItem label="Longitud de onda">
                    {lambdaM ? formatWithUnit(lambdaM, "m") : "—"}
                </InfoItem>

                <InfoItem label="Período T">
                    {period ? `${formatSci(period)} s` : "—"}
                </InfoItem>

                <InfoItem label="Velocidad c">
                    {`${formatSci(C)} m/s`}
                </InfoItem>

                <InfoItem label="Amplitud visual">
                    {amplitude.toFixed(0)} px
                </InfoItem>

                <InfoItem label="Velocidad animación">
                    x{speedFactor.toFixed(1)}
                </InfoItem>

                <InfoItem label="Zoom horizontal">
                    x{zoom.toFixed(1)}
                </InfoItem>

                <InfoItem label="Tipo de onda">
                    {mode === "electric" ? "Campo eléctrico" : "Campo magnético"}
                </InfoItem>

                <InfoItem label="Estado">
                    {paused ? "Pausada" : "En ejecución"}
                </InfoItem>
            </dl>
        </div>
    );
}
