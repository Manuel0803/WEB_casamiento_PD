import React, { useState } from "react";
import styles from "../styles/FormularioAsistencia.module.css";
import CardPersona from "./CardPersona";
import TarjetaModal from "./TarjetaModal";

const Formulario = () => {
    const [cantidad, setCantidad] = useState(1);
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

    const handleChange = (e) => {
        setCantidad(parseInt(e.target.value));
    };

    return (
        <div className={styles.fondo}>
            <div className={styles.overlay_arboles}></div>

            <div className={styles.contenido}>
                <h2>CONFIRMÁ TU ASISTENCIA</h2>
                <hr />
                <button
                    className={styles.botonTarjeta}
                    onClick={() => setMostrarTarjeta(true)}>
                    VALOR DE LA TARJETA
                </button>
                <TarjetaModal visible={mostrarTarjeta} onClose={() => setMostrarTarjeta(false)} />

                <p>¿Por cuántas personas confirmarás?</p>
                <select className={styles.select} onChange={handleChange}>
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                </select>

                {Array.from({ length: cantidad }, (_, i) => (
                    <CardPersona key={i} index={i + 1} />
                ))}

                <p>¿Necesitarás traslado?</p>
                <select className={styles.select}>
                    <option>Sí, voy a necesitar traslado</option>
                    <option>No voy a necesitar traslado</option>
                </select>

                <button className={styles.botonConfirmar}>CONFIRMAR</button>
            </div>
        </div>
    );
};

export default Formulario;
