
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

// EJERCICIO Nº4

/*function calcularTotalAPagar(totalCompra) {
    let descuento = 0;
    if (totalCompra > 1000) {
        descuento = totalCompra * 0.15;
    }
    let totalAPagar = totalCompra - descuento;
    return totalAPagar;
}

const totalCompra = parseFloat(prompt("Ingrese el total de la compra en pesos: "));
const totalAPagar = calcularTotalAPagar(totalCompra);
console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`); */

//EJERCICIO Nº5
//Escribe un programa que pida la edad de una persona y clasifique su etapa de vida: "Niño" (0-12 años),
// "Adolescente" (13-17 años), "Adulto" (18-64 años) o "Adulto mayor" (65 años en adelante).

//*ME ESTOY APOYANDO CON CHAT GPT */

function clasificarEtapaDeVida(edad) {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto mayor";
    } else {
        return "Edad ingresada no válida";
    }
}

// Solicitar la edad al usuario
const edadStr = prompt("Ingrese su edad:");
const edad = parseInt(edadStr);

// Clasificar la etapa de vida y mostrar en consola
if (!isNaN(edad)) {
    const etapaDeVida = clasificarEtapaDeVida(edad);
    console.log(`Usted es ${etapaDeVida}.`);
} else {
    console.log("Por favor ingrese un número válido para la edad.");
}