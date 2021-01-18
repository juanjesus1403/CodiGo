

// var numero = +prompt ("Ingrese el numero")

// function ejercicio1 (numero){
//     // var numero = +prompt ("Ingrese el numero")



// if ((numero%2)==0) {
//     // console.log("El numero : " + numero + " es par")

//     msg=("El numero : " + numero + " es par")
//     return msg

// } else {

//     // console.log("El numero : " + numero + " es impar")

//     msg=("El numero : " + numero + " es impar")

//     return msg
// }

// }

// ejercicio1(numero)

// console.log(msg)


////////////////////////////1//



function primo(numero) {
    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
          console.log(i)
          console.log("False")
        return false;
      }
  
    }
    
    console.log("True")
    return numero !== 1;
  }
var numero = +prompt("Ingrese un número");
primo(numero)


