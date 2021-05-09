//Estrucuta Condiconal
//Switch

let number=100

switch (number) {
    case 10:
        console.log('El número es 10')
        break;
    case 25:
        console.log('El número es 25')
        break;
    case 3:
        console.log('El número es 3')
        break;
    default:
        console.log ('El número es de otro valor')
        break;
}


let diaNumero= new Date().getDate()
switch (diaNumero) {
    case 0:
        console.log('Hoy es Domingo')
        break;
    case 1:
        console.log('Hoy es Lunes')
        break;
    case 2:
        console.log('Hoy es Martes')
        break;
    case 3:
        console.log('Hoy es Miércoles')
        break;
    case 4:
        console.log('Hoy es Jueves')
        break;
    case 5:
        console.log('Hoy es Viernes')
        break;
    default:
        console.log('Hoy es Sábado')
        break;
}

let number=5

switch (true) {
    case number===10:
        console.log('El número es igual a 10')
        break;
    case number % 2 === 0:
        console.log('El número es par')
        break;
    default:
        console.log('No se que más hacer')
        break;
}


let comando= prompt('Ingrese un comando (alerta, consola, print)')

switch (comando) {
    case 'alerta':
        alert('Usando switch en alert')
        break;
    case 'consola':
        console.log('Usando switch en consola')
        break;
    case 'print':
        document.write('Usando switch en navegador')
        break;

    default:
        console.error('No existe ese comando, NO SEA MALA PERSONA')
        break;
}

