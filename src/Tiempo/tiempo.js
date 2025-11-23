import { useState, useRef, useEffect } from "react";
import "./tiempo.css";

export default function Tiempo() {
    const tiempos = [ 20, 30, 45, 60];
    const acciones = [
        "Besar",
        "Acariciar",
        "Lamer",
        "Masaje erotico",
        "Morder suave"
    ];

    const [accion, setAccion] = useState("");
    const [tiempo, setTiempo] = useState(0);
    const [restante, setRestante] = useState(0);
    const intervalRef = useRef(null);

    function iniciar() {
        const t = tiempos[Math.floor(Math.random() * tiempos.length)];
        const a = acciones[Math.floor(Math.random() * acciones.length)];

        setAccion(a);
        setTiempo(t);
        setRestante(t);

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setRestante((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const progreso = tiempo ? ((tiempo - restante) / tiempo) * 100 : 0;

    return (
        <div className="wrapper">
            <div className="containeruno">
                <div className="tiempo-panel-2d">
                    <h3>⏱ Cronómetro Picante</h3>

                    <button className="btn-iniciar-2d" onClick={iniciar}>
                        Iniciar
                    </button>

                    <div className="tiempo-label-2d">Acción</div>
                    <div className="tiempo-accion-2d">{accion || "—"}</div>

                    <div className="progreso-container-2d">
                        <div
                            className="progreso-barra-2d"
                            style={{ width: `${progreso}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
