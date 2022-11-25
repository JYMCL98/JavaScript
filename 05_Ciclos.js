/**
 * Ciclos
 */
// While

var contador = 1;
while (contador <= 5) {
    console.log("Hola mundo");
    contador += 1;
}

// Do while
var contador = 1;
do {
    console.log("Hola mundo");
    contador += 1;
} while (contador <= 5);

// For
for(let i = 0; i < 5; i++){
    console.log("Hola mundo");
}

// For in
var persona ={
    nombre: "Jym",
    apellido: "Lara",
    edad: 23
}

for (let clave in persona) {
    // instrucciones
    console.log(clave, persona[clave]);
}

// For of (no funciona en objetos como el objeto persona)
var arreglo = [1,2,3,4,5,6,7,8,9];

for (let valor of arreglo) {
    console.log(valor);
}

var nombre =  "Jym Emmanuel";
for (let valor of nombre) {
    console.log(valor);
}