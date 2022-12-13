/**
 * Manipulación de arreglos
 */

// ForEach
var letras = ['a', 'b', 'c', 'd', 'e'];
//console.log(letras.length);

//for (let i = 0; i < letras.length; i++) {
//    const element = letras[i];
//    console.log(element);
//}

letras.forEach((elemento) => console.log(elemento))


// push - shift - pop
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f');
console.log(letras);
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);
var ultimoElemento = letras.pop();
console.log(ultimoElemento);
console.log(letras);

// map
var estudiantes = ['Jym', 'Luis', 'Juan', 'Pedro'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
});
var asistencia_2 = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(asistencia_2);

var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'Zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
]

var productosImpuesto = productos.map((producto) => {
    return {
        ...producto,
        impuesto: .16
    }
})

var precios = productos.map((producto) => producto.precio)

console.log(productos);
console.log(productosImpuesto);
console.log(precios);

// Filter
var estudiantes = [
    {nombre: 'Jym', edad: 24, matriculado: true},
    {nombre: 'Juan', edad: 19, matriculado: false},
    {nombre: 'Luis', edad: 25, matriculado: false},
    {nombre: 'Enrique', edad: 21, matriculado: true},
    {nombre: 'Alfonso', edad: 22, matriculado: true}
];

// var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21);
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);
console.log(filtrado);
console.log(estudiantes);

// reduce
var calificaciones = [3,5,9,7,8,10,5,8,9,10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [22,23,24,25,21,23,25,26,27,29,24,45,40,18,17,59,62,23,21,21];

// salida
//{
//    21: 3,
//    22: 1
//    etc...
//}
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador;
}, {})
console.log(edades);
console.log(resultado);

var ventas = [
    {nombre: 'Camiseta', precio: 120, totalVendido: 15},
    {nombre: 'Chamarra', precio: 450, totalVendido: 12},
    {nombre: 'Pantalon', precio: 250, totalVendido: 25},
    {nombre: 'Bufanda', precio: 110, totalVendido: 74}
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}`;
    return acumulador;
},{})

console.log(ventas);
console.log(resultado);

var estudiantes = [
    {nombre: 'Jym', edad: 24, matriculado: true},
    {nombre: 'Juan', edad: 19, matriculado: false},
    {nombre: 'Luis', edad: 25, matriculado: false},
    {nombre: 'Enrique', edad: 21, matriculado: true},
    {nombre: 'Alfonso', edad: 22, matriculado: true}
];

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado += 1;
        }else {
            acumulador.noMatriculado +=1;
        }
        return acumulador;
    }, { matriculado: 0, noMatriculado: 0})

console.log(estudiantes);
console.log(resultado);

// some - every

// some
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1,3,3,5,7,9]
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

// every
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [2,4,6,8,10];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

// find - findIndex
var clientes = [
    {id: 1, nombre: 'Jym'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Luis'},
    {id: 4, nombre: 'Alfonso'},
    {id: 1, nombre: 'Efrain'},
];

var cliente = clientes.find((cliente) => cliente.id === 1);
var filter = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filter);

// findIndex
var clientes = [
    {id: 1, nombre: 'Jym'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Luis'},
    {id: 4, nombre: 'Alfonso'},
    {id: 5, nombre: 'Efrain'},
];
var posicion = clientes.findIndex((cliente) => cliente.id === 5);
console.log(posicion);
console.log(clientes[posicion]);

// includes
var mascotas = ['perro', 'gato', ' conejo', 'loro']
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log('Jym'.includes('m'));

var buscador = (parametro) => {
    let clientes = [
        {id: 1, nombre: 'Jym'},
        {id: 2, nombre: 'Juan'},
        {id: 3, nombre: 'Luis'},
        {id: 4, nombre: 'Alfonso'},
        {id: 5, nombre: 'Efrain'},
    ];

    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
};

console.log(buscador('J'));

// join
var elementos = ['aire', 'fuego', 'agua', 'tierra'];
var resultado = elementos.join();
var resultado_2 = elementos.join('--');
console.log(resultado);
console.log(resultado_2);


var clientes = [
    {id: 1, nombre: 'Jym'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Luis'},
    {id: 4, nombre: 'Alfonso'},
    {id: 5, nombre: 'Efrain'},
];
console.log(clientes.join());

console.log(Object.values({id: 1, nombre: 'Jym'}));
console.log(Object.keys({id: 1, nombre: 'Jym'},));

var csvGenerator = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((elemento) => Object.values(elemento).join(separador))
    console.log(headers);
    data.forEach(elemento => console.log(elemento))
}

csvGenerator(clientes);

// cancat - sort - splice - slice

//concat
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1,...array2]
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Sort
var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb']; // Ordena en base al codigo asccii
console.log(meses.sort());

var array = [1,10000,21,30,4];
console.log(array.sort());
var ordenado = array.sort((a, b) => b-a)
console.log(ordenado);

// splice
var nombres1 = ['Jym', 'Juan', 'Luis'];
nombres1.splice(1);
console.log(nombres1);

var nombres2 = ['Jym', 'Juan', 'Luis'];
nombres2.splice(1,1);
console.log(nombres2);

var nombres3 = ['Jym', 'Juan', 'Luis'];
nombres3.splice(1,1, 'Alfonso');
console.log(nombres3);

//slice
var nombres = ['Jym', 'Juan', 'Luis'];
var resultado = nombres.slice(1,3); // no incluye la ultimna poisicion
console.log(resultado);
console.log(nombres);


