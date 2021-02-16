//Haciendo una peticion GET con Fetch
fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos")
.then(respuesta => {
    // console.log(respuesta)
    if (respuesta.status === 200) {
        return respuesta.json() 
    } else {
        console.log("Algo slaio mal")
        return       
    }
})
.then((datos) =>{
    console.log(datos)
})
.catch((error) => {
    alert("No se encontro datos")
})


//Haciendo una peticion de tipo POST

//1. voy a tener que crear un objeto con la estructura que me pide la API


let objPedido = {
    nombre_pedido: "Vision",
    dni_pedido: 43212439,
    platillos_pedido:["Estofado con Chica","Chicha de Jora"],
    //recordamos que mockapi en las fechas 
    fecha_pedido: new Date().getTime() / 1000,
    total_pedido:40.00
}

//2. En el caso de fecth , cuando yo hago un POST /PUT, tengo que mandar los headers, para indicar que tipo de info estoy enviado

let cabecera = {
    //tipo de metodo HTTP
    method: "POST",
    headers: {
        "Content-type" : "application/json"
    }


}


