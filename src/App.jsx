
import './App.css'
import { NavBar } from './components/navbar'
import { Inicio } from './components/Inicio'
import { AcercaDeMi } from './components/acerca-de-mi'
import { Habilidades } from './components/habilidades'
import { Proyectos } from './components/proyectos'
import { Contacto } from './components/contacto'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Inicio/>
    <AcercaDeMi></AcercaDeMi>
    <Habilidades></Habilidades>
    <Proyectos></Proyectos>
    <Contacto></Contacto>
    <Footer></Footer>
    
    </>
  )
}

export default App
