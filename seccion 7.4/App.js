
// Determinar cual es el numero mayor de un arreglo

let numeros =[1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] >= mayor) {
        mayor = numeros[i];
    }
    
}
console.log('El numero mayor del arreglo es: ' + mayor);