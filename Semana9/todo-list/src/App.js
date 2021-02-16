import React,{useState} from 'react'

export default function App() {
  let [lista,setLista] = useState([])
  
  let actualizarLista = (arrTareas) => {
    setLista(arrTareas)
  }
  return (
    <div>
      <h1> Tienes {lista.length} tareas </h1>

      
    </div>
  )
}

