/**
 * Promises
 * const getData2 = new Promise((resolve, reject) => {
 * })
 */

const getData = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Jym',
                apellido: 'Lara',
            });
        }, 3000)
        
    }else{
        reject('No pudimos obtener los datos')
    }
});

console.log('Inicio');
getData(false)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

console.log('Fin');
