let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

function peliculaMasVendida(pelicula) {
  let peliculaMayuscula = pelicula.toUpperCase();
  return peliculaMayuscula;
}

let peliculaDestacada = peliculaMasVendida('Thor: amor y trueno');

peliculas.unshift(peliculaDestacada); 

let proximosEstrenos = 'Counter-Strike, NOP, Vértigo, Nick, Avatar';

let nuevasPeliculas = proximosEstrenos.split(', '); 

let videoJuego = nuevasPeliculas.shift();
nuevasPeliculas;

function unirPeliculas(peliculas1, peliculas2) {
  let todasLasPeliculas = peliculas1.concat(peliculas2);
  return todasLasPeliculas;
}

let catalogo = unirPeliculas(peliculas, nuevasPeliculas); 
console.log(catalogo);