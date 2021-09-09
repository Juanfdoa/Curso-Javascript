// 2. Crear un programa que te permita ingresar una cantidad de años
//  y el programa te definirá en que categoría se considera según la edad:

// Prenatal va en números negativos desde -0,0 a 0,9.
// Bebé debe estar entre 0,0 y 1,00.
// Niño pequeño ente 3-5.
// Escuela primaria de 5-12.
// Adolescente 12-18.
// Adulto Joven 18-21


let edad = 12;

if (edad < - 0.9 ) {
    console.log('La categoría según la edad es PRENATAL porque tiene ' + edad + ' años');
}else if (edad < 1 ) {
    console.log('La categoría según la edad es BEBE porque tiene ' + edad + ' años');
}else if (edad < 5) {
    console.log('La categoría según la edad es NIÑO PEQUEÑO porque tiene ' + edad + ' años');
}else if (edad < 12) {
    console.log('La categoría según la edad es ESCUELA PRIMARIA porque tiene ' + edad + ' años');
}else if (edad < 18) {
    console.log('La categoría según la edad es ADOLESCENTE porque tiene ' + edad + ' años');
}else if (edad <= 21) {
    console.log('La categoría según la edad es ADULTO JOVEN porque tiene ' + edad + ' años');
}else{
    console.log('Inserte una edad menor a 21 años');
}