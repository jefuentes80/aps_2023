export function buscador(){
    let lapag = document.querySelector(".caja");

    let div = document.createElement("div");
    div.innerHTML = `
        <input type="text" name="buscador" class="buscadorr" id="buscador" placeholder="Buscar..."> `;
    div.classList.add("search");
    lapag.appendChild(div);

    let cajaHeight = 235; 
    document.addEventListener("keyup", e => {
        if (e.target.matches("#buscador")) {
            if (e.key === "Escape") e.target.value = "";

            let miniaturas = document.querySelectorAll(".miniatura");

            miniaturas.forEach(Element => {
                if (Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    Element.classList.remove("filtro");
                } else {
                    Element.classList.add("filtro");
                }
            });

            let caja = document.querySelector(".caja");
            caja.style.height = e.target.value ? `${cajaHeight}rem` : ""; 
        }
    });
}




