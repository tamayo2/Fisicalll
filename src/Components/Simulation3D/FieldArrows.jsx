import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function FieldArrows({ frequency, wavelength }) {
    const arrowE = useRef();
    const arrowB = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const f = frequency || 1e9;
        const omega = Math.log10(f) * 0.8;
        const lambda = wavelength || 1;
        const k = 6 / lambda;
        const A = 1.3;

        const x = -2;
        const phase = k * x - omega * t;

        // Campo eléctrico (E) en Y
        const Ey = A * Math.sin(phase);
        arrowE.current.position.set(x, Ey, 0);
        arrowE.current.setDirection(new THREE.Vector3(0, Math.sign(Math.cos(phase)), 0));

        // Campo magnético (B) en Z
        const Bz = A * Math.sin(phase + Math.PI / 2);
        arrowB.current.position.set(x, 0, Bz);
        arrowB.current.setDirection(new THREE.Vector3(0, 0, Math.sign(Math.cos(phase + Math.PI / 2))));
    });

    return (
        <>
            <arrowHelper ref={arrowE} args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(-2, 0, 0), 1, "#3b82f6"]} />
            <arrowHelper ref={arrowB} args={[new THREE.Vector3(0, 0, 1), new THREE.Vector3(-2, 0, 0), 1, "#facc15"]} />
        </>
    );
}