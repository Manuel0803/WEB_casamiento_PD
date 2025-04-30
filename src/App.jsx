import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import './App.css'
import pdLOGO from './assets/img/pdLOGO.png'
import { Contenedor_timer } from './components/Contenedor_timer'
import LOGOPD from './assets/img/LOGOPD.png'
import Carrousel_parroquia_salon from './components/Carrousel_parroquia_salon'

function App() {
  return (
    <>
      <Header/>
      <div className="caja_azul">
          <img className="pd_logo" src={pdLOGO}/>
      </div>
      <Contenedor_timer/>
      <section className="contenedor_imagen_mano_anillo"> 
          <img className='img_logo_pd' src={LOGOPD}/>  
      </section>
      <section className="container_carrousel_parroquia">

          <button type="button" className="boton_como_llegar_iglesia">COMO LLEGAR</button>
      <div className="container_texto_boton_iglesia">

      <div className="carrousel_puntitos">
          <Carrousel_parroquia_salon/>
      </div>

          <p className="titulo_ceremonia">CEREMONIA</p>
          <p className="subtitulo_uno">Parroquia “San Francisco Javier”<br/>
                17:00hs</p>
          <p className="subtitlo_dos_iglesia">Les agradecemos llegar 15 minutos antes del horario previsto.</p>

      </div>
      </section>
    </>
  )
}

export default App


