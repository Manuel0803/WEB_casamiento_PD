import { Header } from './components/Header'
import './App.css'
import pdLOGO from './assets/img/pdLOGO.png'
import { Contenedor_timer } from './components/Contenedor_timer'
import LOGOPD from './assets/img/LOGOPD.png'
import Carrousel_parroquia_salon from './components/Carrousel_parroquia_salon'
import Formulario from './components/Formulario'
import Carrousel_Salon from './components/Carrousel_Salon'
import instagram from './assets/img/INSTAGRAM.png'
import spotify from './assets/img/SPOTIFY.png'
import { useState } from 'react'
import MusicBubble from './components/MusicBubble'
import ModalRegalos from './components/ModalRegalos'

function App() {

  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  return (
    <>
      <MusicBubble />
      {/* COMPONENTE HEADER */}
      <Header />

      {/* FRANJA AZUL - LOGO P&D */}
      <div className="caja_azul">
        <img className="pd_logo" src={pdLOGO} />
      </div>

      {/* COMPONENTE TIMER, AGENDAR EVENTO */}
      <Contenedor_timer />

      {/* SECCION DE IMAGEN - ANILLO */}
      <section className="contenedor_imagen_mano_anillo">
        <img className="img_logo_pd" src={LOGOPD} alt="Logo PD" />
      </section>


      {/*SECCION FORMULARIO ASISTENCIA */}
      <section className="formulario_asistencia">
        <Formulario />

      </section>

      <section className="container_carrousel_parroquia">

        <button
          onClick={() => window.open('https://maps.app.goo.gl/X6CrcXTZ8aamX1y26', '_blank')}
          type="button"
          className="boton_como_llegar_iglesia"

        >
          COMO LLEGAR
        </button>

        <div className="container_texto_boton_iglesia">

          <div className="carrousel_puntitos">
            <Carrousel_parroquia_salon />
          </div>

          <p className="titulo_ceremonia">CEREMONIA</p>
          <p className="subtitulo_uno">Parroquia “San Francisco Javier”<br />
            17:00hs</p>
          <p className="subtitlo_dos_iglesia">Les agradecemos llegar 15 minutos antes del horario previsto.</p>

        </div>
      </section>


      {/* SECCION 2DO CARROUSEL */}
      <section class="container_carrousel_salon">
        <button
          onClick={() => window.open('https://maps.app.goo.gl/3Y5ZAGGKew6nT3EVA', '_blank')}
          type="button"
          class="boton_como_llegar_salon"
        >
          COMO LLEGAR
        </button>

        <div class="container_texto_boton_salon">

          <div class="carrousel_puntitos">
            <Carrousel_Salon /> {/* COMPONENTE CAROUSEL */}
          </div>

          <p class="titulo_salon">FIESTA</p>
          <p class="subtitulo_uno_salon">
            Salón “El Parque”<br />
            18:30hs</p>

        </div>

      </section>

      {/* SECCION DRESSCODE */}

      <section className='container_dress'>
        <div className='container_text_dress'>
          <h3>DRESS CODE</h3>
          <p>ELEGANTE</p>
          <hr />
        </div>
        <p className='dress_text'>
          Les pedimos evitar prendas en color blanco y azul, así como estampados. <br />
          ¡Gracías por comprender y ayudarnos a que todo luzca como lo imaginamos!
        </p>
      </section>

      {/* SECCION REGALOS */}

      <section className='container_regalos'>
        <div className='container_text_regalos'>
          <h3>REGALOS</h3>
          <p className='text_regal'>El mejor regalo es tu compañía, pero si desean hacernos un obsequio, <br />
            nos encantaría que nos ayuden a cumplir el sueño de nuestra luna de miel.
          </p>
          <button
            className='alias_button'
            onClick={() => setMostrarTarjeta(true)}>
            ALIAS
          </button>
          <ModalRegalos visible={mostrarTarjeta} onClose={() => setMostrarTarjeta(false)} />

        </div>
      </section>

      {/* SECCION INSTAGRAM */}

      <section className='container_instagram'>
        <h3>INSTAGRAM</h3>
        <div className='container_instagram_items'>
          <button
            onClick={() => window.open('https://www.instagram.com/boda.pyd?utm_source=qr&igsh=MTc2NTJkOW5qYm9ycA%3D%3D', '_blank')}
            className='photos_button_boda'>
            @boda.pyd
          </button>
          <p>
            Queremos atesorar cada momento vivido. <br />
            Prepárate para nuestro casamiento,<br />
            seguinos en Instagram y etiquétanos <br />
            en tus fotos y videos.
          </p>
          <button
            onClick={() => window.open('https://drive.google.com/drive/folders/1bqFika_LKFTmJsldtSqwzTsgAS6v4Bc0?usp=sharing', '_blank')}
            className='photos_button'>
            ENVIANOS TUS FOTOS
          </button>
        </div>
        <img src={instagram} alt="Nuestro instagram" />
      </section>

      {/* SECCION PLAYLIST */}

      <section className='container_playlist'>
        <div className='container_text_playlist'>
          <h3>PLAYLIST</h3>
          <p>¿Qué canciones no pueden faltar?</p>
        </div>

        <button
          onClick={() => window.open('https://open.spotify.com/playlist/48i5RlYLWAz0CdYY2b7fst?si=594e815634bb4575&pt=fea086b071a3191c7e54fa9fd4997499', '_blank')}
          className='sugerir_cancion_button'
        >SUGERIR CANCIÓN
        </button>

        <img src={spotify} alt="Spotify" />
      </section>

      {/* SECCION FOOTER */}

      <footer className="footer-container">
        <p>Gracias por acompañarnos y compartir nuestra felicidad...</p>
      </footer>

    </>
  )
}

export default App


