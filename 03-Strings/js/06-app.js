const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto

const texto = ' en Promocion'.repeat(2.9);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "))

const hobbies = 'Leer, caminar, escuchar musica, escribir, apender a programar';

console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan"
console.log(tweet.split('#'));