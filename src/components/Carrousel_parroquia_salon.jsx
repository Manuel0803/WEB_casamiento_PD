import styles from '../styles/Carrousel_parroquia_salon.module.css';
import { useState, useEffect } from "react";
import React from 'react';
import img1 from '../assets/img/iglesia_afuera.jpg';
import img2 from '../assets/img/iglesia_adentro.jpg';
import img3 from '../assets/img/iglesia_adentro_dos.jpg';

const images = [img1, img2, img3];

export default function Carrousel_parroquia_salon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000); // cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className={styles.image}
      />
      
      {/* Los puntos de navegación */}
      <div className={styles.dotsContainer}>
        {images.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => setIndex(i)} // Cambiar la imagen al hacer clic en el punto
          />
        ))}
      </div>
    </div>
  );
}
