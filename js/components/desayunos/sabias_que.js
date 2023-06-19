// Componente sabias que
//KEILY BELÉN TELLES PÉREZ

export function  sabias(){
    let pag = document.querySelector(".caja");
    
    let helou = document.createElement("div")
    helou.innerHTML= `
    <div class="caja_sabias">
    <h1 class="sabias_titu">¿Sabías qué?</h1>
    <p class="Texto"> El desayuno es considerado la comida más importante del día debido
     a que los alimentos que se ingieren son los primeros después de un largo periodo de ayuno derivado de
    las horas en las que se está dormido; el desayuno además precede las horas del día en las que se lleva
      mayor actividad y por lo tanto, mayor gasto de energía. </p>
    </div>
    `;
    pag.appendChild(helou);
    console.log(helou)
    }
    
