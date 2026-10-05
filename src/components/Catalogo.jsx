import { useState } from "react";
import TarjetaEquipo from "./TarjetaEquipo";

const Catalogo = ({ equipos }) => {
    console.log("Render Catalogo")

    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const totalDisponibles = equipos
        .reduce((suma, e) => (e.disponible ? suma + 1 : suma), 0)    
        
    return (
        <section>
            <h2>Catalogo</h2>
            <p>{totalDisponibles} de {equipos.lenght} equipos disponibles</p>

            {/* TODO: Buscador y las tarjetas*/}
            <div>
                {visibles.map((e) => (
                    <TarjetaEquipo key={e.id} equipo={e}/>
                ))}
            </div>
        </section>
    )
}   

export default Catalogo;