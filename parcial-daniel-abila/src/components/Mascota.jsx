function Mascota(props){
    const {children} = props
    return (
        <div>
            <h1>Tu mascota es</h1>
            <p>{children}</p>
            <button onClick={props.onDelete}>Eliminar Mascota </button>
        </div>
    )
}

export default Mascota