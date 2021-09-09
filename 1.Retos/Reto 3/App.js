// 3. Se necesita hacer un programa que nos calcule el IVA de un producto 
// teniendo en cuenta que vamos a manejar 3 países
// Colombia – 19%, Argentina 20% y Chile 9 %.

let pais = 'Colombia';
let valor = 1000;
let iva = 0;

switch (pais) {
    case 'Colombia':
        iva = (valor * 19) / 100;
        console.log('El IVA que se le cobrará en COLOMBIA es de ' + iva + 
                    ' con base al total suministrado de ' + valor);
        break;

    case 'Argentina':
    iva = (valor * 20) / 100;
    console.log('El IVA que se le cobrará en ARGENTINA es de ' + iva + 
                ' con base al total suministrado de ' + valor);
        break;

    case 'Chile':
    iva = (valor * 9) / 100;
    console.log('El IVA que se le cobrará en CHILE es de ' + iva + 
                ' con base al total suministrado de ' + valor);
        break;

    default:
        break;
}