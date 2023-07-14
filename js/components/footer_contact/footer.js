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
            <div class="item1">
                <h2>En qué consiste este proyecto?</h2>
                <div class="element">
                    <p>
                        Este proyecto es un recetario de distintos platillos saludables y bastante
                        fáciles de preparar ya que son platillos que no requieren de una gran preparación, además
                        contamos con diferentes platillos para cada tiempo de comida en el día a día.
                    </p>
                </div>
            </div>

            <div class="item2">
                <h2>¿Qué tecnologías se utilizaron en la creación de este proyecto?</h2>
                <div class="element">
                    <p>
                        Para este pryecto se trabajo con las tecnologías de HTML, CSS y Javascript.
                    </p>
                </div>
            </div>

            <div class="item3">
                <h2>¿Cuál es el propósito de este proyecto?</h2>
                <div class="element">
                    <p>
                        Este proyecto está enfocado dar a conocer platillos nutritivos y saludables
                        para todos aquellos consumidores que desean comer alimentos más nutritivos en cada
                        tiempo de comida y de manera rápida.
                    </p>
                </div>
            </div>

            <div class="item4">
                <div class="logos">
                    <a href="http://instagram.com/school_scl/"><img src="https://s.widget-club.com/samples/0GbysnQNNCfFuz9JwUk4i6kdJgx1/DRMH2OSVT9ojTa2y3T2P/25603244-47FD-4D1A-A1B4-97B72696ED7B.jpg?q=70"></a>
                    <a href="https://wa.me/50232150777"><img src="https://s.widget-club.com/samples/tFag1IrqmkbYT4YcoN26yXx6h472/4OCvVtglu58tak2mn5LX/5AD9E895-7A78-48AB-9853-AD07C57F7EF4.jpg?q=70"></a>
                    <a href="https://www.facebook.com/colegioSCL/"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWs5aZP5X-QJbxayc68LJwUn3xPxOFYH-PI1E6fu9BJbM5C-Ad"></a>
                </div>
            </div>
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