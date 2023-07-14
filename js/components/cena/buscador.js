export function buscador(){
 
    let lapag = document.querySelector(".caja");

    let div = document.createElement("div")
    div.innerHTML= `
        <input type="text" name="buscador" class= "buscadorr" id="buscador" placeholder="Buscar..."> `;
    div.classList.add("search")
    lapag.appendChild(div);


    document.addEventListener("keyup", e=>{

        if (e.target.matches("#buscador")){
      
            if (e.key ==="Escape")e.target.value = ""
      
            document.querySelectorAll(".miniatura").forEach(Element =>{
      
                Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?Element.classList.remove("filtro")
                  :Element.classList.add("filtro")
            })
      
        }
      
      
      })
   
}
