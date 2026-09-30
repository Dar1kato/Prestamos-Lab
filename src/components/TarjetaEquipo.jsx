
const TarjetaEquipo = ({ equipo }) => {
    const { id, nombre, categoria, cantidad, disponible } = equipo

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p>{id} - {categoria}</p>
            <p>{disponible ? 'Disponible' : 'No Disponible'}</p>
            <button type="button" disabled={!disponible}>
                {disponible ? 'Solicitar' : 'No Disponible'}
            </button>
        </article> 
    )
}

export default TarjetaEquipo;