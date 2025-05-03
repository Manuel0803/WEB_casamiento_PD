import React from "react";
import styles from "../styles/CardPersona.module.css";

const CardPersona = ({ index, persona, onChange }) => {
    return (
        <div className={styles.card}>
            <p>Persona N° {index + 1}</p>
            <input
                type="text"
                placeholder="Nombre*"
                value={persona.nombre}
                onChange={(e) => onChange(index, "nombre", e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Apellido*"
                value={persona.apellido}
                onChange={(e) => onChange(index, "apellido", e.target.value)}
                required
            />

            <label>¿Algún requerimiento en la alimentación?</label>
            <select
                value={persona.alimentacion}
                onChange={(e) => onChange(index, "alimentacion", e.target.value)}
            >
                <option value="">Ninguno</option>
                <option>Vegano</option>
                <option>Vegetariano</option>
                <option>Celíaco</option>
                <option>Diabético</option>
            </select>

            <label>¿Necesitarás traslado?</label>
            <select
                value={persona.traslado}
                onChange={(e) => onChange(index, "traslado", e.target.value)}
            >
                <option>No voy a necesitar traslado</option>
                <option>Si, voy a necesitar traslado</option>
            </select>
        </div>
    );
};


export default CardPersona;