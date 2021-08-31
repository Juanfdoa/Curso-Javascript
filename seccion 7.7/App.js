
// Crear una funcion que reciba 3 argumentos numericos.

function max(a ,b ,c){

    let mayor = 0;

    if (a > b && a > c ) {
        mayor = a;
    
    }else if (b > a && b > c) {
        mayor = b;
    
    }else{
        mayor = c;
    }
    return mayor;
     

}
let mayor = max(51,23,46);
console.log('El numero mayor es: ' + mayor);