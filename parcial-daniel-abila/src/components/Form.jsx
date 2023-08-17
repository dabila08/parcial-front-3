import { useState } from "react"

function Form(props){
const [mascota, setMascota] = useState('')
const [mensaje, setMensaje] = useState('')

    function validation(event){
        event.preventDefault()
        if (mascota.trim() !== ''){
             props.onMascota(mascota)
            setMensaje('')
        }else{
            setMensaje('Esta todo mal.')
        }
    }
    return (
       <form onSubmit={validation}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}
       >
        <label htmlFor="mascota">Mascota: </label>
        <input type="text" id="mascota" value={mascota} onChange={(e) => setMascota(e.target.value)}/>
        {mensaje ? <p>{mensaje}</p> : null}
        <button type="submit">Submit</button>
       </form>
    )
}

export default Form