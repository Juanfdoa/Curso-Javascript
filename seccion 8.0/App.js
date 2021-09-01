
// Crear una funcion que reciba como argumento un arreglo, 
// la funcion debe retornar otro arreglo pero filtrando los nombres.

function filtrarPorLetra(arreglo, letra) {
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        let nombre = arreglo[i];
        if (nombre[0] === letra) {
            nuevoArreglo.push(nombre);
        }
        
    }



    return nuevoArreglo;
}



let heroes = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let heroesCon = filtrarPorLetra(heroes,'D');
console.log(heroesCon);