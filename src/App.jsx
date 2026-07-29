
import './App.css'
import { NavBar } from './components/Navbar'
import { Inicio } from './components/Inicio'
import { Estadisticas } from './components/estadisticas'
import { Habilidades } from './components/habilidades'
import { Proyectos } from './components/proyectos'
import { Contacto } from './components/contacto'
import { Footer } from './components/Footer'
import { ChatBot } from './components/chatbot'
import Testimonios from './components/testimonios'


function App() {

  return (
    <>
    <NavBar></NavBar>
    <Inicio/>
    <Habilidades></Habilidades>
    <Estadisticas></Estadisticas>
    <Proyectos></Proyectos>
    <Testimonios></Testimonios>
    <Contacto></Contacto>
    <Footer></Footer>

    </>
  )
}

export default App
