const header = document.getElementById("header");
const homeSection = document.getElementById("home");
const desayunoSection = document.getElementById("desayuno");
const refaccionSection = document.getElementById("refaccion");
const cenaSection = document.getElementById("cena");
const noConsumirSection = document.getElementById("no-consumir");
const banner = document.querySelector(".banner");

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
  { icon: "https://cdn.icon-icons.com/icons2/3224/PNG/512/breakfast_toast_coffee_tea_meal_icon_196791.png", section: "desayuno" },
  { icon: "https://cdn.icon-icons.com/icons2/16/PNG/256/fruit_apple_food_1815.png", section: "refaccion" },
  { icon: "https://img.icons8.com/?size=512&id=0W25y0EGmKP4&format=png", section: "cena" },
  { icon: "https://img.icons8.com/?size=512&id=wqMCXXwVnkX2&format=png", section: "no-consumir" }
];

buttons.forEach((buttonData) => {
  const button = document.createElement("button");
  button.className = "menu-button";

  const icon = document.createElement("img");
  icon.src = buttonData.icon;
  icon.alt = buttonData.text;
  button.appendChild(icon);

  button.addEventListener("click", () => {
    hideSectionsAndBanner();
    showSection(buttonData.section);
  });

  menuButtonContainer.appendChild(button);
});

header.appendChild(titleContainer);
header.appendChild(menuButtonContainer);

function hideSectionsAndBanner() {
  homeSection.classList.add("ocultar");
  desayunoSection.classList.add("ocultar");
  refaccionSection.classList.add("ocultar");
  cenaSection.classList.add("ocultar");
  noConsumirSection.classList.add("ocultar");
  banner.classList.add("ocultar");
}

function showHome() {
  hideSectionsAndBanner();
  homeSection.classList.remove("ocultar");
  banner.classList.remove("ocultar");
}

function showDesayuno() {
  hideSectionsAndBanner();
  desayunoSection.classList.remove("ocultar");
  desayunoSection.scrollIntoView({ behavior: "smooth" });
}

function showRefaccion() {
  hideSectionsAndBanner();
  refaccionSection.classList.remove("ocultar");
  refaccionSection.scrollIntoView({ behavior: "smooth" });
}

function showCena() {
  hideSectionsAndBanner();
  cenaSection.classList.remove("ocultar");
  cenaSection.scrollIntoView({ behavior: "smooth" });
}

function showNoConsumir() {
  hideSectionsAndBanner();
  noConsumirSection.classList.remove("ocultar");
  noConsumirSection.scrollIntoView({ behavior: "smooth" });
}
function showSection(section) {
  if (section === "home") {
    showHome();
  } else if (section === "desayuno") {
    showDesayuno();
  } else if (section === "refaccion") {
    showRefaccion();
  } else if (section === "cena") {
    showCena();
  } else if (section === "no-consumir") {
    showNoConsumir();
  }
}

logo.addEventListener("click", () => {
  showHome();
});

homeSection.querySelectorAll(".js-seccion").forEach((section) => {
  section.addEventListener("click", () => {
    const sectionToShow = section.dataset.section;
    window.location.hash = sectionToShow;
  });
});

const buscadorInput = document.querySelector(".buscador");
buscadorInput.placeholder = " Buscar recetas...";
