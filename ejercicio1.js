
/*let nombre = prompt('Por favor, ingresa tu nombre')
let apellido = prompt('Por favor, ingresa tu apellido')

alert('Hola ' + nombre + ' ' + apellido) 
alert(typeof nombre)/*

/* ejercicio nº2*/
/*let frase = prompt ('Ingrese una frase')
console.log ("la longitud es",frase.length)*/
/*ejercicio nº3*/

/*let palabra1 = prompt ('Ingrese la primer palabra')
let palabra2 = prompt ('Ingrese la segunda palabra')
let palabrasConcatenadas =  palabra1 + ' ' + palabra2
console.log ("la longitud es \n",palabrasConcatenadas.length)*/

/*let idioma  = "ESP"


let indice = idioma [0]

console.log ("Su indice es", indice)*/

/* NUEVOS EJERCICIOS */

// Definimos una función para determinar si un número es positivo, negativo o cero
/*let numero = prompt("Ingrese un número:");
numero = parseFloat(numero); // Convertimos la entrada a tipo número


function determinarNumero(num) {
    if (numero > 0) {
        console.log(numero + " es positivo");
    } else if (numero < 0) {
        console.log(numero + " es negativo");
    } else {
        console.log("El número es cero");
    }
}
determinarNumero(numero);*/

// EJERCICIO NUMERO 2
/*let edad = prompt ('ingrese su edad')
edad = parseInt (edad)

if(edad < 18){
    console.log("Es menor de edad")
}else  {
    console.log('Es mayor de edad')
}*/

//EJERCICIO NUMERO 3
/*let operacion = prompt ('Ingrese que operacion desea realizar(suma, resta, division, multiplicacion)')
let numero1 = parseFloat(prompt('Ingrese el primer numero'))
let numero2 = parseFloat (prompt('Ingrese el segundo numero'))

if (operacion === 'suma'){
    let resultado = numero1 + numero2
    console.log (resultado)
} else if (operacion === 'resta'){
    let resultado = numero1 - numero2
    console.log (resultado)
}else if (operacion === 'multiplicacion'){
    let resultado = numero1 * numero2
    console.log (resultado) 
}else if (operacion === 'division'){
    if (numero2 === 0){
        console.log ('No se puede dividir por 0')
    }else {
        let resultado = numero1 / numero2
        console.log (resultado)
    }
    
}*/

// EJERCICIO NUMERO 4

let sumaPrecios = 0
while (sumaPrecios !==0){
    let precioProducto = parseFloat(prompt('Ingrese el precio del producto (0 para terminar)'))
    sumaPrecios += precioProducto
}
if (sumaPrecios >1000){
    let descuento = sumaPrecios * 0.85
    console.log ('Su precio total de la compra es:', sumaPrecios, 'el descuento del 15% es', descuento)
}else {
    console.log ('Su compra es de:', sumaPrecios, 'su compra es menor a mil y no aplica a ningun descuento')
}
