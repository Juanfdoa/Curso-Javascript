import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Palabra = 'CARPINTERO';
  PalabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  Letras = ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  constructor(){
    console.log('Se acaba de crear el App component')

    this.PalabraOculta = '_ '.repeat(this.Palabra.length);
  }
  comprobar( letra: any ){
    this.existeLetra(letra);
    const palabraOcultaArr = this.PalabraOculta.split(' ');
    for (let i = 0; i < this.Palabra.length; i++) {
      if (this.Palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
      
    }
    this.PalabraOculta = palabraOcultaArr.join(' ');
    this.verifiqueGana();
  }

  verifiqueGana(){
    const palabraArr = this.PalabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if (palabraEvaluar === this.Palabra) {
      this.gano = true;
      console.log('Usuario Gano');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usuario Perdio');
    }
  }

  existeLetra(letra: any){
    if (this.Palabra.indexOf(letra) >= 0) {
      //console.log('Existe la letra: ' + letra);
    }else{
      //console.log('No existe la letra: ' + letra);
      this.intentos++
    }
  }
}
