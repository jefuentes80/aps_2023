import { home_items } from './main_data.js';

// SECCIÓNES DE LA APLICACIÓN
let home = document.querySelector("#home");
let desayuno = document.querySelector("#desayuno");
let refaccion = document.querySelector("#refaccion");
let cena = document.querySelector("#cena");
let no_consumir = document.querySelector("#no-consumir");
let banner = document.querySelector("#banner")
let titulo_app = document.querySelector(".titulo-app");

function iniciar_home() {
    home_items.forEach((elemento) => {
        let item = document.createElement("div");

        item.classList.add("item-home");
        item.classList.add(elemento.nombre);
        item.innerHTML = `
        <div class="box-img">
            <img src="${elemento.img}">
        </div>
        <div class="contentenido">
            <h2>${elemento.nombre}</h2>
            <p>
                ${elemento.descripcion}
            </p>
        </div>
        `;
        home.appendChild(item);

    });
    
}
iniciar_home();

// PROGRAMACIÓN DE ACTIVACIÓN
function mostrar_seccion() {

    // ÍTEMS DEL HOME
    let Home = document.querySelector("#home");
    let lista_secciones = document.querySelectorAll(".item-home");


    function activar_seccion() {
        Home.removeAttribute("id");
        Home.classList.add("ocultar");

        if (this.className == "item-home Desayuno") {
            desayuno.classList.remove("ocultar");
            banner.classList.add("titulo-app_ocultar");
        } else if (this.className == "item-home Refaccion") {
            refaccion.classList.remove("ocultar");
            banner.classList.add("titulo-app_ocultar");
        } else if (this.className == "item-home Cena") {
            cena.classList.remove("ocultar");
            banner.classList.add("titulo-app_ocultar");
        } else if (this.className == "item-home No-consumir") {
            no_consumir.classList.remove("ocultar");
            banner.classList.add("titulo-app_ocultar");
        }
    }

    lista_secciones.forEach((seccion) => {
        seccion.addEventListener("click", activar_seccion);
    });

}

function secciones_de_la_aplicacion() {
    desayuno.classList.add("ocultar");
    refaccion.classList.add("ocultar")
    cena.classList.add("ocultar")
    no_consumir.classList.add("ocultar")

    mostrar_seccion();
}

secciones_de_la_aplicacion();
