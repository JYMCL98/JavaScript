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

// async - await
const getData2 = (error) => new Promise((resolve, reject) => {
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

const getData3 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'Luis',
                apellido: 'Sanchez',
            });
        }, 3000)
        
    }else{
        reject('No pudimos obtener los datos de data 3')
    }
});

const main = async () => {
    try {
        let resultado = await getData2(false)
    let resultado2 = await getData3(true)
    console.log(resultado);
    console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
}

main()

