// Componentes principal
import { sabias } from "./sabias_que.js";
import { desayuno } from "./data_sesayunos.js";


function prueba(){
 
    let caja = document.querySelector("#desayuno");

    let div = document.createElement("div")
    div.innerHTML= `
        <h1 class="hi">Desayunos</h1> `;
    div.classList.add("caja")
    caja.appendChild(div);

}

prueba();
sabias();

function vista(){

    let eldom = document.querySelector(".caja");

    //console.log(desayuno[0]["nombre"])
   
    desayuno.forEach(element =>{

        let nose = document.createElement("div")
        nose.classList.add("miniatura")

        //<img src="${element["img"]}">
        nose.innerHTML=`

            <img src="${element["img"]}">
            <div class="solotexto">
                <h3>${element["nombre"]}</h3>
                <p>${element["descripcion"]}</p>
            </div>  `;

        eldom.appendChild(nose)
    })
}

vista();
