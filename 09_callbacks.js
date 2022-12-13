/**
 * Callbacks
 */

const suma = (a,b) => {
    return a+b;
}
var resultado = suma(1,2);
console.log(resultado);

const suma_2 = (a,b,cb) => cb(a+b)  //cb = callback
const imprimir = (data) => console.log(data)
suma_2(1,2,imprimir)

//--------------------------------------------------

const getData = (cb) => {
    setTimeout(() => {
        cb({
            nombre: 'Jym',
            apellido: 'Lara',
        })
    }, 3000);
}

const imprimirData = (data) => console.log(data);

getData(imprimirData);

//--------------------------------------------------


const getData_2 = (cb, cbError) => {
    if (false) {
        setTimeout(() => {
            cb({
                nombre: 'Jym',
                apellido: 'Lara',
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'))
    }
}

const imprimirData_2 = (data) => console.log(data);
const errorHandler = (error) => console.log(error);
getData_2(imprimirData_2, errorHandler);
