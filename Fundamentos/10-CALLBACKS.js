//Call Backs

let numeros= [2, 5, 6, 12, 24, 37]

let numerosOrdenados= numeros.sort(function (num1,num2){
    return num1 - num2
})

//Filter

let pares= numeros.filter(function (num){
    return num % 2 === 0
})

//Find
let alumnos= ["Lucas", "Pablo", "Fabrizio", "Jorge"]

alumnos.find(function (alumno){
    return alumno === "Mateo"
})

