/* libría de alimentos */
import { cena } from "./components/cena/data_cena.js";
import { desayuno } from "./components/desayunos/data_sesayunos.js";
import { recetas } from "./components/refaccion/data_refaccion.js";


function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alimento(menu){

    document.querySelector(".hoy_comeremos").classList.remove("ocultar");

    if(menu == "desayuno"){
        const numeroAleatorio = generarEnteroAleatorio(1, desayuno.length);
        console.log(numeroAleatorio);
        return `
        <h2>${desayuno[numeroAleatorio].nombre}</h2>
        <img src="${desayuno[numeroAleatorio].img}" alt="">
        <p>${desayuno[numeroAleatorio].descripcion}</p>
        <p>${desayuno[numeroAleatorio].tiempo}</p>
    `;
    }else if(menu == "refaccion"){
        const numeroAleatorio = generarEnteroAleatorio(1, recetas.length);
        return `
        <h2>${recetas[numeroAleatorio].nombre}</h2>
        <img src="${recetas[numeroAleatorio].img}" alt="">
        <p>${recetas[numeroAleatorio].descripcion}</p>
        <p>${recetas[numeroAleatorio].tiempo}</p>
    `;
    }else if (menu == "cena") {
        const numeroAleatorio = generarEnteroAleatorio(1, cena.length);
        return `
        <h2>${cena[numeroAleatorio].nombre}</h2>
        <img src="${cena[numeroAleatorio].img}" alt="">
        <p>${cena[numeroAleatorio].descripcion}</p>
        <p>${cena[numeroAleatorio].tiempo}</p>
    `;
    }
    
}

export { alimento };