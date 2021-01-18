// Desarrolle el siguiente algoritmo:
// Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones. Realice un algoritmo, y represéntelo en JS, que ayude al productor
// a saber cuánto recibirá por la entrega de su producción de un día (1 galón
// = 3.785 litros).


var litros = +prompt ("Ingrese el numero de litros vendidos")

var galon = +prompt ("Ingrese el precio que recibe por galon")

var total = (litros/3.785)*galon

console.log("El total al recibir por la venta de " +litros + " litros de leche es: " + Math.round(total) + " soles")