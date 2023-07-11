/* Componente de que no comer */ /*David Enrique Santizo Zamora*/
import { evitar_no_comer } from "./data_no_comer.js";

function evitarcomer() {
    let comer_al_dom = document.querySelector("#no-consumir");
    let variable = document.createElement("div");
    variable.innerHTML = `
    <div class="circulo">
    <h1 class="titulo1">Alimentos que debes evitar consumir</h1>
    </div>`;
    comer_al_dom.appendChild(variable);
  
    evitar_no_comer.forEach(element => {
      let comida = document.createElement("div");
      comida.classList.add("cuadro");
      comida.innerHTML = `
        <img class="img" src="${element.img}"> 
        <h1 class="titulo">${element.titulo}</h1>
        <p class="descrip">${element.dsescripcion}</p>
      `;
      comer_al_dom.appendChild(comida);
    });
  }
  
  evitarcomer();
  