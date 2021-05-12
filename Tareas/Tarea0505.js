//Tarea 2

valor1=parseInt(prompt('Ingrese un número'))
valor2=parseInt(prompt('Ingrese OTRO número'))
operacion= prompt('Ingrese la operación a realizar: suma +, resta -, multiplicación *, división /')

if (isNaN (valor1)){
    console.log('No es un número, por lo que será 0')
    valor1=0
    console.log(`Número 1 = ${valor1}`)
}

if (isNaN (valor2)){
    console.log('No es un número, por lo que será 0')
    valor2=0
    console.log(`Número 1 = ${valor2}`)
}

switch (operacion) {
    case "+":
        console.log(`La suma del ${valor1} más ${valor2} es igual a ${valor1+valor2}`)
    break;
    case "-":
        console.log(`La resta del ${valor1} menos ${valor2} es igual a ${valor1-valor2}`)
    break;
    case "*":
        console.log(`La multiplicación del ${valor1} por ${valor2} es igual a ${valor1*valor2}`)
    break;
    case "/":
        console.log(`La división del ${valor1} dividido ${valor2} es igual a ${valor1/valor2}`)
    break;
    default:
        console.error('NO se puede realizar esta operación')
        break;
}
