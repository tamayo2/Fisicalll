import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onFinish();
        }, 2500); // 2.5 segundos

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[60] animate-fade-in">
            <div className="w-20 h-20 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-4 text-sm tracking-widest">Cargando...</p>
        </div>
    );
}