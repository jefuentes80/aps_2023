// Componentes principal
//Claudia Marisol Pérez Cruz

async function actualizarGato2(apii){
    let hola2 = await fetch(apii); 
    let datoo = await hola2.json();

    let ddd = document.querySelector(".desayuno")
    
 
        let div = document.createElement("div")

        div.innerHTML= `
        <div class="refaccion">
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
                <div class="item"></div>
        </div>

        `
        ddd.appendChild(div);

 }

actualizarGato2(apiiUrl);
