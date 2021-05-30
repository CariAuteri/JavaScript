//ARRAY O ARREGLOS

//MÉTODOS
let alumnos= ['Pablo; Fabrizio; Laura; Gabriela']

//Acceder a un elemento dentro del arreglo
alumnos [2]

//Obtener el último elemento
alumnos[alumnos.length -1]

//Concatenar todos los elementos en un string
alumnos.join()

//Iterar o recorrer un arreglo
for (let i=0; i<alumnos.length; i++){
    console.log(`Hola, soy ${alumnos[i]}`)
}

//Agregar elementos
alumnos.push('Jorge')

//Eliminar último elemento
alumnos.pop ()

//Añadir un elemento al principio
alumnos.unshift('Walter')

//Eliminar un elemento del principio 
alumnos.shift()

//Encontrar el índice de un elemento
console.log(alumnos.indexOf ('Pablo'))

//Encontrar un elemento 
console.log(alumnos.includes ('Laura'))

//Eliminar elementos mediante su posición
let pos=1
alumnos.splice(pos,2)

//Eliminar varios elementos a partir de una posición
let alumnosEliminados= alumnos.splice(o,3)

//Reemplazar valores
alumnos.splice(0,2, "Daniel","Augusto")

//Concatenar dos array
let comision= alumnas.concat(alumnos)

//Acomodar por orden alfabético
let respuesta= ["🥚","🐔"].sort()

