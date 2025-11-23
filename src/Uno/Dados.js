import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useEffect } from "react";

import img1 from "../Imagenes/01.png";
import img2 from "../Imagenes/02.png";
import img3 from "../Imagenes/03.png";
import img4 from "../Imagenes/04.png";
import img5 from "../Imagenes/05.png";
import img6 from "../Imagenes/6.png";

export default function Dados({ throwSignal }) {
  const textures = useTexture({
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  });

  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [1, 1, 1],
    position: [0, 1.5, 0],
  }));

  useEffect(() => {
    // Reset posición
    api.position.set(0, 0, 0);

    // Velocidad hacia arriba + giro aleatorio
    api.velocity.set(0, 3, 0);
    api.angularVelocity.set(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4
    );
  }, [throwSignal]);

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      {[1, 2, 3, 4, 5, 6].map((n, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={textures[n]}
        />
      ))}
    </mesh>
  );
}
