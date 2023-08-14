import { recetas } from "./data_refaccion.js";
import { oola } from "./sabias_que.js";
import { buscador } from "./buscador.js";
function ola() {

    let cajita = document.querySelector("#refaccion")



    recetas.forEach(element => {

        let gio = document.createElement("div")
        gio.classList.add("item_refa")
        gio.innerHTML = `
        
        <img src= "${element["img"]}" class="imagenes_re">
            <p class="nombres"> <b>${element["nombre"]} </b></p>
            <p class="descripcion">${element["descripcion"]} </p>

          
        `
        cajita.appendChild(gio)
    });
}
oola();
buscador();
ola();

//******** */
function createPopup(receta) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.id = "popup";

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.id = "popup-content";

  const closeButton = document.createElement("span");
  closeButton.classList.add("popup-close");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    popup.classList.remove("active");
  });
  closeButton.id = "popup-close";

  const nombre = document.createElement("p");
  nombre.innerHTML = `<strong>${receta.nombre}</strong>`;
  nombre.id = "popup-nombre";

  const img = document.createElement("img");
  img.src = receta.img;
  img.alt = receta.nombre;
  img.id = "popup-img";

  const ingredientes = document.createElement("ul");
  ingredientes.id = "popup-ingredientes";
  for (let ingrediente in receta.ingredientes) {
    const li = document.createElement("li");
    li.textContent = receta.ingredientes[ingrediente];
    ingredientes.appendChild(li);
  }

  const preparacion = document.createElement("ol");
  preparacion.id = "popup-preparacion";
  for (let paso in receta.preparacion) {
    const li = document.createElement("li");
    li.textContent = receta.preparacion[paso];
    preparacion.appendChild(li);
  }

  popupContent.appendChild(closeButton);
  popupContent.appendChild(nombre);
  popupContent.appendChild(img);
  popupContent.appendChild(document.createElement("hr"));
  
  const h1Ingredientes = document.createElement("h1");
  h1Ingredientes.textContent = "Ingredientes";
  h1Ingredientes.id = "popup-h1-ingredientes";
  popupContent.appendChild(h1Ingredientes);
  
  popupContent.appendChild(ingredientes);

  const h1Preparacion = document.createElement("h1");
  h1Preparacion.textContent = "Preparación";
  h1Preparacion.id = "popup-h1-preparacion";
  popupContent.appendChild(h1Preparacion);
  
  popupContent.appendChild(preparacion);

  popup.appendChild(popupContent);

  return popup;
}

function initializePopups() {
  const items = document.querySelectorAll(".item_refa");

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      const popup = createPopup(recetas[index]);
      popup.classList.add("active");
      document.body.appendChild(popup);
    });
  });
}

initializePopups();


  

