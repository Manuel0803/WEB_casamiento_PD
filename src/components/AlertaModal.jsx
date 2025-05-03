import React from 'react';
import styles from '../styles/AlertaModal.module.css'; 

const AlertaModal = ({ mensaje, onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h3>{mensaje}</h3>
                <button className={styles.botonCerrar} onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default AlertaModal;
