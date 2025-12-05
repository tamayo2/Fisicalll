import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import WelcomeModal from "./components/WelcomeModal";
import MainMenu from "./components/MainMenu";
import Home from "./pages/Home";
import BackgroundAudio from "./components/BackgroundAudio";

export default function App() {
    const [loadingDone, setLoadingDone] = useState(false);
    const [modalDone, setModalDone] = useState(false);
    const [menuChoice, setMenuChoice] = useState(null);

    const showMenu = loadingDone && modalDone;

    return (
        <div className="min-h-screen bg-slate-100">

            <BackgroundAudio play={modalDone} />

            {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}

            {loadingDone && !modalDone && (
                <WelcomeModal onClose={() => setModalDone(true)} />
            )}

            {showMenu && !menuChoice && (
                <MainMenu onSelect={setMenuChoice} />
            )}

            {/* Cuando el usuario selecciona un módulo */}
            {menuChoice === "2d" && <Home />}
            {menuChoice === "3d" && <Home scrollTo3D={true} />}
            {menuChoice === "theory" && <div>EN DESARROLLO…</div>}

        </div>
    );
}