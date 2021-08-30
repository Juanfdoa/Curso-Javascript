
class Carro {
  constructor(marca , tipo , puertas , creadoEn){
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creadoEn = 'Hoy';
    this.encendido = false;
    this.gasolina = 100;
  }
  encenderCarro(){
    
    if (this.encendido) {
      console.log('El carro ya esta encendido');
    }else{
      this.encendido = true;
    console.log('El carro esta encendido');
    }
    return this;
  }
  realizarViaje(consumo){
    // para reducir el codigo
    // if (!this.encendido) return console.log('El carro esta apagado');
    // if (consumo > this.gasolina) return console.log('No puede realizar el viaje');
    if (this.encendido) {
      if(this.gasolina <= consumo){
        console.error('No tienes suficiente gasolina, restante: ' + this.gasolina);
      }else{
        this.gasolina = this.gasolina - consumo;
      return 'Gasolina restante ' + this.gasolina;
      }

    }else{
      console.error('El carro esta apagado');
    }
  
    
  }
}

let carro = new Carro('Toyota', 'Campero', 5);




