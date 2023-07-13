import { recetas } from "./data_refaccion.js";

function ola(){
    
    let cajita = document.querySelector("#refaccion")

    let texto = document.querySelector()
    texto.innerHTML=
    `
    <h1 class="titulo">Recetas de cocina</h1>
    `
    cajita.appendChild(texto)
    
    recetas.forEach(element => {

        let gio = document.createElement("div")
        gio.classList.add("item")
        gio.innerHTML= `
        
        <img src= "${element["img"]}" class="imagenes_re">
            <p class="nombres">${element["nombre"]} </p>
            <p class="descripcion">${element["descripcion"]} </p>

          
        `
        cajita.appendChild(gio)
    });
}
ola();


