import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useEffect } from "react";

import img1 from "../Imagenes/1.jpeg";
import img2 from "../Imagenes/2.jpeg";
import img3 from "../Imagenes/3.jpeg";
import img4 from "../Imagenes/4.jpeg";
import img5 from "../Imagenes/5.jpeg";
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
  api.position.set(0, 2, 0);

  // Velocidad hacia arriba + giro aleatorio
  api.velocity.set(0, 6, 0);
  api.angularVelocity.set(
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 6
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
