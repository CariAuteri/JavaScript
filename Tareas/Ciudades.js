//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado

let ciudades = [];
let agregarCiudades = "";
function almacenamientoCiudades() {
  agregarCiudades = prompt("Ingrese una ciudad");
  while (agregarCiudades !== null && agregarCiudades !== "0") {
    ciudades.push(agregarCiudades.trim().toUpperCase());
    agregarCiudades = prompt("Ingrese otra ciudad");
  }
  return `Las Ciudades que ingreso son ${ciudades}`;
}
function almacenamientoCiudades()

//Mostrar la longuitud del arreglo

//Mostrar en el documento web los items de las posiciones primero, tercero y última

function mostrarCiudades() {
  document.write(`La primer ciudad ingresada es: ${ciudades[0]}`) 
  document.write (`La tercera ciudad ingresada es: ${ciudades[3]}`) 
  document.write (`La ultima ciudad ingresada es: ${ciudades[ciudades.length-1]}`)
}


//Añade en última posición la ciudad de París   

ciudades.push('Paris')

//Escribe por pantalla el elemento que ocupa la segunda posición.

console.log (`la segunda ciudad ingresada es: ${ciudades[2]}`) 


//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'

ciudades.splice(2, 1, "Barcelona")




