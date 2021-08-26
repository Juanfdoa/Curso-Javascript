

// Crear un algoritmo, que basado en la nota
// imprima si el alumno aprobo la materia.
// Se aprueba con 60.
// si es alumno obiene un puntaje menor a 50
// Escribir un mensaj que diga:
// por favor estudie mas.

let nota = 55;

if (nota >= 60) {
    console.log('El estudiante aprobo la materia');
    console.log('Con un puntaje de ' + nota);

}else{
    if (nota <= 50) {
        console.log('El estudiante NO aprobo la materia');
        console.log('Por favor estudie mas, ' + 'Su puntaje es de ' + nota);
    
    }else{
    console.log('El estudiante NO aprobo la materia');
    console.log('Su puntaje es de ' + nota);
    }
}

