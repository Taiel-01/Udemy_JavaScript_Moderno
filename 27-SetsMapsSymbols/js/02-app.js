//? WeakSet
//* Solo aceptan objetos
//* No se puede usar el .size para ver que extencion tiene
//* No son iterables


const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);

console.log(weakset.has(cliente));

console.log(cliente.size);

console.log(weakset);