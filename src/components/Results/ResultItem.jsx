export default function ResultItem({ label, value }) {
    return (
        <div className="flex justify-between py-1.5">
            <span className="text-slate-600">{label}</span>
            <strong className="text-slate-900">{value}</strong>
        </div>
    );
}
