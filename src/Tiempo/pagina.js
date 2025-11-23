import "./tiempo.css";
import { Canvas } from "@react-three/fiber";
import Tiempo from "./tiempo.js";

export default function Pagina() {
  return (
    <div className="wrapper">
      <div className="containeruno">

        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={1} />
          <Tiempo />
        </Canvas>

      </div>
    </div>
  );
}
