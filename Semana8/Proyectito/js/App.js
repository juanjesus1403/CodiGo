let network = new Network()
let interface = new Interface()

let getProductos = () => {
    //1. Se ejecuta Network con obtener Productos y me devuelve el arreglo de Objetos Prodcuto de mockAPI
    network.obtenerProductos()
    .then(productos => {
        // console.table(productos)
        //despues ese arreglo de productos, se lo paso a imprimirProductos
        interface.ImprimirProductos(productos)
    })
    .catch(error => console.log(error))
}

getProductos()