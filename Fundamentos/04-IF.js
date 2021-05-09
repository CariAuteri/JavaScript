//Estructura de control
//If.. Else...

let num=5

if(num % 2 === 0){
    console.log ('El número es par')
}else{ 
    console.warn ('El número no es par')
}

let num= parseInt(prompt ('Ingrese un número'))
if (isNaN(num)) {
    console.log('Ingrese un número')
}

if(num===10){
    console.log('El número es igual a 10')
}else if(num>10){
    console.log('El número es mayor que 10')
}else if (num!==10){
    console.log('El valor ${num} es distinto a 10')
}else {
    console.log ('El número es menor que 10')
}

//Ejemplo: Fiesta
//Solo entran mayores de edad, o sea >=18
//Sino es mayor de edad, debe ir acompañado de un tutor

let edad= 15
let tutor= true

if(edad>=18){
    console.log('BIENVENIDO a la joda')
}else if(tutor===true){
    console.log('BIENVENIDOS a la joda! No se separe de su tutor')
}else{
    console.log('Salga de aquí, usted NO puede disfrutar de la vida')
}

if(edad<18 && tutor===false){
    console.error('Salga de aquí, usted NO puede disfrutar de la vida')
}else if(edad>=18 || tutor==true){
    console.log('BIENVENIDO a la joda')
}

