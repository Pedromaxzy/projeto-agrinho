/* =========================
   AGRINHO 2026 - JS ESTÁVEL
   (VERSÃO CORRIGIDA)
========================= */

/* ===== LOADING (SEM BUG) ===== */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  if (!loading) return;

  setTimeout(() => {
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, 1000);
});

/* ===== NAVEGAÇÃO ENTRE TELAS ===== */
function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

  if (!telas.length) return;

  telas.forEach(t => t.classList.remove("ativa"));

  const alvo = document.getElementById(id);

  if (alvo) {
    alvo.classList.add("ativa");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ===== TEMA ESCURO/CLARO (ROBUSTO) ===== */
function toggleTema() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "tema",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

/* carregar tema salvo */
document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
  }

  iniciarQuiz(); // só inicia quando DOM existe
});

/* ===== QUIZ SIMPLES E FUNCIONAL ===== */
const perguntas = [
  {
    pergunta: "O que é agricultura sustentável?",
    opcoes: [
      "Produzir sem pensar no meio ambiente",
      "Equilibrar produção e preservação ambiental",
      "Usar mais agrotóxicos sempre"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática ajuda o meio ambiente?",
    opcoes: [
      "Desmatamento total",
      "Uso consciente da água",
      "Queimada sem controle"
    ],
    correta: 1
  },
  {
    pergunta: "Tecnologia no agro serve para:",
    opcoes: [
      "Aumentar desperdício",
      "Melhorar eficiência da produção",
      "Eliminar planejamento"
    ],
    correta: 1
  }
];

let atual = 0;
let pontos = 0;

function iniciarQuiz() {
  atual = 0;
  pontos = 0;
  renderQuiz();
}

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!quiz) return;

  if (resultado) resultado.innerHTML = "";

  const q = perguntas[atual];

  quiz.innerHTML = `
    <h3>${q.pergunta}</h3>
  `;

  q.opcoes.forEach((opcao, i) => {
    quiz.innerHTML += `
      <button onclick="responder(${i})">${opcao}</button>
    `;
  });
}

function responder(opcao) {
  if (opcao === perguntas[atual].correta) {
    pontos++;
  }

  atual++;

  if (atual < perguntas.length) {
    renderQuiz();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  let msg = "";

  if (pontos === 3) msg = "Excelente entendimento!";
  else if (pontos === 2) msg = "Bom conhecimento!";
  else msg = "Você pode aprender mais!";

  quiz.innerHTML = "";

  resultado.innerHTML = `
    <h3>Resultado</h3>
    <p>Você acertou ${pontos}/3</p>
    <p>${msg}</p>
    <button onclick="iniciarQuiz()">Tentar novamente</button>
  `;
}