// Componente sabias que
//KEILY BELÉN TELLES PÉREZ

export function  sabias(){


  let pag = document.querySelector(".caja");
  let helou = document.createElement("div")
  helou.innerHTML= `
  <div class="caja_sabias">
  <h1 class="sabias_titu">¿Sabías qué?</h1>
  <p class="Texto">  Esto se debe a que es la comida previa al sueño y es
   muy importante que sea equilibrada para un buen descanso.</p>
  </div>
  `;
  pag.appendChild(helou);
  console.log(helou)
  }
  






