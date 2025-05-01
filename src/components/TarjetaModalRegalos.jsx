// components/TarjetaModal.jsx
import React from 'react';
import styles from '../styles/TarjetaModalRegalos.module.css';
import tarjeta from '../assets/img/modal_regalos.jpg'

const TarjetaModalRegalos = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <img
                    src={tarjeta}
                    alt="Tarjeta con información de regalos"
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default TarjetaModalRegalos;
