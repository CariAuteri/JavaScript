//FUNCION CONSTUCTORA:

function Movies (titulo, sinopsis, director,reparto){
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.director = director;
    this.reparto = reparto;
}

Movies.prototype.listar = function (){
    console.log ("Título:", this.titulo);
    console.log ("Sinopsis:", this.sinopsis);
    console.log ("Director", this. director);
    console.log ("============================")
};

let jurassic = new Movies(
    "Jurassic Park",
    "Dinosaurios que escapan y atacan personas",
    "Steven Spielberg",
    "Carlos, Herminia, José, Alberto"
);

let avengers = new Movies (
    "The Avengers",
    "Supeheroes que salvan al mundo",
    "Marvel",
    "Steve Roger, Tony Stark, Bruce Banner"
);
