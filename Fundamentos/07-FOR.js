//for

for (let i=0; i<10; i++) {
    console.log(i)    
}

//Tarea: ingresar la tabla que queremos calcular y mostrar en consola

// let tabla= parseInt (prompt('Ingrese el número de la tabla a calcular'))

// if (isNaN (tabla)) {
//     console.error('DEBE enviar un número')    
// }

// for (let i=1; i<=10, i++ ){
//     console.log(`${tabla} X ${i} = ${tabla*i}`)
// }

let tabla= parseInt(prompt('Ingrese el número de la tabla a calcular'))
while (tabla) {
    for(let i=0; i<=10; i++){
    console.log(`${tabla} x ${i} = ${tabla*i}`)
}
 tabla=parseInt(prompt('Ingrese el número de la tabla a calcular'))   
}

console.error('Usuario cancelo o ingreso un dato inválido')