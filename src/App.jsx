import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import WelcomeModal from "./components/WelcomeModal.jsx";
import MainMenu from "./components/MainMenu.jsx";
import Home from "./pages/Home.jsx";
import BackgroundAudio from "./components/BackgroundAudio.jsx";
import TheoryPage from "./pages/TheoryPage.jsx";

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
            {menuChoice === "theory" && <TheoryPage />}

        </div>
    );
}