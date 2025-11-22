import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { useState } from "react";
import "./uno.css"; // ⬅️ Tus estilos ya aplican aquí
import Dados from "./Dados.js";
import { usePlane } from "@react-three/cannon";

function Floor() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }));

    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#0f0f0fff" />
        </mesh>
    );
}

function Uno() {
    const [throwDice, setThrowDice] = useState(0);

    const handleThrow = () => {
        setThrowDice((t) => t + 1);
    };

    return (
        <div className="wrapper">
        <div className="containeruno">
            {/* Botón con tus estilos */}
            <button className="btn" onClick={handleThrow}>
                Lanzar 🎲
            </button>

            {/* Canvas full screen */}
            <Canvas
                camera={{ position: [0, 4, 3], fov: 40 }}
                className="canvas"
            >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} intensity={1.2} />

                <Physics gravity={[0, -9.82, 0]}>
                    <Floor />
                    <Dados throwSignal={throwDice} />
                </Physics>
            </Canvas>
        </div>
        </div>
    );
}

export default Uno;
