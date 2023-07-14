export function buscador(){

    let caajita = document.querySelector("#refaccion")
    let businput = document.createElement("div")
    businput.classList.add("caja_buscador")
    businput.innerHTML=
    `
    <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
     `
     caajita.appendChild(businput); 


       document.addEventListener("keyup", e=>{

        if (e.target.matches("#buscador")){
      
            if (e.key ==="Escape")e.target.value = ""
      
            document.querySelectorAll(".item").forEach(item =>{
      
                item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?item.classList.remove("filtro")
                  :item.classList.add("filtro")
            })
      
        }
        
      
      
      })
}


  
