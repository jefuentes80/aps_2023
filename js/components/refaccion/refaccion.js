import { recetas } from "./prueba.js";

function ola(){

    let cajita = document.querySelector(".recetas")
    
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


