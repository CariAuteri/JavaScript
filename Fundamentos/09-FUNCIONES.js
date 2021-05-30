//Fuciones: pensarlas como tareas

//Funciones Declarativas:
function miFuction() {
    console.log("Hola Mundo")    
}

let num1= 34
let num2= 56

function sumar(x,y) {
    console.log(num1+num2)    
}

// function calculadora(num1, num2, operacion) {
//     if (!num1 || !num2){
//         return "Falta valor"
//     }
    
//     switch (operacion) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Operacioón inválida"
//     }
// }

function calculadora(num1=0, num2=0, operacion="+"){
    if (!num1 || !num2){
        return "Falta valor"
    }
    
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operacioón inválida"
    }
}

// let resultado= calculadora()

function cubo(num){
    return Math.pow(num,3)
}

function doble(num){
    return num * num
}

// let numeros=[23,45,2,67]

// function converCubo(array,function){
//     let numerosAlCubo= []

// //for... of
//  for(let n of array){
//      numerosAlCubo.pushfunction (n)
//  }
//  return numerosAlCubo
// }

// //Funciones Anónimas:
// const saludar= function(){
//     console.log ("Hola Pibes")
// }
// saludar()



//Scope:

let heroe= "Superman"

function saludarHeroe(){
    let heroe= "Batman"

    console.log(`Bienvenido ${heroe}`)
}