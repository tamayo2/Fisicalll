import { useEffect, useRef } from "react";

export default function BackgroundAudio({ play }) {
    const audioRef = useRef();

    useEffect(() => {
        if (play) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(() => {});
        }
    }, [play]);

    return (
        <audio ref={audioRef} src="/sounds/ambiente.mp3" loop />
    );
}