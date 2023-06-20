/*Sección del footer*/
/*Pablo Alberto Chávez López*/

function llamar_footer() {
    
    let pie_pagina = document.querySelector("#footer");
    pie_pagina.innerHTML = `
    <div class="pie_de_pagina">
        <div class="names1">
            <ul>
                <li><p>Byron Guerra</p></li>
                <li><p>Pablo Chávez</p></li>
                <li><p>Melissa Juárez</p></li>
                <li><p>Axel Alvarez</p></li>
            </ul>
        </div>
        <div class="centro">
            <div class="div00">
                <h1>APS_2023</h1>
                <h2>≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡</h2>
                <img class="image" src="https://o.remove.bg/downloads/6f2373b1-542c-4cad-8bdb-6aa272fcaf50/imagen_2023-06-19_211710198-removebg-preview.png" alt="">
            </div>
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
    </div>

    <div class="copy">
        <h2>Copyright</h2>
        <h3>|</h3>
        <p>Since 2023, politic privacy</p>
    </div>
    `;
}

llamar_footer();