import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Wavefront({ frequency }) {
    const mesh = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const speed = (Math.log10(frequency || 1e9) / 5) * 0.2;
        mesh.current.position.x = ((t * speed) % 10) - 5;
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[0.15, 4]} />
            <meshStandardMaterial
                color="#ffffff"
                opacity={0.3}
                transparent
                emissive="#ffffff"
                emissiveIntensity={0.6}
            />
        </mesh>
    );
}