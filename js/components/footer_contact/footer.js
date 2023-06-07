/*Sección del footer*/
/*Pablo Alberto Chávez López*/

function llamar_footer() {
    
    let pie_pagina = document.querySelector("#footer");
    pie_pagina.innerHTML = `
    
        <div class="pie_de_pagina">
            <div class="Titulo">
                <h1>Autors: </h1>
            </div>
            <div class="autores">
                <h2> Esto es un trabajo de los alumnos de 5° Bachillerato en Computación</h2>
                <p>
            </div>
        </div>
    `;
}

llamar_footer();