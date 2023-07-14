import { sabias } from "./sabias_que.js";
import { desayuno } from "./data_sesayunos.js";

function prueba() {
  let caja = document.querySelector("#desayuno");

  let div = document.createElement("div");
  div.innerHTML = `
    <img class="elip" src="./js/components/desayunos/imagenes/Ellipse 1.png" alt="">
    <h1 class="hi">Desayunos</h1>`;
  div.classList.add("caja");
  caja.appendChild(div);
}

prueba();
sabias();

function vista() {
  let eldom = document.querySelector(".caja");
  eldom.addEventListener("click", mostrarDatos);

  desayuno.forEach((element) => {
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
    let desayunoSeleccionado = desayuno.find((des) => des.nombre === titulo);
  
    let divFlotante = document.createElement("div");
    divFlotante.classList.add("flotante");
  
    let ingredientesHTML = '';
    for (const ingrediente in desayunoSeleccionado.ingredientes) {
      ingredientesHTML += `<li>${desayunoSeleccionado.ingredientes[ingrediente]}</li>`;
    }
  
    let preparacionHTML = '';
    for (const paso in desayunoSeleccionado.preparacion) {
      preparacionHTML += `<li>${desayunoSeleccionado.preparacion[paso]}</li>`;
    }
  
    divFlotante.innerHTML = `
      <button class="cerrar">&times;</button>
      <h2 class="flot_titulo">${desayunoSeleccionado.nombre}</h2>
      <div style="text-align: center;">
      <img class="flot_img" src="${desayunoSeleccionado.img}" alt="${desayunoSeleccionado.nombre}">
      </div>
      <!-- <p>${desayunoSeleccionado.descripcion}</p> -->
      <h3 class="flot_titingred">Ingredientes:</h3>
      <ul class="ingred">${ingredientesHTML}</ul>
      <h3 class="flot_prep">Preparación:</h3>
      <ol class="prep">${preparacionHTML}</ol>
    `;
  
    let caja = document.querySelector("#desayuno");
    caja.appendChild(divFlotante);
  
    let botonCerrar = divFlotante.querySelector(".cerrar");
    botonCerrar.addEventListener("click", () => {
      caja.removeChild(divFlotante);
    });
  }
  
vista();


