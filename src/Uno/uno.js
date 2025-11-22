import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { useState } from "react";
import "./uno.css";
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
            <meshStandardMaterial color="#000000" />
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

                <button className="btn" onClick={handleThrow}>
                    Lanzar 🎲
                </button>

                <Canvas
                    camera={{ position: [0, 4, 3], fov: 40 }}
                    style={{ background: "#000000" }}   //  ⬅ Fondo negro real
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
