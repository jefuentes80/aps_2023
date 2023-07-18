import { recetas } from "./data_cena.js";
import { tata } from "./sabias_que.js";
import { buscador } from "./buscador.js";

function yes() {


    let cajita = document.querySelector("#cena")



    recetas.forEach(element => {

        let gio = document.createElement("div")
        gio.classList.add("item_cena")
        gio.innerHTML = `
        
        <img src= "${element["img"]}" class="imagenes_cena">
            <p class="nombres"> <b>${element["nombre"]} </b></p>
            <p class="descripcion">${element["descripcion"]} </p>

          
        `
        cajita.appendChild(gio)
    });
}

tata();
buscador();
yes();


//******** */
function createCoco(receta) {
  const coco = document.createElement("div");
  coco.classList.add("coco");

  const cocoContent = document.createElement("div");
  cocoContent.classList.add("coco-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("coco-close");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    coco.classList.remove("active");
  });

  const nombre = document.createElement("p");
  nombre.innerHTML = `<strong>${receta.nombre}</strong>`;

  const img = document.createElement("img");
  img.src = receta.img;
  img.alt = receta.nombre;


  img.classList.add("img-modal");


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

  cocoContent.appendChild(closeButton);
  cocoContent.appendChild(nombre);
  cocoContent.appendChild(img);
  cocoContent.appendChild(document.createElement("hr"));
  cocoContent.appendChild(document.createElement("h3")).textContent = "Ingredientes";
  cocoContent.appendChild(ingredientes);
  cocoContent.appendChild(document.createElement("h3")).textContent = "Preparación";
  cocoContent.appendChild(preparacion);

  coco.appendChild(cocoContent);

  return coco;
}

function initializeCoco() {
  const items = document.querySelectorAll(".item_cena");

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      const coco = createCoco(recetas[index]);
      coco.classList.add("active");
      document.body.appendChild(coco);
    });
  });
}

initializeCoco();