
// Crear una funcion que reciba como argumento un arreglo, 
// la funcion debe retornar el nombre mas largo.

function maslargo(arreglo) {
    
    let nombrelargo ='';

    for (let i = 0; i < arreglo.length; i++) {
        let nombre = arreglo[i];

      if (nombre.length > nombrelargo.length) {
          nombrelargo = nombre;

      }
        
    }
    return nombrelargo;
}




let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let heroeLargo = maslargo(heroes);
console.log(heroeLargo);