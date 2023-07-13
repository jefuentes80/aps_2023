/*Sección del footer*/
/*Pablo Alberto Chávez López*/

function llamar_footer() {
    
    let pie_pagina = document.querySelector("#footer");
    pie_pagina.innerHTML = `
    <section class="footer">
        <div class="pie_de_pagina">
            
            <div class="centro">
                <div class="div00">
                    <h1>Proyecto APS 2023</h1>
                    <h2>___________________________</h2>
                </div>
            </div>

            <div class="listas_Names">
                <div class="names1">
                    <ul>
                        <li><p>Byron Guerra</p></li>
                        <li><p>Pablo Chávez</p></li>
                        <li><p>Melissa Juárez</p></li>
                        <li><p>Axel Alvarez</p></li>
                    </ul>
                </div>
                <div class="names2">
                    <ul>
                        <li><p>Keily Telles</p></li>
                        <li><p>Claudia Pérez</p></li>
                        <li><p>Alejandra Zitá</p></li>
                        <li><p>David Santizo</p></li>
                        <li><p>Juan Talé</p></li>
                    </ul>
                </div>
                <img class="image" src="./js/components/footer_contact/img/Pic N°1.png" alt="">
            </div>
        </div>

        <div class="information">
            <h2>En qué consiste este proyecto?</h2>
            <p>Este proyecto está enfocado en poder proveer una herramienta para una mejor nutrición
        </div>
        
        <div class="copy">
            <h2>Copyright</h2>
            <h3>|</h3>
            <p>Since 2023, politic privacy</p>
        </div>

    </section>
    `;
}

llamar_footer();