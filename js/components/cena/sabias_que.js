// Componente sabias que
/*Axel Daniel Alvarez López*/
/*Alejandra Zita*/
// Crea un elemento div para encapsular tu aplicación

import {cenas} from "./data_cena.js";

// Función para mostrar una receta de cena específica
function mostrarReceta(index) {
  const cena = cenas[index];

  // Código JavaScript para generar los elementos HTML de la receta
  // y agregarlos al elemento con el ID "receta"
  // ...

  // Ejemplo de código para agregar un título h1 con el nombre de la receta
  const nombreElement = document.createElement("h1");
  nombreElement.textContent = cena.nombre;
  document.getElementById("receta").appendChild(nombreElement);
  
  

  }
  mostrarReceta(0);
  






