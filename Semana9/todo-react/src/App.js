//Hooks

//useState es el que se va a encargar de manjear el estado 
//en un componente funcional
import {useState} from 'react'
import Footer from './components/Footer'

export default function App(){
  //let [estado, funcionquepermite cambiar el estado] = useState(EstadoInicial)

  let [tarea, setTarea] = useState("Escribir")
  //puedo tener cuantos estados quiera

  let [lista, setLista] = useState([])
  let titulo = "To-do App"

  let mensaje = "Creado por Juan Enciso"

  let agregarTarea = () => {
    //esta funcion se va encargar de agregar tarea al estado de mi lista
    //...lista <- desestructura 
    // spread-operator esparcir
    setLista([...lista, tarea])
  }

  let mostrarDerechos = () => {
    alert("Derechos Reservados Tecsup 2021")
  }
  //componentes controlados
  //todo input debe estar amarrado a un estado

  return(
    <div>
      <h4> {titulo} </h4>
      <input 
      type="text" 
      placeholder="agregar tarea" 
      value={tarea}
      onChange={(evento)=>{setTarea(evento.target.value)}}
      />
      <button onClick={()=> {agregarTarea()}}> 
      Agregar </button>
      <hr/>

      {tarea}

      <hr/>
      {/* itereadores para renderizar*/}
      
        { lista.map((item)=>(
          <p> {item} </p>
        ))}
      
      {/* footer con props*/}
      <Footer 
      miMensaje= {mensaje} 
      miNumero="1234" 
      miFuncion={mostrarDerechos}
      
      />

      
      

    </div>
  )
}