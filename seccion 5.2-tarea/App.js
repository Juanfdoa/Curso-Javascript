

// Crear una funcion, que que permita determinar
// la calificacion de 3 alumnos.

// uno con una calificacion de 100, otro de 80 y el ultimo de 59.

// si la nota se encuantra entre 100 y 90: A
// si la nota se encuantra entre 80 y 89: B
// si la nota se encuantra entre 70 y 79: C
// si la nota se encuantra entre 60 y 69: D
// si la nota es inferior a 60: F

function calcularNota(nota , nombre) {
    let notaLetra = '';

    if (nota >= 90 && nota <= 100) {
        notaLetra = 'A';
    }else if (nota >= 80 && nota <= 89) {
        notaLetra = 'B';
    }else if (nota >= 70 && nota <= 79) {
        notaLetra = 'C';
    }else if (nota >= 60 && nota <= 69) {
        notaLetra = 'D';
    }else if (nota < 60) {
        notaLetra = 'F';
    }else{
    
    }
    
    console.log('La nota del estudiante: ' + nombre +' es igual a: ' + nota + ' equivalente a: ' + notaLetra); 
}
calcularNota(100 , 'Luis');
calcularNota(80 , 'Mateo');
calcularNota(59, 'Andres');



