import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FormularioAsistencia.module.css";
import CardPersona from "../components/CardPersona";
import TarjetaModal from "../components/TarjetaModal";
import AlertModal from "../components/AlertaModal";

const Formulario = () => {
    const [cantidad, setCantidad] = useState(1);
    const [personas, setPersonas] = useState([
        { nombre: "", apellido: "", alimentacion: "", traslado: "" },
    ]);
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [tipoAlerta, setTipoAlerta] = useState("");
    const [mensajeProceso, setMensajeProceso] = useState(""); // Nuevo estado para mensaje en proceso

    useEffect(() => {
        setPersonas(Array.from({ length: cantidad }, () => ({
            nombre: "",
            apellido: "",
            alimentacion: "",
            traslado: ""
        })));
    }, [cantidad]);

    const handleChangePersona = (index, campo, valor) => {
        const nuevasPersonas = [...personas];
        nuevasPersonas[index][campo] = valor;
        setPersonas(nuevasPersonas);
    };

    const handleSubmit = async () => {
        const camposIncompletos = personas.some(p =>
            !p.nombre.trim() || !p.apellido.trim()
        );
        if (camposIncompletos) {
            setMensaje("Por favor completá todos los campos.");
            setTipoAlerta("error");
            setMostrarAlerta(true);
            return;
        }

        // Mostrar mensaje de proceso
        setMensajeProceso("Tu confirmación está en proceso...");
        setMostrarAlerta(false); // Ocultar alertas previas si las hay

        try {
            
            const fecha = new Date();

            const horas = String(fecha.getHours()).padStart(2, '0');
            const minutos = String(fecha.getMinutes()).padStart(2, '0');
            const segundos = String(fecha.getSeconds()).padStart(2, '0');

            const dia = String(fecha.getDate()).padStart(2, '0');
            const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
            const año = String(fecha.getFullYear()).slice(-2); 

            const fechaFormateada = `${horas}:${minutos}:${segundos} ${dia}/${mes}/${año}`;

            const timestamp = fechaFormateada; 
            for (let i = 0; i < personas.length; i++) {
                const persona = personas[i];
                await axios.post("https://sheetdb.io/api/v1/xpzgrosgs9dep", {
                    data: {
                        timestamp: timestamp,
                        nro_persona: i + 1,
                        nombre: persona.nombre,
                        apellido: persona.apellido,
                        alimentacion: persona.alimentacion,
                        traslado: persona.traslado
                    }
                });
            }

            // Ocultar mensaje en proceso y mostrar confirmación
            setMensajeProceso(""); // Limpiar el mensaje en proceso
            setMensaje("¡Confirmación enviada! ¡Te esperamos!");
            setTipoAlerta("success");
            setMostrarAlerta(true);

            // Limpiar formulario despues de confirmar
            setCantidad(1);
            setPersonas([{ nombre: "", apellido: "", alimentacion: "", traslado: "" }]);
        } catch (error) {
            console.error("Error al guardar:", error.response?.data || error.message);
            setMensajeProceso(""); // En caso de error, también limpiar
            setMensaje("Error al enviar los datos. Verificá tu conexión o los campos.");
            setTipoAlerta("error");
            setMostrarAlerta(true);
        }
    };

    return (
        <div className={styles.fondo}>
            <div className={styles.overlay_arboles}></div>

            <div className={styles.contenido}>
                <h2>CONFIRMÁ TU ASISTENCIA</h2>
                <hr />
                <button
                    className={styles.botonTarjeta}
                    onClick={() => setMostrarTarjeta(true)}
                >
                    VALOR DE LA TARJETA
                </button>
                <TarjetaModal visible={mostrarTarjeta} onClose={() => setMostrarTarjeta(false)} />

                <p>¿Por cuántas personas confirmarás?</p>
                <select
                    className={styles.select}
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                >
                    {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} Persona{num > 1 ? "s" : ""}</option>
                    ))}
                </select>

                {/* Mostrar mensaje en proceso si existe */}
                {mensajeProceso && (
                    <div className={styles.mensajeProceso}>
                        {mensajeProceso}
                    </div>
                )}

                {personas.map((persona, i) => (
                    <CardPersona
                        key={i}
                        index={i}
                        persona={persona}
                        onChange={handleChangePersona}
                    />
                ))}

                <button className={styles.botonConfirmar} onClick={handleSubmit}>CONFIRMAR</button>
            </div>

            {/* Mostrar el modal de alerta si fuera necesario */}
            {mostrarAlerta && (
                <AlertModal
                    mensaje={mensaje}
                    tipo={tipoAlerta}
                    onClose={() => setMostrarAlerta(false)}
                />
            )}
        </div>
    );
};

export default Formulario;