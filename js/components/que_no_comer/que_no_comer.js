/* Componente de que no comer */ /*David Enrique Santizo Zamora*/
//import { evitar_no_comer } from "./data_no_comer.js";

function no_comer(){

   /* let item = `
        <div> <img src="${evitar_no_comer[0].img} " alt=""> </div>
        <h1> ${evitar_no_comer[0].titulo} </h1>
        <p> ${evitar_no_comer[0].dsescripcion} </p>
    `;*/
    let comer_al_dom = document.querySelector("#no-consumir")

    let div = document.createElement("div")
    //div.innerHTML = item;
    div.innerHTML=`
    <h1>David que no comer</h1>
    `;
    div.classList.add('comer')
    comer_al_dom.appendChild(div);
}
no_comer();

