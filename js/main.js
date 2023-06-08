import { home_items } from './main_data.js';

let home = document.querySelector("#home");

home_items.forEach((elemento) => {
    let item = document.createElement("div");

    item.classList.add("item-home");
    item.classList.add(elemento.nombre);
    item.innerHTML = `
    <div class="box-img">
        <img src="${elemento.img}">
    </div>
    <div class="contentenido">
        <h2>Desayunos</h2>
        <p>
            Texto de muestra del contenido
        </p>
    </div>
    `;

    home.appendChild(item);

});
