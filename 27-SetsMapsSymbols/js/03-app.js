
const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);



console.log(cliente.size);  // 3

console.log(cliente.has('nombre'));  // true

console.log(cliente.get('nombre'));  // Karen
 
/* =============================================== */

cliente.delete('saldo');

console.log(cliente.has('saldo'));  // true

console.log(cliente.get('saldo'));  // Karen

cliente.clear();

console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach( (datos, index) => {
    console.log(datos);
    console.log(index);
})