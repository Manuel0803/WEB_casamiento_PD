import { Header } from './components/Header'
import './App.css'
import pdLOGO from './assets/img/pdLOGO.png'
import { Contenedor_timer } from './components/Contenedor_timer'
import LOGOPD from './assets/img/LOGOPD.png'
import Carrousel_parroquia_salon from './components/Carrousel_parroquia_salon'
import Formulario from './components/Formulario'
import Carrousel_Salon from './components/Carrousel_Salon'

function App() {
  return (
    <>
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
        <img className='img_logo_pd' src={LOGOPD} />
      </section>


      {/*SECCION FORMULARIO ASISTENCIA */}
      <section className="formulario_asistencia">
        <Formulario />
      </section>


      {/* SECCION DE 1ER CARROUSEL, CÓMO LLEGAR, UBICACION DEL LUGAR */}
      <section className="container_carrousel_parroquia">

        <button
          type="button"
          className="boton_como_llegar_iglesia"
          onClick={() => window.open('https://maps.app.goo.gl/X6CrcXTZ8aamX1y26', '_blank')}
        >
          COMO LLEGAR
        </button>

        <div className="container_texto_boton_iglesia">

          <div className="carrousel_puntitos">
            <Carrousel_parroquia_salon /> {/* COMPONENTE CAROUSEL */}
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
    </>
  )
}

export default App


