import { useState } from "react";

export default function WelcomeModal({ onClose }) {
    const [closing, setClosing] = useState(false);
    const [open, setOpen] = useState(true);

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setOpen(false);
            onClose();
        }, 400);
    };

    if (!open) return null;

    return (
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 
      ${closing ? "opacity-0" : "opacity-100"}`}>

            <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center transform transition-all duration-300
        ${closing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>

                <img
                    src="/proyecto.jpg"
                    alt= "Logo"
                    className="w-48 mx-auto mb-4 rounded-lg shadow"
                />

                <h2 className="text-2xl font-bold text-slate-900 mb-3">Bienvenido</h2>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    Explora simulaciones 2D y 3D del espectro electromagnético...
                </p>

                <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                    Entrar al simulador
                </button>
            </div>
        </div>
    );
}