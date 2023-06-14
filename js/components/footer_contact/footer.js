/*Sección del footer*/
/*Pablo Alberto Chávez López*/

function llamar_footer() {
    
    let pie_pagina = document.querySelector("#footer");
    pie_pagina.innerHTML = `
    <div class="pie_de_pagina">
        <div class="Titulo">
            <h1>Autores: </h1>
        </div>
        <div class="autores">
            <ul>
                <li><p>Byron Geovanni Guerra Hérnandez</p></li>
                <li><p>Keily Belén Telles Pérez</p></li>
                <li><p>Pablo Alberto Chávez López</p></li>
                <li><p>Melissa Noemi Juárez Colindres</p></li>
                <li><p>Juan Pablo Talé López</p></li>
                <li><p>Claudia Marisol Pérez Cruz</p></li>
                <li><p>Axel Daniel Alvarez López</p></li>
                <li><p>Alejandra Mercedes Zitá Juárez</p></li>
                <li><p>David Enrique Santizo Zamora</p></li>
            </ul>
        </div>
    </div>
    <div class="copy">
        <h2>Copyright</h2>
        <h3>|</h3>
        <p>Since 2023, politic privacy</p>
    </div>
    `;
}

llamar_footer();