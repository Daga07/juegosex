import { useEffect, useRef } from "react";
import { useBox } from "@react-three/cannon";
import { Text } from "@react-three/drei";

export default function DadoTexto({ throwSignal, startX = 0, palabras = [], onResultado }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [startX, 2.5, 0],
    rotation: [0, 0, 0],
  }));

  const prevSignal = useRef(0);

  // POSICIONES DE LAS CARAS DEL DADO
  const caraPos = [
    [0, 0, 0.51],    // Frente
    [0, 0, -0.51],   // Atrás
    [0.51, 0, 0],    // Derecha
    [-0.51, 0, 0],   // Izquierda
    [0, 0.51, 0],    // Arriba
    [0, -0.51, 0]    // Abajo
  ];

  // ROTACIÓN DE CADA CARA
  const caraRot = [
    [0, 0, 0],                  // frente
    [0, Math.PI, 0],            // atrás
    [0, Math.PI / 2, 0],        // derecha
    [0, -Math.PI / 2, 0],       // izquierda
    [-Math.PI / 2, 0, 0],       // arriba
    [Math.PI / 2, 0, 0]         // abajo
  ];

  // DETECTAR RESULTADO CUANDO CAE
  const detectarResultado = async () => {
    await new Promise(res => setTimeout(res, 600)); // esperar caída

    let rot = ref.current.rotation;

    const rotArr = [rot.x, rot.y, rot.z];

    let min = Infinity;
    let index = 0;

    caraRot.forEach((cr, i) => {
      const dist =
        Math.abs(cr[0] - rotArr[0]) +
        Math.abs(cr[1] - rotArr[1]) +
        Math.abs(cr[2] - rotArr[2]);

      if (dist < min) {
        min = dist;
        index = i;
      }
    });

    if (onResultado) onResultado(palabras[index]);
  };

  // LANZAR SIEMPRE EN LA MISMA POSICIÓN
  useEffect(() => {
    if (throwSignal === prevSignal.current) return;

    // posición fija
    api.position.set(startX, 2.5, 0);

    // velocidad solo vertical
    api.velocity.set(0, 6, 0);

    // rotación pequeña aleatoria para cambiar cara
    api.angularVelocity.set(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    );

    detectarResultado();

    prevSignal.current = throwSignal;
  }, [throwSignal]);

  return (
    <group ref={ref}>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff004c" />
      </mesh>

      {palabras.map((texto, i) => (
        <Text
          key={i}
          position={caraPos[i]}
          rotation={caraRot[i]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {texto}
        </Text>
      ))}
    </group>
  );
}
