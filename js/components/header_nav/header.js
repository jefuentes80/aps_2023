// Obtener una referencia al elemento de encabezado en el DOM
const header = document.getElementById("header");

// Crear elementos para el encabezado
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";

const logo = document.createElement("img");
logo.className = "logo";
logo.src = "https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png";
logo.alt = "Logo";

const title = document.createElement("h1");
title.className = "title";
title.textContent = "SCLFOOD";

titleContainer.appendChild(logo);
titleContainer.appendChild(title);

const menuButtonContainer = document.createElement("div");
menuButtonContainer.className = "menu-button-container";

const buttons = [
  { icon: "https://cdn.icon-icons.com/icons2/3224/PNG/512/breakfast_toast_coffee_tea_meal_icon_196791.png", },
  { icon: "https://cdn.icon-icons.com/icons2/16/PNG/256/fruit_apple_food_1815.png",  },
  { icon: "https://img.icons8.com/?size=512&id=0W25y0EGmKP4&format=png", },
  { icon: "https://img.icons8.com/?size=512&id=wqMCXXwVnkX2&format=png",  }
];

buttons.forEach((buttonData) => {
  const button = document.createElement("button");
  button.className = "menu-button";

  const icon = document.createElement("img");
  icon.src = buttonData.icon;
  icon.alt = buttonData.text;
  button.appendChild(icon);

  const buttonText = document.createElement("span");
  buttonText.textContent = buttonData.text;
  button.appendChild(buttonText);

  menuButtonContainer.appendChild(button);
});

header.appendChild(titleContainer);
header.appendChild(menuButtonContainer);

const searchContainer = document.createElement("div");
searchContainer.className = "search-container";



const searchInput = document.createElement("input");
searchInput.className = "search-input";
searchInput.type = "text";
searchInput.placeholder = "Buscar recetas";

searchContainer.appendChild(searchIcon);
searchContainer.appendChild(searchInput);

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("show");
});

header.appendChild(searchContainer);

// Insertar el contenedor del buscador entre los íconos de Home y Desayunos
const homeButton = menuButtonContainer.querySelector('button.menu-button:nth-child(1)');
const desayunosButton = menuButtonContainer.querySelector('button.menu-button:nth-child(3)');
menuButtonContainer.insertBefore(searchContainer, desayunosButton);

// Adjuntar el encabezado al documento
document.body.insertBefore(header, document.body.firstChild);