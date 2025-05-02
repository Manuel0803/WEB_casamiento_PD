import { useState, useEffect } from 'react';
import styles from '../styles/Contenedor_timer.module.css';
import img1 from '../assets/img/imagen_no_choque.jpeg';
import img2 from '../assets/img/imagen_medio.jpg';
import img3 from '../assets/img/imagen_choque.jpeg';

export const Contenedor_timer = () => {
    const targetDate = new Date("2025-06-14T00:00:00"); // Fecha de la cuenta regresiva

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className={styles.background_container_blanco}>
            <div className={styles.background_overlay_arboles}>
                <p className={styles.faltan}>FALTAN</p>
                <hr />

                <div className={styles.container_faltan}>
                    <div className={styles.circulo_azul}>
                        <div className={styles.texto_hora}>
                            <p className={styles.hora}>{timeLeft.days}</p>
                            <p className={styles.tiempo}>DÍAS</p>
                        </div>
                    </div>
                    <p className={styles.punto_faltan}>.</p>

                    <div className={styles.circulo_azul}>
                        <div className={styles.texto_hora}>
                            <p className={styles.hora}>{timeLeft.hours}</p>
                            <p className={styles.tiempo}>HORAS</p>
                        </div>
                    </div>
                    <p className={styles.punto_faltan}>.</p>

                    <div className={styles.circulo_azul}>
                        <div className={styles.texto_hora}>
                            <p className={styles.hora}>{timeLeft.minutes}</p>
                            <p className={styles.tiempo}>MINUTOS</p>
                        </div>
                    </div>
                    <p className={styles.punto_faltan}>.</p>

                    <div className={styles.circulo_azul}>
                        <div className={styles.texto_hora}>
                            <p className={styles.hora}>{timeLeft.seconds}</p>
                            <p className={styles.tiempo}>SEGUNDOS</p>
                        </div>
                    </div>
                </div>

                <div className={styles.container_imagenes_faltan}>
                    <div className={styles.contenedor_imagenes}>
                        <img className={styles.img} src={img1} alt="Imagen 1" />
                    </div>
                    <div className={styles.contenedor_imagenes}>
                        <img className={styles.img} src={img2} alt="Imagen 2" />
                    </div>
                    <div className={styles.contenedor_imagenes}>
                        <img className={styles.img} src={img3} alt="Imagen 3" />
                    </div>
                </div>

                <div className={styles.container_boton_agendar}>
                    <button
                        className={styles.boton}
                        type="button"
                        onClick={() => window.open('https://calendar.app.google/M8T3bY327JeMaBHXA', '_blank')}
                    >
                        AGENDAR EVENTO
                    </button>

                    <div className={styles.container_texto_fecha}>
                        <p className={styles.texto_agendar_fecha}>14/<span className={styles.seis}>06</span>/25 <br /> Sábado 14 de Junio</p>
                        <hr />
                    </div>

                    <p className={styles.texto}>"Nosotros amamos porque Dios nos amó primero" 1 Jn 4:19</p>
                </div>
            </div>
        </section>
    );
};
