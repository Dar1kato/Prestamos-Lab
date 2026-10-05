const Solicitud = ({prestamo = [], eliminar}) => {
    return (
        <>
            <h2>Solicitud</h2>
            <p>Objetos Seleccionados: {prestamo.length}</p>
            {prestamo.map((e) => (
                <article key={e.id}>
                    <p>
                        {e.nombre}   
                        <button onClick={() => eliminar(e)}>X</button>
                    </p>
                </article>
            ))}
            <br></br>
        </>
    )   
}

export default Solicitud