localStorage.setItem('nombre', 'Taiel');

const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Frebrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);