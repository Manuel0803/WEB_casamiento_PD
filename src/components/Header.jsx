import React from 'react'
import styles from '../styles/Header.module.css'
import img1 from '../assets/img/nosCasamos.png'
import img2 from '../assets/img/paoDaniCopia.png'

export const Header = () => {
    return (
        <>
            {/*HEADER IMAGEN DE ELLOS, TITULO, SUBTITULO, FECHA*/}
            < header className={styles.container_header} >
                <section className={styles.container_items}>
                    <img className={styles.subtitulo} src={img1} />
                    <img className={styles.titulo} src={img2} />
                </section>
                <p className={styles.fecha}>14<span className={styles.punto}>.</span><span className={styles.seis}>06</span><span className={styles.punto}>.</span>25</p>
            </header>
        </>
    )
}
