import './App.css'
import Form from './components/Form'
import Mascota from './components/Mascota'
import { useState } from 'react'

function App() {
  const [laMascota, setLaMascota] = useState()
  function handleSubmit(mascota){
    setLaMascota( mascota)
  }

  function handleDelete() {
    setLaMascota();
  }
  return (
    <>
      <Form onMascota={handleSubmit}/>
      {laMascota ? <Mascota onDelete={handleDelete}>{laMascota}</Mascota> : undefined}
    </>
  );
}

export default App
