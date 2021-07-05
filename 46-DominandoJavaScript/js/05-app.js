// Explicit Binding

function presona(el1, el2) {
    console.log(`Mi Nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// ============================================================//

presona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

presona.apply(informacion, musicaFavorita);

const nuevaFn = presona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();