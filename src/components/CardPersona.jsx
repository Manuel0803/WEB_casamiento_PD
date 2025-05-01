import React from "react";
import styles from "../styles/CardPersona.module.css";

const CardPersona = ({ index }) => {
    return (
        <div className={styles.card}>
            <p>Persona N° {index}</p>
            <input type="text" placeholder="Nombre*" required />
            <input type="text" placeholder="Apellido*" required />

            <label>¿Algún requerimiento en la alimentación?</label>
            <select>
                <option>Ninguno</option>
                <option>Vegano</option>
                <option>Vegetariano</option>
                <option>Celíaco</option>
                <option>Diabético</option>
            </select>

            <label>¿Necesitarás traslado?</label>
            <select>
                <option>Si voy a necesitar traslado</option>
                <option>No voy a necesitar traslado</option>
            </select>
        </div>
    );
};

export default CardPersona;