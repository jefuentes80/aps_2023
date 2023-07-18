export function buscador(){

    let cajota = document.querySelector("#cena")
    let businput = document.createElement("div")
    businput.classList.add("caja_buscador")
    businput.innerHTML=
    `
    <input class="buscador_cena" type="text" name="buscador" id="buscador" placeholder="Buscar...">
     `
     cajota.appendChild(businput); 


       document.addEventListener("keyup", e=>{

        if (e.target.matches("#buscador")){
      
            if (e.key ==="Escape")e.target.value = ""
      
            document.querySelectorAll(".item_cena").forEach(item =>{
      
                item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?item.classList.remove("fifi")
                  :item.classList.add("fifi")
            })
      
        }
        
      
      
      })
}


  
