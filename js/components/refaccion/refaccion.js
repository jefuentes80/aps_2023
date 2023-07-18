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
  
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
  
    const closeButton = document.createElement("span");
    closeButton.classList.add("popup-close");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  
    const nombre = document.createElement("p");
    nombre.innerHTML = `<strong>${receta.nombre}</strong>`;
  
    const img = document.createElement("img");
    img.src = receta.img;
    img.alt = receta.nombre;
  
    const ingredientes = document.createElement("ul");
    for (let ingrediente in receta.ingredientes) {
      const li = document.createElement("li");
      li.textContent = receta.ingredientes[ingrediente];
      ingredientes.appendChild(li);
    }
  
    const preparacion = document.createElement("ol");
    for (let paso in receta.preparacion) {
      const li = document.createElement("li");
      li.textContent = receta.preparacion[paso];
      preparacion.appendChild(li);
    }
  
    popupContent.appendChild(closeButton);
    popupContent.appendChild(nombre);
    popupContent.appendChild(img);
    popupContent.appendChild(document.createElement("hr"));
    popupContent.appendChild(document.createElement("h1")).textContent = "Ingredientes";
    popupContent.appendChild(ingredientes);
    popupContent.appendChild(document.createElement("h1")).textContent = "Preparación";
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
  

