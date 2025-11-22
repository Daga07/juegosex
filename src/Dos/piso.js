import { usePlane } from "@react-three/cannon";

export default function Piso() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[0, 0]} />
      <meshStandardMaterial color="#071021" />
    </mesh>
  );
}
