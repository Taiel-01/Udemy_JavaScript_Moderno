//? ========================================================================================================================
//? =====================================================  STRINGS  ========================================================
//? ========================================================================================================================

//* .indexOf y .includes para buscar un string
console.log(producto.indexOf(''))   //return number
console.log(producto.includes(''))  //return true or false

//* .concat para concatenar
console.log(producto.concat(''))
console.log("El producto" + producto + "Tiene un precio de" + precio);
console.log(`El producto ${producto} tiene un producto de ${precio}`)  // Template String

//* .trim para borrar espacios vacios de un string
console.log(producto.trimStart());
console.log(producto.trimEnd());
console.log(producto.trimStart().trimEnd());
console.log(producto.trim())

//* .replace para reemplazar
console.log(producto.replace('Old', 'New'));       

//* .slice para cortar
console.log(producto.slice(0, 10));      // Solo retorna los caracteres del 0 al 10
console.log(producto.substring(2, 1));   // !Si el primero es mayor Tira error

//* .substring Alternativa a slice 
console.log(producto.substring(0, 10)); // Solo retorna los caracteres del 0 al 10
console.log(producto.substring(2, 1));  // intercambia los valores

//* .charAt para cortar el caracter de la posicion seleccionada
console.log(usuario.charAt(0));

//* .repeat para mostrar una cadena multiples veces
const texto = 'si'.repeat(2.4); // si si

//* Split para dividir un string 
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "))
const actividad2 = 'Leer, caminar, escuchar musica, escribir, apender a programar';
console.log(actividad2.split(", "));
const actividad3 = "Aprendiendo JavaScript #JSModernoConJuan"
console.log(actividad3.split('#'));


//? ========================================================================================================================
//? =====================================================  NUMEROS  ========================================================
//? ========================================================================================================================

//* Crear objeto con un Number
const number = new Number(80);
console.log(number);

//* Convertir de string a numero flotante
console.log(Number.parseFloat(number));

//* Convertir de string a numero entero
console.log(Number.parseInt(number));

//* Revisar si un numero es enterno o no
console.log(Number.isInteger(number));

//? ========================================================================================================================
//? =====================================================  MATH  ===========================================================
//? ========================================================================================================================


//*  Redondear
resultado = Math.round(2.8); // 3
resultado = Math.round(2.2); // 2
resultado = Math.round(2.5); // 3
resultado = Math.round(2.4); // 2

//*  PI
resultado = Math.PI;

//*  Redondear hacia arriba
resultado = Math.ceil(2.1); // 3

//*  Redondear hacia abajo
resultado = Math.floor(2.9) // 2

//*  Raiz Cuadrada
resultado = Math.sqrt(144);

//*  Absoluto
resultado = Math.abs(-500);

//*  Potencia
resultado = Math.pow(2, 4);

//*  Minimo
resultado - Math.min(3.5, 1, 12, -3)

//*  Maximo
resultado = Math.max(3.5, 1, 12, -3)

//*  Aleatorio
resultado = Math.random() * 20;

//*  Aleatorio dentro de un rango...
resultado = Math.floor(Math.random() *30);


//? ========================================================================================================================
//? =====================================================  Booleans  =======================================================
//? ========================================================================================================================
const autenticado = false;
if (autenticado) {
    console.log('Si puedes ver netflix')
} else {
    console.log('No no puedes verlo')
}

//* Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado')


//? ========================================================================================================================
//? =====================================================  Objects  ========================================================
//? ========================================================================================================================

//* Creacion de objeto producto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//* Acceder a propiedad/llave
console.log(producto.nombre);
console.log(producto['nombre']);

//* Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//* Eliminar propiedades del objeto
delete producto.disponible;

//* extraer valor y agregar a una variable
const precio = producto.precio

//* extraer valor y agregar a una variable con Destructuring
const { precio } = precio;
const { nombre, precio, disponible } = producto;

//* Destructuring a objetos anidados
const producto = {
    informacion: {
        fabricacion: {
            pais: 'China'
        }
    }
}

const { informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

//* Congelar objeto / este no puede ser modificado de ninguna forma
Object.freeze( producto );

//* verificar si el objeto esta congelado.
console.log(Object.isFrozen(producto));

//* Sellar objeto / puede ser modificado pero no puedes agregar o sacar llaves
Object.seal( producto );

//* verificar si el objeto esta sellado.
console.log(Object.isSealed(producto));

//* Asignar un objeto a otro
const resultado = Object.assign(producto, medidas);

//* Spread Operatos o Rest Operator
const resultado2 = { ...producto, ...medidas }

//*  Ver llaves de un objeto
console.log(Object.keys(producto));

//*  Ver los valores de las llaves de un objeto
console.log(Object.values(producto));

//* Devuelve ambos en pares
console.log(Object.entries(producto));



//? ========================================================================================================================
//? ===================================================  Funciones  ========================================================
//? ========================================================================================================================

