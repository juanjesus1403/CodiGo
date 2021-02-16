// ASYNC :traerDatos va a ser mi funcion asincrona
// para convertirla asincrona, le agrego async antes del () => 
let traerDatos = async () => {
    //el return va a equivaler a un resolve
    return "mi respuesta asincrona!"
    //el throw va a equivaler a un reject
    throw "Erroooooor"
}

traerDatos()
.then(respuesta => {
    console.log(respuesta)
})

.catch(error => {
    console.log (error)
})

//AWAIT: Con await yo consumo/utilizo promesas sin necesidad de then y catch

