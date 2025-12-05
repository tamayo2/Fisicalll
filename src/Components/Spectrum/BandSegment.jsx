export default function BandSegment({ name, color, fMin, fMax }) {
    return (
        <div
            className="flex-1 h-6 relative group transition-all"
            style={{ backgroundColor: color }}
        >
            {/* Etiqueta mostrada al pasar el mouse */}
            <span
                className="absolute left-1/2 -translate-x-1/2 -top-7 text-[10px]
                   text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100
                   bg-slate-900 shadow transition"
            >
        {name}
      </span>
        </div>
    );
}
