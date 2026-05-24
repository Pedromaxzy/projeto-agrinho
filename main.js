
/* =========================================================
   AGRINHO 2026 - MAIN JS
   SPA + ANIMAÇÕES + QUIZ + PARTICLES + THEME
========================================================= */

/* =========================
   ESTADO GLOBAL
========================= */

let score = 0;
let answered = 0;
let quizLocked = false;

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
  setTimeout(() => {
    const load = document.getElementById("loadingScreen");
    if (!load) return;

    load.style.opacity = "0";

    setTimeout(() => {
      load.style.display = "none";
    }, 800);

  }, 2000);
});

/* =========================
   NAVEGAÇÃO SPA
========================= */

function navigate(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(p => {
    p.classList.remove("active");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* =========================
   DARK MODE (LOCAL STORAGE)
========================= */

const themeBtn = document.getElementById("themeToggle");

function loadTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "🌙";
  } else {
    document.body.classList.remove("dark");
    if (themeBtn) themeBtn.textContent = "☀️";
  }
}

loadTheme();

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeBtn.textContent = isDark ? "🌙" : "☀️";
});

/* =========================
   QUIZ SYSTEM
========================= */

function quiz(btn, value) {

  if (quizLocked) return;

  const parent = btn.parentElement;

  if (parent.dataset.done === "true") return;

  parent.dataset.done = "true";

  score += value;
  answered++;

  const buttons = parent.querySelectorAll("button");

  buttons.forEach(b => {
    b.disabled = true;
    b.style.opacity = "0.6";
  });

  btn.style.opacity = "1";

  if (value > 0) {
    btn.style.background = "#00ff88";
    btn.style.color = "#000";
  } else {
    btn.style.background = "#ff3b3b";
  }

  /* feedback visual */
  btn.style.transform = "scale(1.05)";

  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 200);
}

/* =========================
   FINALIZAR QUIZ
========================= */

function finishQuiz() {

  const result = document.getElementById("result");

  if (!result) return;

  if (answered < 3) {
    result.innerHTML = "⚠️ Responda todas as perguntas antes de finalizar.";
    return;
  }

  quizLocked = true;

  let message = "";
  let emoji = "";

  if (score === 6) {
    message = "Excelente entendimento sobre agro, tecnologia e sustentabilidade!";
    emoji = "🌟";
  } else if (score >= 3) {
    message = "Bom conhecimento, mas ainda há espaço para evolução!";
    emoji = "👍";
  } else {
    message = "Você precisa estudar mais sobre o tema Agrinho.";
    emoji = "📚";
  }

  result.innerHTML = `
    <div style="
      margin-top:20px;
      padding:15px;
      border:1px solid #00ff88;
      border-radius:12px;
      background:rgba(0,255,120,0.05);
      animation: fadeIn 0.5s ease;
    ">
      <h2>${emoji} Resultado</h2>
      <p>${message}</p>
      <p><strong>Pontuação:</strong> ${score}/6</p>
    </div>
  `;
}

/* =========================
   PARTÍCULAS (CANVAS)
========================= */

const canvas = document.getElementById("bg");
const ctx = canvas ? canvas.getContext("2d") : null;

let particles = [];

if (canvas && ctx) {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2;
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.fillStyle = "rgba(0,255,120,0.5)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
}

/* =========================
   EFEITO EXTRA DE ENTRADA
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .infoCard, .techCard");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
      }
    });
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s";

    observer.observe(card);
  });
});

/* =========================
   MICRO INTERAÇÕES
========================= */

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouseX", e.clientX + "px");
  document.body.style.setProperty("--mouseY", e.clientY + "px");
});