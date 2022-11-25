/**
 * Ejercicio de cilos en JS
 */
for (let i=1; i<=12; i++) {
    //
    console.log(`Tabla del ${i}`);
    for (let n = 1; n <= 10; n++) {
        var resultado = n*i;
        console.log(`${i} x ${n} = ${resultado}`);
    }
}

var i=2;
var n=1;
while (i<=12) {
    console.log(`Tabla del ${i}`);
    while (n<=10) {
        var resultado = i*n;
        console.log(`${i} x ${n} = ${resultado}`);
        n+=1;
    }
    i+=1;
}