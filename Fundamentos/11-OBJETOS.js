//OBJETOS

let auto= {
    color:"red",
    marca: "Fiat",
    modelo:"Palio",
    anio: 2018,
    encendido: false,
    encenderApagar: function(){
        this.encendido = !this.encendido;
        if (this.encendido){
            console.log("El vehículo está encendido")
        }else{
            console.log("El vehículo está apagado")
        }
    }
};

let alumno={
    nombre: "Carlos",
    edad: 40,
    dni: 26758467,
    curso: "Fullstack",
    saludar: function(nombre= this.nombre){
        console.log(`Hola, mi nombre es ${nombre}`)
    },
}


//Obtener valores

alumno.nombre;

alumno["edad"];

//Agregar un nuevo atributo
alumno.domicilio = "Lomas de tafí";

//Modificar un valor
alumno.nombre = "Pablo Daniel Marino";

//Eliminar un valor
delete alumno.edad;

//Arreglo de objetos

let alumnos = [
  { nombre: "Julio", curso: "Fullstack" },
  { nombre: "Fabricio", curso: "Javascript" },
  { nombre: "Miguel", curso: "Fullstack" },
];


//Recorrer el arreglo de objetos

alumnos.forEach(function (alumno) {
  console.log(`Nombre: ${alumno.nombre} - ${alumno.curso}`);
  console.log("----------------------------------");
});

for (let index = 0; index < alumnos.length; index++) {
  console.log(`Nombre: ${alumnos[index].nombre} - ${alumnos[index].curso}`);
}