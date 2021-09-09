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
    mercado.push(nuevoProducto);
    total = nuevoProducto.valor * nuevoProducto.cantidad;
    console.log(mercado);
    
}

function sumar() {
    valorTotal = valorTotal + total;
    console.log(valorTotal + ' Bruto');
    
}

function iva() {
    totalIva = (valorTotal * 19) / 100;
    console.log(totalIva + ' IVA');
    
    document.getElementById('tabla').innerHTML += '<tbody><td>'+ nuevoProducto.producto +
    '</td><td>'+ nuevoProducto.valor +'</td><td>'+ nuevoProducto.cantidad +'</td><td>'+ total +
    '</td><td class="table-info">'+ valorTotal +'</td><td class="table-danger">'+ totalIva +'</td></tbody>';
   
}

function calcular() {
    neto = valorTotal + totalIva;
    console.log(neto + ' Neto Total');
    document.getElementById('neto').innerHTML += ' ' + neto;
    

    
    for (let i = 0; i < mercado.length; i++) {
        console.log(mercado[i]);
        
        
    }
    
    
}



