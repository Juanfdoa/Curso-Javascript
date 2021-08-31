
// Determinar numeros pares e impares.

let numeros =[1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < numeros.length; i++) {
    
    let numero = numeros[i];
    par = numero % 2;
    
    if (par == 0) {
        console.log(numero + ' Este numero es par');
    }else{
        console.log(numero + ' Este numero es impar');
    } 
    
}
