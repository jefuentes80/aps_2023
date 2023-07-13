 
// Componentes principal
//Alejandra

import {cenas} from "./data_cena.js";
//Crea los elementos HTML utilizando el DOM
/*Alejandra Zita*/
function primera_parte(){
  let elementos =
  `
  <div class="caja-busc">
  
      <input type="text" name="text" class="input" id="buscador" type="text" placeholder="Buscando...">

  </div>

  <div class="container">
  
    

  </div>

  <div class="blog-card"></div>
  `;

    let caja = document.getElementById("cena")


caja.innerHTML = elementos;

}
primera_parte();
/******************************************************** */

const cenaElement = document.getElementById("cena");
const cenabuscador = document.getElementById("cena");

// Recorrer la matriz de cenas y mostrar las cartas de cada cena
cenas.forEach(cena => {
  const newCenaDiv = document.createElement("div");
  newCenaDiv.classList.add("blog-card");

  const nombreElement = document.createElement("h2");
  nombreElement.textContent = cena.nombre;

  // Agregar evento clic para mostrar la ventana emergente
  nombreElement.addEventListener("click", () => mostrarVentanaEmergente(cena));

  const descripcionElement = document.createElement("h3");
  descripcionElement.textContent = cena.descripcion;

  const tiempoElement = document.createElement("h3");
  tiempoElement.textContent = cena.tiempo;

  const imgElement = document.createElement("img");
  imgElement.src = cena.img;
  imgElement.classList.add("photo");

  newCenaDiv.appendChild(nombreElement);
  newCenaDiv.appendChild(descripcionElement);
  newCenaDiv.appendChild(tiempoElement);
  newCenaDiv.appendChild(imgElement);

  cenaElement.appendChild(newCenaDiv);
});

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente(cena) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const popup = document.createElement("div");
  popup.classList.add("popup");

  const imgElement = document.createElement("img");
  imgElement.src = cena.img;

  const nombreElement = document.createElement("h2");
  nombreElement.textContent = cena.nombre;

  const tiempoElement = document.createElement("h3");
  tiempoElement.textContent = cena.tiempo;

  const descripcionElement = document.createElement("p");
  descripcionElement.textContent = cena.descripcion;

  const ingredientesElement = document.createElement("ul");
  for (const ingrediente in cena.ingredientes) {
    if (ingrediente.startsWith("ingrediente")) {
      const liElement = document.createElement("li");
      liElement.textContent = cena.ingredientes[ingrediente];
      ingredientesElement.appendChild(liElement);
    }
  }

  const preparacionElement = document.createElement("ol");
  for (const paso in cena.preparacion) {
    if (paso.startsWith("paso")) {
      const liElement = document.createElement("li");
      liElement.textContent = cena.preparacion[paso];
      preparacionElement.appendChild(liElement);
    }
  }

  popup.appendChild(imgElement);
  popup.appendChild(nombreElement);
  popup.appendChild(tiempoElement);
  popup.appendChild(descripcionElement);
  popup.appendChild(ingredientesElement);
  popup.appendChild(preparacionElement);

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Cerrar ventana emergente al hacer clic fuera de ella
  overlay.addEventListener("click", () => overlay.remove());
}


/**********************************************************/


// La programación del buscador

const buscadorElement = document.getElementById("buscador");

function actualizarResultados() {
  const filtro = buscadorElement.value.toLowerCase();

  // Eliminar los resultados anteriores
  const blogCardElement = cenabuscador.querySelector(".blog-card");
  while (blogCardElement.firstChild) {
    blogCardElement.firstChild.remove();
  }

  // Filtrar las cenas que coincidan con el texto del buscador
  const cenasFiltradas = cenas.filter(cena => cena.nombre.toLowerCase().includes(filtro));

  // Mostrar los resultados en el DOM
  cenasFiltradas.forEach(cena => {
    const newCenaDiv = document.createElement("div");
    newCenaDiv.classList.add("blog-card");

    const nombreElement = document.createElement("h2");
    nombreElement.textContent = cena.nombre;

    // Agregar evento clic para mostrar la ventana emergente
    nombreElement.addEventListener("click", () => mostrarVentanaEmergente(cena));

    const tiempoElement = document.createElement("p");
    tiempoElement.textContent = cena.tiempo;

    const descripcionElement = document.createElement("p");
    descripcionElement.textContent = cena.descripcion;

    const imgElement = document.createElement("img");
    imgElement.src = cena.img;
    imgElement.classList.add("photob");

    newCenaDiv.appendChild(nombreElement);
    newCenaDiv.appendChild(tiempoElement);
    newCenaDiv.appendChild(descripcionElement);
    newCenaDiv.appendChild(imgElement);

    blogCardElement.appendChild(newCenaDiv);
  });
}
// Escuchar el evento 'input' del buscador
buscadorElement.addEventListener("input", actualizarResultados);
