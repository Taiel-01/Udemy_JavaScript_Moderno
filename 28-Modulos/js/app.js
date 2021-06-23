import nuevaFuncion, { nombreCliente as clienteNombre , ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion();

console.log( clienteNombre );
console.log( ahorro );

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);


const cliente = new Cliente( nombreCliente, ahorro );


console.log(cliente.mostrarInformacion())

// Importar empresa
const empresa = new Empresa('Codigo Con Juan', 100, 'Aprendisaje en linea');
console.log(empresa.mostrarInformacion());