// Obtener una referencia al elemento de encabezado en el DOM
const header = document.getElementById("header");

// Obtener referencias a las secciones en el DOM
const homeSection = document.getElementById("home");
const desayunoSection = document.getElementById("desayuno");
const refaccionSection = document.getElementById("refaccion");
const cenaSection = document.getElementById("cena");
const noConsumirSection = document.getElementById("no-consumir");

// Obtener referencia al banner
const banner = document.querySelector(".banner");

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
  { icon: "https://cdn.icon-icons.com/icons2/3224/PNG/512/breakfast_toast_coffee_tea_meal_icon_196791.png" },
  { icon: "https://cdn.icon-icons.com/icons2/16/PNG/256/fruit_apple_food_1815.png" },
  { icon: "https://img.icons8.com/?size=512&id=0W25y0EGmKP4&format=png" },
  { icon: "https://img.icons8.com/?size=512&id=wqMCXXwVnkX2&format=png" }
];

buttons.forEach((buttonData) => {
  const button = document.createElement("button");
  button.className = "menu-button";

  const icon = document.createElement("img");
  icon.src = buttonData.icon;
  icon.alt = buttonData.text;
  button.appendChild(icon);

  menuButtonContainer.appendChild(button);
});

header.appendChild(titleContainer);
header.appendChild(menuButtonContainer);

// Event listener para el logo
logo.addEventListener("click", () => {
  hideSections();
  showHome();
});

// Event listener para la sección de Desayuno
menuButtonContainer.children[0].addEventListener("click", () => {
  hideSections();
  showDesayuno();
});

// Event listener para la sección de Refacción
menuButtonContainer.children[1].addEventListener("click", () => {
  hideSections();
  showRefaccion();
});

// Event listener para la sección de Cena
menuButtonContainer.children[2].addEventListener("click", () => {
  hideSections();
  showCena();
});

// Event listener para la sección de Qué no comer
menuButtonContainer.children[3].addEventListener("click", () => {
  hideSections();
  showNoConsumir();
});

// Función para ocultar todas las secciones
function hideSections() {
  homeSection.classList.add("ocultar");
  desayunoSection.classList.add("ocultar");
  refaccionSection.classList.add("ocultar");
  cenaSection.classList.add("ocultar");
  noConsumirSection.classList.add("ocultar");
  banner.classList.add("ocultar");
}

// Función para mostrar la sección de Inicio
function showHome() {
  homeSection.classList.remove("ocultar");
  banner.classList.remove("ocultar");
}

// Función para mostrar la sección de Desayuno
function showDesayuno() {
  desayunoSection.classList.remove("ocultar");
}

// Función para mostrar la sección de Refacción
function showRefaccion() {
  refaccionSection.classList.remove("ocultar");
}

// Función para mostrar la sección de Cena
function showCena() {
  cenaSection.classList.remove("ocultar");
}

// Función para mostrar la sección de Qué no comer
function showNoConsumir() {
  noConsumirSection.classList.remove("ocultar");
}