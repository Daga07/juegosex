import { useBox } from "@react-three/cannon";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Dado({ throwSignal, startX = 0 }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [startX, 2, 0],
    rotation: [0, 0, 0],
  }));

  const prevSignal = useRef(0);

  useFrame(() => {
    if (throwSignal !== prevSignal.current) {
      // Lanzar el dado: posición arriba y fuerza aleatoria
      api.position.set(startX, 2 + Math.random() * 2, 0);
      api.velocity.set((Math.random() - 0.5) * 5, 5 + Math.random() * 5, (Math.random() - 0.5) * 5);
      api.angularVelocity.set(Math.random() * 10, Math.random() * 10, Math.random() * 10);
      prevSignal.current = throwSignal;
    }
  });

}
