import { recetas } from "./prueba.js";

function ola(){

    let cajita = document.querySelector(".recetas")
    
    recetas.forEach(element => {

        let gio = document.createElement("div")
        gio.classList.add("item")
        gio.innerHTML= `
        <img src= "${element["img"]}" class="imagenes_re">
            <p class="nombres">${element["nombre"]} </p>
            <p class="descripcion">${element["descripcion"]} </p>

          
        `
        cajita.appendChild(gio)
    });
}
ola();



/*******************BUSCADOR */


























/*import { recetas } from "./prueba.js";

function ola(){

    let cajita = document.querySelector(".recetas")
    
    recetas.forEach(element => {

        let gio = document.createElement("div")
        gio.classList.add("item")
        gio.innerHTML= `
        <img src= "${element["img"]}" class="imagenes_re">
            <p class="nombres">${element["nombre"]} </p>
            <p class="descripcion">${element["descripcion"]} </p>

          
        `
        cajita.appendChild(gio)
    });
}
ola();*/






















/*
// Obtén la referencia al contenedor donde se mostrarán las recetas
var recetasContainer = document.getElementById("recetas");

// Recorre las recetas y genera el HTML para cada una
for (var i = 0; i < recetas.length; i++) {
  var receta = recetas[i];

  // Crea los elementos HTML para mostrar la receta
  var recetaDiv = document.createElement("div");
  var nombreHeader = document.createElement("h2");
  var descripcionParagraph = document.createElement("p");
  var imagen = document.createElement("img");
  var ingredientesList = document.createElement("ul");
  var preparacionList = document.createElement("ol");

  // Asigna los valores de la receta a los elementos HTML
  nombreHeader.textContent = receta.nombre;
  descripcionParagraph.textContent = receta.descripcion;
  imagen.src = receta.img;

  // Agrega los ingredientes a la lista de ingredientes
  for (var j = 1; j <= 8; j++) {
  var ingredienteKey = "ingrediente" + j;
    var ingrediente = receta.ingredientes[ingredienteKey];
    if (ingrediente) {
      var ingredienteItem = document.createElement("li");
      ingredienteItem.textContent = ingrediente;
      ingredientesList.appendChild(ingredienteItem);
    }
  }

  // Agrega los pasos de preparación a la lista de preparación
  for (var k = 1; k <= 4; k++) {
    var pasoKey = "paso" + k;
    var paso = receta.preparacion[pasoKey];
    if (paso) {
      var pasoItem = document.createElement("li");
      pasoItem.textContent = paso;
      preparacionList.appendChild(pasoItem);
    }
  }

  // Agrega los elementos HTML de la receta al contenedor
  recetaDiv.appendChild(nombreHeader);
  recetaDiv.appendChild(descripcionParagraph);
  recetaDiv.appendChild(imagen);
  recetaDiv.appendChild(document.createElement("h3")).textContent = "Ingredientes:";
  recetaDiv.appendChild(ingredientesList);
  recetaDiv.appendChild(document.createElement("h3")).textContent = "Preparación:";
  recetaDiv.appendChild(preparacionList);

  recetasContainer.appendChild(recetaDiv);
}*/