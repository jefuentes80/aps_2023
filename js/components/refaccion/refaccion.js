// Componentes principal
//Claudia Marisol Pérez Cruz


import { refacciones } from "./data_refaccion.js";

function ola(){

    let cajita = document.querySelector("#refaccion")
    
    refacciones.forEach(element => {

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


/*function actu(){

    let prueba = document.querySelector("#refaccion");*/
 
    
 
     /*   let div = document.querySelector("#refaccion")
        let caja = document.createElement("section");



        caja.innerHTML= `
        <div class="refaccion">
                <div class="item">
                <h1>refcciones juan Pablo  marisol</h1>
                </div>    
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>

                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
        </div>`
        div.appendChild(caja);

 }*/





