let miHorno = () => {
    //para manejar la tarea asincrona de hornear vamos a utilizar promesas

    //La Promesa tendra dentro una funcion, esa funcion recibira un resolve
    // (si va bien) o reject (si va mal)
    return new Promise((resolve, reject) => {
        // Aqui voy a poner la tarea que es asincrona, La que demora
        //para simular que la torea demora, de forma artifical estoy poniendo un setTimeout
        setTimeout(() => {
            // aca la idea es que haya una condicional , una evaluacion
            resolve("La torta esta ready") //fue bien

        }, 5000)
    })
}

// ejecuto la funcion y le añadp el .then() para saber si fue bien 
// dentro del then tendre una funcion donde podre recibir el resultado
miHorno().then((resultado) => {
    console.log(resultado)
})