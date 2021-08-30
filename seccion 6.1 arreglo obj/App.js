
let persona1 = {
  nombre: 'Fernando',
  edad: 24
};
let persona2 = {
  nombre: 'Andres',
  edad: 28
};
let persona3 = {
  nombre: 'Camilo',
  edad: 25
};

let personas = [persona1,persona2,persona3];

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];
  console.log('Nombre: ' + persona.nombre + ' Edad: ' + persona.edad );
  
}
