// Se necesita crear un programa que permita ingresar una lista de estudiantes 
// de 1 a N con su nota final (0,0 a 5,0) al finalizar dicho ingreso el programa 
// debe mostrar en pantalla:
// • Cuántos pasaron teniendo en cuenta que se pasar con una nota mayor a 3.8.
// • Cuantos quedaron para recuperación si la nota esta entre 2.5 a 3.8.
// • Cuantos perdieron si la nota está de 0,0 a 2,5.

function capturar() {
    
    function Estudiante(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;

    }
    let nombreCapturar = document.getElementById('nombre').value;
    let notaCapturar = document.getElementById('nota').value;
    
    nuevoEstudiante = new Estudiante(nombreCapturar, notaCapturar);
    console.log(nuevoEstudiante);
    if (nuevoEstudiante.nota >= 3.8) {
    agregarG();
    console.log(ganaron.length + ' Estudiantes ganaron la materia');
    }else if (nuevoEstudiante.nota > 2.5 && nuevoEstudiante.nota < 3.8) {
     agregarR();
     console.log(recuperar.length + ' Estudiantes deben recuperar la materia');
    }else if (nuevoEstudiante.nota <= 2.5) {
     agregarP();
     console.log(perdieron.length + ' Estudiantes perdieron la materia');
    }
    
}
let ganaron = [];
let recuperar= [];
let perdieron = [];
function agregarG() {
    ganaron.push(nuevoEstudiante);
    console.log(ganaron);
    document.getElementById('tabla1').innerHTML += '<tbody><td>'+ nuevoEstudiante.nombre +'</td><td>'+ nuevoEstudiante.nota +'</td></tbody>';

};
function agregarR() {
    recuperar.push(nuevoEstudiante);
 console.log(recuperar);
 document.getElementById('tabla2').innerHTML += '<tbody><td>'+ nuevoEstudiante.nombre +'</td><td>'+ nuevoEstudiante.nota +'</td></tbody>';

};
function agregarP() {
  perdieron.push(nuevoEstudiante);
 console.log(perdieron);
 document.getElementById('tabla3').innerHTML += '<tbody><td>'+ nuevoEstudiante.nombre +'</td><td>'+ nuevoEstudiante.nota +'</td></tbody>';

}
function calcular(params) {
    document.getElementById('ganaron').innerHTML += ' ' + ganaron.length;
    document.getElementById('recuperar').innerHTML += ' ' + recuperar.length;
    document.getElementById('perdieron').innerHTML += ' ' + perdieron.length;
}

