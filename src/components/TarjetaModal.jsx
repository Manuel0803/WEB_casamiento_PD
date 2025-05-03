import React, { useEffect } from 'react';
import styles from '../styles/TarjetaModal.module.css';

const TarjetaModal = ({ visible, onClose }) => {
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
                <div className={styles.cardContainer}>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                    <div className={styles.cardContent}>
                        <h2 className={styles.title}>VALOR DE LA TARJETA</h2>
                        <p className={styles.amount}>$40.000</p>
                        <p className={styles.date}>HASTA 10/05/2025</p>

                        <div className={styles.row}>
                            <div>
                                <h3>CAJA AHORRO PESOS</h3>
                                <p>1270689108</p>
                            </div>
                            <div>
                                <h3>ALIAS DE LA CUENTA</h3>
                                <p>BODAPAOYDANI</p>
                            </div>
                            <div>
                                <h3>TITULAR</h3>
                                <p>PAOLA ANDREA FOCHESATTO VALLEJOS</p>
                            </div>
                        </div>

                        <div className={styles.cbuSection}>
                            <h3>CBU</h3>
                            <p>4530000800012706891088</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaModal;