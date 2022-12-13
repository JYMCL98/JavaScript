/**
 * Funciones
 */

// declarativa
//function nombreDeLaFuncion() {
    // cuerpo de nuestra funcion
//}

function saludar(){
    console.log("Hola soy Jym");
}
saludar();

function saludar(nombre){
    console.log(`Hola soy ${nombre}`);
}
saludar("Jym")

function saludar(nombre){
    return `Hola soy ${nombre}`;
}
var saludo = saludar("Jym");
console.log(saludo);
console.log(saludar("Jym Emmanuel"));

// Expresion o anonimas
var suma = function(a,b){
    return a+b;
};

console.log(suma(2,5));

// arrow function (Funciones flecha)
var restar = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else{
        return 'Solo se pueden restar numeros';
    }
}
console.log(restar(5,2));

var multiplicar = (a,b) => a * b;
console.log(multiplicar(2,6));

