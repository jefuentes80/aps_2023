import { alimento } from './alimento_random.js';

let btn_random = document.querySelector(".random");

btn_random.innerHTML = `

    <div class="icono_random">
        <span class="material-symbols-outlined cativador_random">question_exchange</span>
    </div>
    

    <div class="cj_categoria">
        <div class="iconos_acciones_random">
        <span class="material-symbols-outlined regresar">arrow_back_ios</span>
            <span class="material-symbols-outlined close">close</span>
        </div>

        <div class="opciones_de_random">
            <h2>Qué comeremos hoy?</h2>
            <div class="btn_categoria desayuno">☕ Desayuno</div>
            <div class="btn_categoria refaccion">🥪 Refacción</div>
            <div class="btn_categoria cena">🍜 Cena</div>
        </div>
    </div>
    <div class="hoy_comeremos"></div>`;


function activar_random(){
    btn_random.classList.add("random_activo");
    document.querySelector(".icono_random").classList.add("ocultar");
    document.querySelector(".cj_categoria").classList.add("mostrar_categorias");

    // ocultar todo el dom
    document.querySelector(".todo").classList.add("ocultar");
    console.log("me active");

    document.querySelector(".hoy_comeremos").classList.add("ocultar");
    document.querySelector(".opciones_de_random").classList.remove("ocultar");

}

let cativador_random = document.querySelector(".cativador_random");
cativador_random.addEventListener("click", activar_random);

// Activar rando según categoría

let botones_categoria = document.querySelectorAll(".btn_categoria");

function generar_comida(){
    
    let cj_categoria = document.querySelector(".opciones_de_random");
    let hoy_comeremos = document.querySelector(".hoy_comeremos");
    cj_categoria.classList.add("ocultar");

    if (this.className == "btn_categoria desayuno"){
        hoy_comeremos.innerHTML = alimento("desayuno");
    } else if (this.className == "btn_categoria refaccion"){
        hoy_comeremos.innerHTML = alimento("refaccion");
    }else if (this.className == "btn_categoria cena") {
        hoy_comeremos.innerHTML = alimento("cena");
    }

}

botones_categoria.forEach((btn)=>{
    
    btn.addEventListener("click", generar_comida);

});

// cerrar ventana

let close = document.querySelector(".close");

function cerrar (){

    document.querySelector(".random").classList.remove("random_activo");
    document.querySelector(".cj_categoria").classList.remove("mostrar_categorias");
    document.querySelector(".icono_random").classList.remove("ocultar");
    
    // activar todo el contenido
    let todo = document.querySelector(".todo");
    todo.classList.remove("ocultar");
    todo.classList.add("mostrar_en_grid");
    todo.classList.remove("ocultar");
}

close.addEventListener("click", cerrar);

// función regresar

let regresar = document.querySelector(".regresar");

function funcion_regresar(){
    let cj_categoria = document.querySelector(".opciones_de_random");
    let hoy_comeremos = document.querySelector(".hoy_comeremos");
    hoy_comeremos.classList.add("ocultar");

    cj_categoria.classList.remove("ocultar");
}

regresar.addEventListener("click", funcion_regresar);