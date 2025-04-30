import styles from '../styles/Contenedor_timer.module.css'
import img1 from '../assets/img/imagen_no_choque.jpeg'
import img2 from '../assets/img/imagen_medio.jpg'
import img3 from '../assets/img/imagen_choque.jpeg'
import img4 from '../assets/img/arboles.png'

export const Contenedor_timer = () => {
return (
    <section className={styles.background_container_blanco}>

        <div className={styles.background_overlay_arboles}>
        

            <p className={styles.faltan}>FALTAN</p>
            <hr/>

            {/*BLOQUE DESDE CONTADOR HASTA TEXTO DEBAJO DEL MISMO*/}
            <div className={styles.container_faltan}>

                <div className={styles.circulo_azul}> 
                    <div className={styles.texto_hora}>
                        <p className={styles.hora}>55</p>
                        <p className={styles.tiempo}>DÍAS</p>
                    </div>
                </div>

                <p className={styles.punto_faltan}>.</p>

                <div className={styles.circulo_azul}> 
                    <div className={styles.texto_hora}>
                        <p className={styles.hora}>18</p>
                        <p className={styles.tiempo}>HORAS</p>
                    </div>
                </div>

                <p className={styles.punto_faltan}>.</p> 

                <div className={styles.circulo_azul}>
                    <div className={styles.texto_hora}>
                        <p className={styles.hora}>50</p>
                        <p className={styles.tiempo}>MINUTOS</p>
                    </div>
                </div>

                <p className={styles.punto_faltan}>.</p>

                <div className={styles.circulo_azul}>
                    <div className={styles.texto_hora}>
                        <p className={styles.hora}>10</p>
                        <p className={styles.tiempo}>SEGUNDOS</p>
                    </div>
                </div>

            </div>


            {/*IMAGENES*/}
            <div className={styles.container_imagenes_faltan}>
                <div className={styles.contenedor_imagenes}>
                    <img className={styles.img} src={img1}/>
                </div>
                <div className={styles.contenedor_imagenes}>
                    <img className={styles.img} src={img2}/>
                </div>
                <div className={styles.contenedor_imagenes}>
                    <img className={styles.img} src={img3}/>
                </div>
            </div>


            <div className={styles.container_boton_agendar}>

                <button className={styles.boton} type="button">AGENDAR EVENTO</button>

                <div className={styles.container_texto_fecha}>
                    <p className={styles.texto_agendar_fecha}>14/<span className={styles.seis}>06</span>/25 <br/> Sabado 14 de Junio</p>

                    <hr/>
                </div>

                <p className={styles.texto}>"Nosotros amamos porque Dios nos amó primero" 1 Jn 4:19</p>
            </div>
        </div>

    </section>


    
)
}
