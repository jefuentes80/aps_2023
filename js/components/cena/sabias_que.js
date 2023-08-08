export function  sabias(){


  let plaga = document.querySelector(".box");
  let oso = document.createElement("div")
  oso.innerHTML= `
  <div class="caja_sabias">
  <h1 class="sabias_titu">¿Sabías qué?</h1>
  <p class="Texto"> Esto se debe a que es la comida
   previa al sueño y es muy importante que sea equilibrada para un buen descanso.</p>
  </div>
  `;
  plaga.appendChild(oso);
  console.log(oso)
  }
  ///
  