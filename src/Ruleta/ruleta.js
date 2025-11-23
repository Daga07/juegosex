import { useState } from "react";
import "./ruleta.css";

export default function Ruleta() {
  const opciones = [
    { texto: "Besar", emoji: "😘" },
    { texto: "Acariciar", emoji: "🤗" },
    { texto: "Mirada sexy", emoji: "😏" },
    { texto: "Susurrar", emoji: "🫦" },
    { texto: "Morder suave", emoji: "😈" },
    { texto: "Posición creativa", emoji: "🔥" },
  ];

  const [angulo, setAngulo] = useState(0);
  const [resultado, setResultado] = useState("");

  function girar() {
    const totalSlices = opciones.length;
    const slice = 360 / totalSlices;

    // Giro aleatorio + 6 vueltas completas
    const giroFinal =
      Math.floor(Math.random() * totalSlices) * slice + 360 * 6;

    setAngulo(giroFinal);

    // Calcular índice ganador
    const indiceGanador =
      ((giroFinal / slice) % totalSlices + totalSlices) % totalSlices;

    // El -1 asegura que coincida con la flecha superior
    setResultado(opciones[totalSlices - 1 - indiceGanador].texto);
  }

  return (
    <div className="ruleta-wrapper">
      <h2>Ruleta Picante</h2>

      <button className="btn-girar" onClick={girar}>
        GIRAR
      </button>

      {resultado && (
        <div className="ruleta-resultado">
          Resultado: <strong>{resultado}</strong>
        </div>
      )}

      {/* Ruleta */}
      <div className="ruleta-contenedor">
        <div
          className="ruleta"
          style={{
            transform: `rotate(${angulo}deg)`,
          }}
        >
          {opciones.map((op, index) => {
            const sliceAngle = (360 / opciones.length) * index;
            return (
              <div
                key={index}
                className="ruleta-carita"
                style={{
                  transform: `rotate(${sliceAngle}deg) translate(0, 100px) rotate(${-sliceAngle}deg)`,
                }}
              >
                {op.emoji}
              </div>
            );
          })}
        </div>

        {/* Flecha */}
        <div className="ruleta-flecha"></div>
      </div>
    </div>
  );
}
