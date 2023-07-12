function sabias_q (){

    let sabiass = document.querySelector(".box_sabias");
    let gatito = document.createElement("div")

    gatito.innerHTML= `
        <div class= "ssabias_q">
        <h1 class= "titulo_sabias">¿Sabias qué?</h1>
        <p class= "cuerpo">
        rgjrjgreiufffvfjvfbvhjifiuf
        </p>
        </div>
        
    `
    sabiass.appendChild(gatito);
    console.log(gatito)
}
