import { sabias } from "./sabias_que.js";
import { cena } from "./data_cena.js";
import { buscador } from "./buscador.js";


function prueba() {
  let box = document.querySelector("#cena");

  let div = document.createElement("div");
  div.innerHTML = `
    <img class="koya" src="https://thesensorylab.es/wp-content/uploads/2021/05/semi-circulo-naranja.png" alt="">
    <h1 class="sol">Cenas</h1>`;
  div.classList.add("box");
  box.appendChild(div);
}

prueba();
buscador(); 
sabias();

function vista() {
  let eldom = document.querySelector(".box");
  eldom.addEventListener("click", mostrarDatos);

  cena.forEach((element) => {
    let bt21 = document.createElement("div");
    bt21.classList.add("bt21");
    bt21.innerHTML = `
      <img src="${element.img}">
      <div class="solotexto">
        <h3 class="titu_comida">${element.nombre}</h3>
        <p class="descripcion_comida">${element.descripcion}</p>
      </div>
    `;
    eldom.appendChild(bt21);
  });
}

function mostrarDatos(event) {
    let titulo = event.target.closest(".bt21").querySelector(".titu_comida").textContent;
    let cenaSeleccionado = cena.find((des) => des.nombre === titulo);
  
    let divFlores = document.createElement("div");
    divFlores.classList.add("flores");
  
    let ingredientesHTML = '';
    for (const ingrediente in cenaSeleccionado.ingredientes) {
      ingredientesHTML += `<li>${cenaSeleccionado.ingredientes[ingrediente]}</li>`;
    }
  
    let preparacionHTML = '';
    for (const paso in cenaSeleccionado.preparacion) {
      preparacionHTML += `<li>${cenaSeleccionado.preparacion[paso]}</li>`;
    }
  
    divFlores.innerHTML = `
      <button class="cerrar">&times;</button>
      <h2 class="flor_titulo">${cenaSeleccionado.nombre}</h2>
      <div style="text-align: center;">
      <img class="flor_img" src="${cenaSeleccionado.img}" alt="${cenaSeleccionado.nombre}">
      </div>
      <!-- <p>${cenaSeleccionado.descripcion}</p> -->
      <h3 class="flor_titingred">Ingredientes:</h3>
      <ul class="fonts">${ingredientesHTML}</ul>
      <h3 class="flor_prep">Preparación:</h3>
      <ol class="prep">${preparacionHTML}</ol>
    `;
  
    let box = document.querySelector("#cena");
    box.appendChild(divFlores);
  
    let botonCerrar = divFlores.querySelector(".cerrar");
    botonCerrar.addEventListener("click", () => {
      box.removeChild(divFlores);
    });
  }
  
vista();

