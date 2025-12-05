export default function MainMenu({ onSelect }) {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-indigo-900 text-white flex flex-col items-center justify-center gap-6 z-40 animate-fade-in">

            {/* Logo IA */}
            <img
                src="/logo.png"
                alt="Logo"
                className="w-32 drop-shadow-2xl animate-pulse"
            />

            <h1 className="text-3xl font-bold tracking-tight">Explorador EM</h1>
            <p className="text-sm text-indigo-200">Selecciona un módulo para iniciar</p>

            <div className="flex flex-col gap-4 mt-6">
                <button className="menu-btn" onClick={() => onSelect("2d")}>
                    Simulación 2D
                </button>

                <button className="menu-btn" onClick={() => onSelect("3d")}>
                    Simulación 3D
                </button>

                <button className="menu-btn" onClick={() => onSelect("theory")}>
                    Teoría del EM
                </button>
            </div>
        </div>
    );
}