// Se necesita crear un programa que permita ingresar los productos 
// de 1 a N de un mercado con su valor y cantidad dónde:
// • Se debe mostrar el total del mercado calculando cantidad y valor, 
// teniendo en cuenta un IVA del 19%
// • Se debe mostrar el total bruto y neto, al igual que el valor del IVA
// • Se debe mostrar el producto más caro y el más barato.
// • Se debe crear una funcionalidad que permita listar todos los productos 
// ordenados de mayor a menor precio que fueron incluidos en el mercado

function capturar() {
    function Productos(producto, valor, cantidad) {
        this.producto = producto;
        this.valor = valor;
        this.cantidad = cantidad;

    }
    // capturar productos
    let capturarProducto = document.getElementById('producto').value;
    let capturarValor = document.getElementById('valor').value;
    let capturarCantidad = document.getElementById('cantidad').value;

    nuevoProducto = new Productos(capturarProducto, capturarValor, capturarCantidad);
    agregar();
    sumar();
    iva();
       
}


let mercado = [];
let valorTotal = 0;

function agregar() {
    // Enviar el producto a un array
    mercado.push(nuevoProducto);
    // Multiplicar el valor por la cantidad
    total = nuevoProducto.valor * nuevoProducto.cantidad;
    console.log(mercado);
    
}

function sumar() {
    // sumar los totales para obtener un bruto
    valorTotal = valorTotal + total;
    console.log(valorTotal + ' Bruto');
    
}

function iva() {
    // Calcular IVA
    totalIva = (valorTotal * 19) / 100;
    console.log(totalIva + ' IVA');
    
    document.getElementById('tabla').innerHTML += '<tbody><td>'+ nuevoProducto.producto +
    '</td><td>'+ nuevoProducto.valor +'</td><td>'+ nuevoProducto.cantidad +'</td><td>'+ total +
    '</td><td class="table-info">'+ valorTotal +'</td><td class="table-danger">'+ totalIva +'</td></tbody>';
   
}

function calcular() {
    // obtener el valor neto
    neto = valorTotal + totalIva;
    console.log(neto + ' Neto Total');
    document.getElementById('neto').innerHTML += ' ' + neto;
    
    mercado.sort(function(a,b){
        return (b.valor-a.valor)
    })
    // lista ordenada de mayor a menor
    console.log('Lista ordenada de menor a mayor');
    console.log(mercado);
    // Producto de mayor valor
    console.log('Producto de mayor valor');
    console.log(mercado[0]);

    mercado.sort(function(a,b){
        return (a.valor-b.valor)
    })
    // Producto de menor valor
    console.log('Producto de menor valor');
    console.log(mercado[0]);

    
    
}



