import React, { useEffect } from 'react';
import styles from '../styles/ModalRegalos.module.css';

const ModalRegalos = ({ visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.overlayHojas}>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.subtitulo}>REGALOS</h2>
                            <div className={styles.columns}>
                                <div className={styles.column}>
                                    <p className={styles.textTitle}>ALIAS CUENTA EN PESOS</p>
                                    <p className={styles.textValue}>BODAPAOYDANI</p>

                                    <p className={styles.textTitle}>CAJA AHORRO PESOS</p>
                                    <p className={styles.textValue}>1270689108</p>

                                    <p className={styles.textTitle}>CBU</p>
                                    <p className={styles.textValue}>4530000800012706891088</p>

                                    <p className={styles.textTitle}>TITULAR</p>
                                    <p className={styles.textValue}>Paola Andrea Fochesatto Vallejos</p>
                                </div>

                                <div className={styles.column}>
                                    <p className={styles.textTitle}>ALIAS CUENTA EN DÓLARES</p>
                                    <p className={styles.textValue}>usdcasamiento2025</p>

                                    <p className={styles.textTitle}>TITULAR</p>
                                    <p className={styles.textValue}>Daniel Fernando Malet</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalRegalos;
