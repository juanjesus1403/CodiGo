//Objetivo : Hacer las peticiones GET , POST , PUT , DELETE

const URL = "https://601e0119be5f340017a1a118.mockapi.io/"


class Network {
    obtenerProductos(){//GET
        return new Promise ((resolve, reject) =>{
            fetch(`${URL}productos`)
            .then(respuesta => {
                return respuesta.json() //obtengo el JSON con los datos de la peticion
            })
            .then(misProdutos => {
                resolve(misProdutos)
            })
            .catch(erorr => reject(error))
        })
    }

    crearProducto(objProducto){ //POST , como va a crear, necesito recibir que va a crear
        return new Promise((resolve, reject) => {
            let configuracion = {
                method:"POST",
                body:JSON.stringify(objProducto), //Lo tengo que convertir antes a JSON(TEXTO)
                headers:{"Content-type":"application/json"}
            }
            fetch(`${URL}productos`, configuracion)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(productoCreado => {
                resolve(productoCreado)
            })
            .catch(error => reject(error))
        })

    }
}