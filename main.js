// DARK MODE

const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme) {

  if (theme === "dark") {

    document.documentElement.setAttribute("data-theme", "dark");

    themeBtn.innerText = "Modo Claro ☀️";

  } else {

    document.documentElement.removeAttribute("data-theme");

    themeBtn.innerText = "Modo Escuro 🌙";

  }

}

const savedTheme =
  localStorage.getItem("agrinho-theme") || "light";

applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  localStorage.setItem("agrinho-theme", newTheme);

  applyTheme(newTheme);

});

// NAVEGAÇÃO

const navLinks =
  document.querySelectorAll("[data-page]");

const sections =
  document.querySelectorAll(".page-section");

function showSection(sectionId) {

  sections.forEach((section) => {

    section.classList.remove("active-section");

  });

  navLinks.forEach((link) => {

    link.classList.remove("active-link");

  });

  const target =
    document.getElementById(sectionId);

  target.classList.add("active-section");

  document
    .querySelector(`[data-page="${sectionId}"]`)
    .classList.add("active-link");

}

navLinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const page = link.dataset.page;

    showSection(page);

  });

});

// HERO BUTTON

const heroBtn =
  document.querySelector("[data-page-btn]");

heroBtn.addEventListener("click", () => {

  const page =
    heroBtn.dataset.pageBtn;

  showSection(page);

});

// SIMULADOR

const hectaresInput =
  document.getElementById("hectares");

const resultado =
  document.getElementById("resultado");

function calcularEconomia() {

  const hectares =
    Number(hectaresInput.value);

  const economiaPorHectare = 45000;

  const total =
    hectares * economiaPorHectare;

  resultado.innerText =
    total.toLocaleString("pt-BR");

}

hectaresInput.addEventListener(
  "input",
  calcularEconomia
);

calcularEconomia();

console.log("🌱 Agrinho 2026 iniciado!");