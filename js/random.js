let btn_random = document.querySelector(".random");

btn_random.innerHTML = `

    <div class="box_ico">
        <span class="material-symbols-outlined">question_exchange</span>
    </div>
    

    <div class="cj_categoria">
        <div class="close">
        <span class="material-symbols-outlined">
            close
        </span>
        </div>
        <span class="material-symbols-outlined regresar">
            arrow_back_ios
        </span>
        <h2>Qué comeremos hoy?</h2>
        <div class="btn_categoria desayuno">☕ Desayuno</div>
        <div class="btn_categoria refaccion">🥪 Refacción</div>
        <div class="btn_categoria almuerzo">🍗 Almuerzo</div>
        <div class="btn_categoria cena">🍜 Cena</div>
    </div>
    <div class="hoy_comeremos"></div>
`;

http://127.0.0.1:5504/index.html


function activar_random(){
    btn_random.classList.add("random_activo");
    document.querySelector(".box_ico").classList.add("ocultar_icono");
    document.querySelector(".cj_categoria").classList.add("mostrar_categorias");


    // ocultar todo el dom
    let main = document.querySelector(".todo");
    main.classList.add("ocultar_icono");
    

}

btn_random.addEventListener("click", activar_random);

// Activar rando según categoría

let botones_categoria = document.querySelectorAll(".btn_categoria");

function generar_comida(){
    
    let cj_categoria = document.querySelector(".cj_categoria");
    let hoy_comeremos = document.querySelector(".hoy_comeremos");
    cj_categoria.classList.add("ocultar_icono");

    console.log(this.className);

    if (this.className == "btn_categoria desayuno"){
        hoy_comeremos.innerHTML= "soy desayuno";
    } else if (this.className == "btn_categoria refaccion"){
        hoy_comeremos.innerHTML = "soy refacción";
    }else if (this.className == "btn_categoria almuerzo") {
        hoy_comeremos.innerHTML = "soy almuerzo";
    }else if (this.className == "btn_categoria cena") {
        hoy_comeremos.innerHTML = "soy cena";
    }

}

botones_categoria.forEach((btn)=>{
    
    btn.addEventListener("click", generar_comida);

});

// cerrar ventana

let close = document.querySelector(".close");

function saludar (){
    btn_random.classList.remove("random_activo");
    btn_random.classList.add("ocultar_icono");
    let main = document.querySelector(".todo");
    main.classList.remove("ocultar_icono");
    main.classList.add("mostrar_en_grid");

    console.log("ejecutado");
}


close.addEventListener("click", saludar);