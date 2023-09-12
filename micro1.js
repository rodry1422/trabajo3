
let productos = ['heladera', 'microondas', 'licuadora', 'tostadora', 'lavadora', 'secadora'];

console.log(productos[0]);
console.log(productos[3]); 
console.log(productos[5]); 

let primerElemento = productos.shift();
productos.push(primerElemento);


productos.push('plancha', 'cafetera'); 

console.log(productos.length);

let productoBuscado = 'licuadora';
let posicion = productos.indexOf(productoBuscado);
if (posicion >= 0) {
  console.log('Producto encontrado');
} else {
  console.log('El producto buscado no existe');
}

let cadena = productos.join(' ');

console.log(cadena.length);

cadena = cadena.replace('tostadora', 'batidora'); 
let nuevoArray = cadena.split(' '); 
