// Componentes principal
import { sabias } from "./sabias_que.js";


function prueba(){
 
    let caja = document.querySelector("#desayuno");

    let div = document.createElement("div")
    div.innerHTML= `
        <h1 class="hi">Desayunos</h1> `;
    div.classList.add("caja")
    caja.appendChild(div);

}



/*function vista(){
    let caja = document.querySelector("#desayunos");



    let div = document.createElement("div")
    div.innerHTML = `
    
    `;

}*/

prueba();
sabias();