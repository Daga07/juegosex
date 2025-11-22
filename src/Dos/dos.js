import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { useState } from "react";
import Piso from "./piso.js";
import DadoTexto from "./dadostexto.js";
import "./dos.css";

export default function Dos() {
  const palabras1 = ["Besar", "Lamer", "Masajear", "Tocar", "Morder", "Acariciar"];
  const palabras2 = ["Cuello", "Labios", "Pechos", "Espalda", "Nalgas", "Zona íntima"];

  const [resultado1, setResultado1] = useState("—");
  const [resultado2, setResultado2] = useState("—");

  const [throwDice, setThrowDice] = useState(0);

  const lanzar = () => {
    setThrowDice(t => t + 1);

    // Elegir cara aleatoria (0-5)
    const cara1 = Math.floor(Math.random() * 6);
    const cara2 = Math.floor(Math.random() * 6);

    setResultado1(palabras1[cara1]);
    setResultado2(palabras2[cara2]);
  };

  return (
    <div className="wrapper">
       <div className="resultados">
          <p>{resultado1}</p>
          <p>{resultado2}</p>
        </div>
      {/* Caja de los dados */}
      <div className="containerdos">
        <button className="btn-dos" onClick={lanzar}>
          Lanzar 🎲🎲
        </button>
       
        <Canvas camera={{ position: [0, 3.5, 4.5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

          <Physics gravity={[0, -9.82, 0]}>
            <Piso />

            <DadoTexto
              throwSignal={throwDice}
              startX={-1}
              palabras={palabras1}
              onResultado={setResultado1}

            />

            <DadoTexto
              throwSignal={throwDice}
              startX={1}
              palabras={palabras2}
              onResultado={setResultado2}
            />
          </Physics>
        </Canvas>

      </div>

    </div>
  );
}
