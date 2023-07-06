import {cenas} from "./data_cena.js";
//Crea los elementos HTML utilizando el DOM
/*Alejandra Zita*/
function primera_parte(){
  let elementos =
  `<div class="blog-card"></div>`;

    let caja = document.getElementById("cena")


caja.innerHTML = elementos;

}
primera_parte();
/*Forma en que se crean los divs con la información de la caja*/
// Obtén el div contenedor donde mostrarás la información
const contenedorProductos = document.getElementById('cena');
    contenedorProductos.classList.add('cena');
    
    cenas.forEach((producto, index) => {
      const divProducto = document.createElement('div');
      divProducto.classList.add('producto');
      divProducto.id = 'producto-' + index; // Asignar un ID único basado en el índice
    
      const divNombre = document.createElement('div');
      divNombre.classList.add('nombre');
      divNombre.textContent = producto.nombre;
      divProducto.appendChild(divNombre);
    
      const divPrecio = document.createElement('div');
      divPrecio.classList.add('descripcion');
      divPrecio.textContent = 'descripcion: ' + producto.descripcion;
      divProducto.appendChild(divPrecio);
  
      const imagen = document.createElement('img');
      imagen.classList.add('imagen');
      imagen.src = producto.img;
      divProducto.appendChild(imagen);
    
      divProducto.addEventListener('click', () => mostrarEnGrande(producto));
    
      contenedorProductos.appendChild(divProducto);
    });
    
    function mostrarEnGrande(producto) {
      const contenedorModal = document.createElement('div');
      contenedorModal.classList.add('modal');
    
      const modalContenido = document.createElement('div');
      modalContenido.classList.add('modal-contenido');
    
      const imagenModal = document.createElement('img');
      imagenModal.classList.add('imagen-modal');
      imagenModal.src = producto.img;
      modalContenido.appendChild(imagenModal);
    
      const textoModal = document.createElement('div');
      textoModal.classList.add('texto-modal');
      textoModal.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p><strong>Precio:</strong> ${producto.descripcion}</p>
      `;
      modalContenido.appendChild(textoModal);
    
      contenedorModal.appendChild(modalContenido);
      document.body.appendChild(contenedorModal);
    
      contenedorModal.addEventListener('click', () => {
        contenedorModal.remove();
      });
    }