// ================================
// AGRINHO 2026 - MAIN.JS
// Plataforma Agro-Tech Educacional
// ================================

// ================================
// DARK MODE PERSISTENTE
// ================================

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

// Carregar tema salvo
const savedTheme = localStorage.getItem("agrinho-theme") || "light";
applyTheme(savedTheme);

// Alternar tema
themeBtn.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("agrinho-theme", newTheme);

    applyTheme(newTheme);
});

// ================================
// SIMULADOR AGRO-TECH
// ================================

const hectaresInput = document.getElementById("hectares");
const resultado = document.getElementById("resultado");

function calcularEconomia() {
    const hectares = Number(hectaresInput.value);

    const economiaPorHectare = 45000;

    const total = hectares * economiaPorHectare;

    resultado.innerText = total.toLocaleString("pt-BR");
}

// Atualização em tempo real
hectaresInput.addEventListener("input", calcularEconomia);

// Executa ao carregar
calcularEconomia();

// ================================
// ANIMAÇÃO DE SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".card-glass, .simulator-box, .hero-text"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-reveal");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

// ================================
// NAVBAR INTELIGENTE
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// ================================
// SCROLL SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// ================================
// CONTADOR ANIMADO
// ================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;

        if (start < target) {
            element.innerText = Math.floor(start).toLocaleString("pt-BR");
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target.toLocaleString("pt-BR");
        }
    }

    updateCounter();
}

// Ativar contador ao aparecer
const resultObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter(resultado, 450000);
            resultObserver.unobserve(entry.target);
        }
    });
});

resultObserver.observe(resultado);

// ================================
// EFEITO PARALLAX HERO
// ================================

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");

    const scrollY = window.scrollY;

    hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
});

// ================================
// PRELOADER OPCIONAL
// ================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

console.log("🌱 Agrinho 2026 carregado com sucesso!");