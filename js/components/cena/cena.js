import { sabias } from "./sabias_que.js";
import { cenas } from "./data_cenas.js"; 
import { buscador } from "/js/components/cena/buscador.js";

function prueba() {
  let caja = document.querySelector("#cenas"); 

  let div = document.createElement("div");
  div.innerHTML = `

    <h1 class="hi">Cenas</h1>`;
  div.classList.add("caja");
  caja.appendChild(div);
}

prueba();
buscador(); 
sabias();

function vista() {
  let eldom = document.querySelector(".caja");
  eldom.addEventListener("click", mostrarDatos);

  cenas.forEach((element) => { 
    let miniatura = document.createElement("div");
    miniatura.classList.add("miniatura");
    miniatura.innerHTML = `
      <img src="${element.img}">
      <div class="solotexto">
        <h3 class="titulo_comida">${element.nombre}</h3>
        <p class="descripcion_comida">${element.descripcion}</p>
      </div>
    `;
    eldom.appendChild(miniatura);
  });
}

function mostrarDatos(event) {
    let titulo = event.target.closest(".miniatura").querySelector(".titulo_comida").textContent;
    let cenaSeleccionada = cenas.find((cena) => cena.nombre === titulo); // 
  
    let divFlotante = document.createElement("div");
    divFlotante.classList.add("flotante");
  
    let ingredientesHTML = '';
    for (const ingrediente in cenaSeleccionada.ingredientes) {
      ingredientesHTML += `<li>${cenaSeleccionada.ingredientes[ingrediente]}</li>`;
    }
  
    let preparacionHTML = '';
    for (const paso in cenaSeleccionada.preparacion) {
      preparacionHTML += `<li>${cenaSeleccionada.preparacion[paso]}</li>`;
    }
  
    divFlotante.innerHTML = `
      <button class="cerrar">&times;</button>
      <h2 class="flot_titulo">${cenaSeleccionada.nombre}</h2>
      <div style="text-align: center;">
        <img class="flot_img" src="${cenaSeleccionada.img}" alt="${cenaSeleccionada.nombre}">
      </div>
      <h3 class="flot_titingred">Ingredientes:</h3>
      <ul class="ingred">${ingredientesHTML}</ul>
      <h3 class="flot_prep">Preparación:</h3>
      <ol class="prep">${preparacionHTML}</ol>
    `;
  
    let caja = document.querySelector("#cenas");
    caja.appendChild(divFlotante);
  
    let botonCerrar = divFlotante.querySelector(".cerrar");
    botonCerrar.addEventListener("click", () => {
      caja.removeChild(divFlotante);
    });
  }
  
vista();


