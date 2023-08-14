/* Componente de que no comer */ /*David Enrique Santizo Zamora*/
import { evitar_no_comer } from "./data_no_comer.js";

function evitarcomer() {
    let comer_al_dom = document.querySelector("#no-consumir");
    let variable = document.createElement("div");
    variable.innerHTML = `
    <div class="caja">
    <div class="circulo">
    <img class="elip" src="./js/components/que_no_comer/Ellipse 1 (1).png" alt="">
    <h1 class="titulo1">¡¡Evita estas comidas!!</h1>
    </div>
    </div>`
    ;
    comer_al_dom.appendChild(variable);

    let cajabuscar = document.querySelector("#no-consumir")
    let businput = document.createElement("div")
    businput.classList.add("caja_buscador")
    businput.innerHTML=`
  <input class="no-consumir" type="text" name="buscador" id="buscador" placeholder="Buscar...">
  `
  cajabuscar.appendChild(businput);
  
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
  
  document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".cuadro").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })

