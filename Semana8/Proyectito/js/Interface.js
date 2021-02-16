//Objetivo : Encargarse de interacturar en lo posible con el DOM (Html)

class Interface {
    ImprimirProductos(arregloProductos){//Si esta clase va a poner algo en el DOM, tendra que sacarlo de algun lado
      const contenido = document.getElementById("contenido")
      //estadoContenido va a guardar el contenido
      //opcion1
      let estadoContenido = arregloProductos.map((producto) => {
        //Aqui a partir de c/obj que es producto
        //voy a crear un elemento para poner en el HTML
        let cardProducto = 
        `<div class="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div class="card">
              <img class="card-img-top" src="${producto.producto_imagen}">
              <div class="card-body">
                <h5 class="card-tittle">
                  ${producto.producto_nombre} 
                  <p class="card-text">
                    ${producto.producto_descripcion}
                  </p>
                  <p class= "card-text">
                    Precio: ${producto.producto_precio}
                  </p>   
                </h5>
            </div>
          </div>
        </div>`
        return cardProducto
      })
      //como es un arreglo de Strings, utilizo join para juntarlo todo en una sola variable
      let htmlContenido = estadoContenido.join("")
      //como ya tenemos los card en Html con la info , lo pasamos a "contenido"
      contenido.innerHTML = htmlContenido
      
    //   console.log(estadoContenido)
      //opcion2, con desestructuracion
    //   let estadoContenido = arregloProductos.map(({producto_id, producti_nombre, producto_descripcion, producto_imagen}) =>{
    //       return producto_nombre
    //   })
    //   console.log(estadoContenido)
    }
} 