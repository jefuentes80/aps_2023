// Componentes principal
import { ola } from "./sabias_que.js";


function prueba(){
let titulo = document.querySelector("#desayuno");

let div = document.createElement("div")
div.innerHTML= `<h1>DESAYUNOS!!</h1>`;
div.classList.add("titulo")
titulo.appendChild(div);
}

prueba();
ola();


