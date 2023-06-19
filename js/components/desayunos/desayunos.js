// Componentes principal
import { sabias } from "./sabias_que.js";


function prueba(){
<<<<<<< HEAD
    let titulo = document.querySelector("#desayuno");

    let div = document.createElement("div")
    div.innerHTML= `
        <h1>Desayunos Keily & Melissa !!</h1> `;
    div.classList.add("titulo")
    titulo.appendChild(div);
=======
let caja = document.querySelector("#desayuno");

let div = document.createElement("div")
div.innerHTML= `
    <h1 class="hi">Desayunos</h1> `;
div.classList.add("caja")
caja.appendChild(div);
>>>>>>> 0a0a07ad342c645afe00fb869fc1c510f37d9d46
}

prueba();
sabias();

function vista(){
    let caja = document.querySelector("#desayunos");

    

    let div = document.createElement("div")
    div.innerHTML = `
    
    `;

}
