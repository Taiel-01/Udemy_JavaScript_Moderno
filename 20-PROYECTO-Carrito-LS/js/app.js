// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEvenListeners()
function cargarEvenListeners() {
    // Cuando agregar un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos de local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML(); // Eliminamos todo el html
    })
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();


    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Iterar sobre el carrito y mostrar html
    };
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya exite en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        // Actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];

    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    console.log(articulosCarrito);

    carritoHTML();
}


// Muestra el Carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();


    // Recorre el carrito y genera el HTML



    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}"  width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar carrito de compras al storage
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

