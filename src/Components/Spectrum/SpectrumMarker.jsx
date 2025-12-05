import { useSpectrumPosition } from "../../hooks/useSpectrumPosition";

export default function SpectrumMarker({ frequency }) {
    const { getMarkerLeft } = useSpectrumPosition();

    const left = getMarkerLeft(frequency);

    return (
        <div
            className="absolute -top-2 w-[4px] h-[28px] bg-slate-900 rounded-full
                 shadow-[0_0_4px_rgba(0,0,0,0.4)] transition-all duration-300"
            style={{ left }}
        />
    );
}
