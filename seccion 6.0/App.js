
function DescribirPersona(p) {

  console.log(p.nombre + ' tiene una edad de ' + p.edad + ' años y una estatura de ' + p.estatura + ' mts');  

}

let persona = {
    nombre: "Fernando",
    edad: 24,
    estatura: 1.72
}
DescribirPersona(persona);
