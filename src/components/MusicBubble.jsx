import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import music from '../assets/audio/Cancion_casamiento.mp3';
import styles from '../styles/MusicBubble.module.css';

const MusicBubble = () => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setPlaying(true);
            }).catch(() => {
                console.log("Autoplay bloqueado o no permitido aún."); // solo para saber si funciona, despues borrar
            });
        }
    };

    useEffect(() => {
        // aca se intenta iniciar la música automáticamente
        const tryAutoplay = () => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setPlaying(true);
                    })
                    .catch(() => {
                        // esto lo hice para saber si el navegador me bloqueaba o no el autoplay.
                        console.log("Autoplay bloqueado. El usuario debe interactuar.");
                    });
            }
        };

        tryAutoplay();

        // acá permito el autoplay en la primera interacción del usuario en la pagina, si es que fallo antes.
        const unlockAudio = () => {
            tryAutoplay();
            window.removeEventListener('click', unlockAudio);
        };

        window.addEventListener('click', unlockAudio);

        return () => {
            window.removeEventListener('click', unlockAudio);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} loop>
                <source src={music} type="audio/mp3" />
                Tu navegador no soporta audio.
            </audio>

            <motion.button
                onClick={toggleMusic}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                aria-label={playing ? 'Pausar música' : 'Reproducir música'}
                className={`${styles.bubbleButton} ${playing ? styles.playing : ''}`}
            >
                {playing ? <Music className={styles.icon} /> : <VolumeX className={styles.icon} />}
            </motion.button>
        </>
    );
};

export default MusicBubble;
