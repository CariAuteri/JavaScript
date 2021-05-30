// Objeto Persona:
//Crear un objeto llamado persona que contenga los siguientes atributos:
// Nombre
// Edad
// DNI
// Domicilio
// Hijos (cantidad)
// Profesión
// Agregar Métodos:
// Saludar ( mensaje de presentación en navegador o consola)
// Listar (muestra la lista con los datos de la persona)

let persona={
    nombre: "Carina",
    edad: 32,
    dni: 33978965,
    domicilio: "Monteagudo 747",
    hijos: 0,
    profesion: "Licenciada en Ciencias Políticas",
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    },
};

for (let atributo in persona) {
    console.log(`${atributo}: ${persona[atributo]}`);
  }


  //Arreglo de objetos: Crear un arreglo de objetos que contenga datos de películas como:
  //Título
  //Género
  //Año
  //Sinopsis
  //Crea una función que permita mostrar en una lista cada película con sus datos

  let peliculas=[
      {titulo: "Alicia en el País de las Maravillas", genero: "Familiar,Fantasía,Animación, Acción y Aventura", anio: 1951, sinopsis: "Únete a las aventuras de Alicia mientras persigue al Conejo Blanco hacia un mundo al revés que se vuelve cada vez más curioso"},
      {titulo:"Contagio", genero:"Drama", anio: 2011, sinopsis: "Poco después de regresar de un viaje de negocios, Beth Emhoff muere a causa de una supuesta gripe. Mientras, la mortal epidemia se expande"},
      {titulo:"Escuela de Rock", genero: "Comedia, Música y Musicales", anio:2003, sinopsis:"Un músico en dificultades usa sus artimañas para obtener un empleo de maestro suplente en una escuela privada, donde ensea en secretorock and rol a los niños"},
      {titulo: "Fragmentado", genero:"Terro, Thiller", anio: 2016, sinopsis: "Un hombre con múltiples identidades secuentra a tres chicas, que deben encontrar el modo de escapar antes de que se apodere de él su más reciente y peligrosa identidad"},
      {titulo: "Bastardos Sin Gloria", genero: "Bélico, Acción, Humor Negro", anio:2009, sinopsis: "Comienza en una Francia ocupada por los alemanes, donde Shosanna Dreyfus atestigua la ejecución de su familia en manos del Coronel Nazi Hans Landa. Shosanna logra escapar y huye a París, donde ella se crea una nueva identidad como la dueña y operadora de un cine"},

  ];

  
for (let i = 0; i < peliculas.length; i++) {
    console.log(`Titulo: ${peliculas[i].titulo} - ${peliculas[i].genero} - ${peliculas[i].anio} - ${peliculas[i].sinopsis}`);
  }
  