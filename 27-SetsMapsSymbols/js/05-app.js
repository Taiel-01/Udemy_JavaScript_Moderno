const sym = Symbol('1');
const sym2 = Symbol('1');

// if(sym === sym2) {
//     console.log('Son iguales');
// } else {
//     console.log('Son Diferentes')
// }

// console.log(Symbol() === Symbol());


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaver del objeto
persona[nombre] = 'Taiel';
persona[apellido] = 'Nunes';
persona.tipoCLiente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);