import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { equipos } from './data/equipos'
import Catalogo from './components/Catalogo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Mi "Primera" App</h1>
          <p>
            Autor: Daniel Peña :D
          </p>
        </div>

        <main>
          <h1>Laboratorio - prestamos</h1>
          <Catalogo equipos={equipos}/>
        </main>
        
      </section>
    </>
  )
}

export default App
