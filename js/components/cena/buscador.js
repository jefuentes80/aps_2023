
export function buscador(){
 
  let lapag = document.querySelector(".box");

  let div = document.createElement("div")
  div.innerHTML= `
      <input type="text" name="buscador" class= "buscadorr" id="buscador" placeholder="Buscardor"> `;
  div.classList.add("search")
  lapag.appendChild(div);


  document.addEventListener("keyup", e=>{

      if (e.target.matches("#buscador")){
    
          if (e.key ==="Escape")e.target.value = ""
    
          document.querySelectorAll(".bt21").forEach(Element =>{
    
              Element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?Element.classList.remove("fifi")
                :Element.classList.add("fifi")
          })
    
      }
    
    
    })
 
}





  
