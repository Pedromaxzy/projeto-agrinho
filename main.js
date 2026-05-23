/* =========================================================
   AGRINHO 2026 - MAIN.JS
   Tema:
   "Agro forte, futuro sustentável:
   equilíbrio entre produção e meio ambiente"
========================================================= */

/* =========================================================
   SELETORES
========================================================= */

const body = document.body;

const themeBtn = document.getElementById("themeBtn");

const navLinks = document.querySelectorAll(".nav-link");

const pages = document.querySelectorAll(".page");

const revealElements = document.querySelectorAll(
  ".card, .impact-box, .timeline-item, .gallery img"
);

const counters = document.querySelectorAll(".counter");

const quizButtons = document.querySelectorAll(".quiz-option");

const quizResult = document.getElementById("quizResult");

const typingText = document.getElementById("typingText");

const progressBar = document.getElementById("progressBar");

/* =========================================================
   MODO ESCURO / CLARO
========================================================= */

function applyTheme(theme) {

    if(theme === "dark") {

        body.classList.add("dark");

        if(themeBtn){
            themeBtn.innerHTML = "☀️";
        }

    } else {

        body.classList.remove("dark");

        if(themeBtn){
            themeBtn.innerHTML = "🌙";
        }
    }
}

const savedTheme = localStorage.getItem("agrinho-theme");

if(savedTheme){
    applyTheme(savedTheme);
}

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        const isDark = body.classList.contains("dark");

        if(isDark){

            applyTheme("light");

            localStorage.setItem(
                "agrinho-theme",
                "light"
            );

        } else {

            applyTheme("dark");

            localStorage.setItem(
                "agrinho-theme",
                "dark"
            );
        }
    });
}

/* =========================================================
   SISTEMA DE PÁGINAS
========================================================= */

function openPage(pageId){

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if(targetPage){
        targetPage.classList.add("active");
    }

    const activeLink = document.querySelector(
        `.nav-link[data-page="${pageId}"]`
    );

    if(activeLink){
        activeLink.classList.add("active");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const pageId = link.getAttribute("data-page");

        openPage(pageId);
    });
});

/* =========================================================
   ANIMAÇÕES AO APARECER
========================================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

},{
    threshold:0.2
});

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);
});

/* =========================================================
   CONTADORES ANIMADOS
========================================================= */

function animateCounter(counter){

    const target = +counter.getAttribute("data-target");

    let current = 0;

    const increment = target / 120;

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.innerText =
            Math.floor(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
}

counters.forEach(counter => {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animateCounter(counter);

                counterObserver.unobserve(counter);
            }
        });

    },{
        threshold:0.5
    });

    counterObserver.observe(counter);
});

/* =========================================================
   QUIZ INTERATIVO
========================================================= */

if(quizButtons.length > 0){

    quizButtons.forEach(button => {

        button.addEventListener("click", () => {

            const answer =
            button.getAttribute("data-answer");

            if(answer === "correct"){

                quizResult.innerHTML =
                "✅ Correto! Agricultura sustentável ajuda a preservar o meio ambiente.";

                quizResult.style.color =
                "#2e7d32";

            } else {

                quizResult.innerHTML =
                "❌ Resposta incorreta. Tente novamente.";

                quizResult.style.color =
                "#c62828";
            }
        });
    });
}

/* =========================================================
   TEXTO DIGITANDO
========================================================= */

const phrases = [

    "Agro forte, futuro sustentável.",

    "Tecnologia e natureza caminhando juntas.",

    "Campo e cidade unidos pelo futuro.",

    "Produção agrícola com responsabilidade ambiental.",

    "Sustentabilidade começa com consciência."
];

let phraseIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentPhrase =
    phrases[phraseIndex];

    if(!isDeleting){

        typingText.innerHTML =
        currentPhrase.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentPhrase.length){

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.innerHTML =
        currentPhrase.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            phraseIndex++;

            if(phraseIndex >= phrases.length){
                phraseIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 40 : 90
    );
}

typeEffect();

/* =========================================================
   BARRA DE PROGRESSO
========================================================= */

window.addEventListener("scroll", () => {

    if(!progressBar) return;

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";
});

/* =========================================================
   EFEITO PARALLAX HERO
========================================================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if(hero){

        let offset = window.pageYOffset;

        hero.style.backgroundPositionY =
        offset * 0.4 + "px";
    }
});

/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(!topBtn) return;

    if(window.scrollY > 400){

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");
    }
});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

/* =========================================================
   SOMBIENTO AUTOMÁTICO HEADER
========================================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
        "none";
    }
});

/* =========================================================
   EFEITO HOVER DINÂMICO
========================================================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(76,175,80,0.18),
            transparent 55%
        ),
        var(--card)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "var(--card)";
    });
});

/* =========================================================
   SIMULADOR DE ECONOMIA DE ÁGUA
========================================================= */

const hectaresInput =
document.getElementById("hectares");

const waterResult =
document.getElementById("waterResult");

function calculateWater(){

    if(!hectaresInput || !waterResult) return;

    const hectares =
    Number(hectaresInput.value);

    const economy =
    hectares * 45000;

    waterResult.innerHTML =
    economy.toLocaleString("pt-BR");
}

if(hectaresInput){

    hectaresInput.addEventListener(
        "input",
        calculateWater
    );

    calculateWater();
}

/* =========================================================
   FRASE MOTIVACIONAL ALEATÓRIA
========================================================= */

const motivationalText =
document.getElementById("motivationalText");

const motivationalPhrases = [

    "🌱 Sustentabilidade é plantar hoje pensando no amanhã.",

    "🚜 O agro moderno produz respeitando a natureza.",

    "💧 Cada gota de água preservada faz diferença.",

    "🌎 Produção e meio ambiente devem caminhar juntos.",

    "☀️ Tecnologia pode transformar o campo de forma sustentável."
];

function randomPhrase(){

    if(!motivationalText) return;

    const random =
    Math.floor(
        Math.random() *
        motivationalPhrases.length
    );

    motivationalText.innerHTML =
    motivationalPhrases[random];
}

setInterval(randomPhrase, 5000);

randomPhrase();

/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.style.display = "none";

        },700);
    }
});

/* =========================================================
   MENU MOBILE
========================================================= */

const mobileBtn =
document.getElementById("mobileBtn");

const mobileMenu =
document.getElementById("mobileMenu");

if(mobileBtn){

    mobileBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");
    });
}

/* =========================================================
   REVELAÇÃO SUAVE
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");
});

/* =========================================================
   LOG FINAL
========================================================= */

console.log(
`
🌱 AGRINHO 2026

Tema:
"Agro forte, futuro sustentável:
equilíbrio entre produção e meio ambiente"

Projeto carregado com sucesso.
`
);