
/* =========================
   AGRINHO 2026 - MAIN JS
   VERSÃO FINAL ESTÁVEL
========================= */


/* ================= LOADING ================= */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  if (!loading) return;

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "0.6s ease";

    setTimeout(() => {
      loading.style.display = "none";
    }, 600);
  }, 1200);
});


/* ================= NAVEGAÇÃO ENTRE TELAS ================= */
function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

  if (!telas.length) return;

  telas.forEach(t => t.classList.remove("ativa"));

  const alvo = document.getElementById(id);

  if (alvo) {
    alvo.classList.add("ativa");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* ================= TEMA ESCURO / CLARO ================= */
function toggleTema() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}


/* carregar tema salvo */
document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
  }

  iniciarQuiz();
});


/* ================= QUIZ AGRINHO ================= */

const perguntas = [
  {
    pergunta: "O que melhor define agricultura sustentável?",
    opcoes: [
      "Produzir sem pensar no meio ambiente",
      "Equilibrar produção agrícola e preservação ambiental",
      "Aumentar uso de agrotóxicos sempre"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática ajuda a preservar o solo?",
    opcoes: [
      "Desmatamento total da área",
      "Rotação de culturas",
      "Queimada constante"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o papel da tecnologia no agro moderno?",
    opcoes: [
      "Aumentar desperdício",
      "Melhorar eficiência e reduzir impactos ambientais",
      "Eliminar necessidade de planejamento"
    ],
    correta: 1
  }
];

let atual = 0;
let pontos = 0;


/* iniciar quiz */
function iniciarQuiz() {
  atual = 0;
  pontos = 0;
  renderQuiz();
}


/* renderizar pergunta */
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


/* responder pergunta */
function responder(resposta) {
  if (resposta === perguntas[atual].correta) {
    pontos++;
  }

  atual++;

  if (atual < perguntas.length) {
    renderQuiz();
  } else {
    mostrarResultado();
  }
}


/* resultado final */
function mostrarResultado() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  let mensagem = "";

  if (pontos === 3) {
    mensagem = "🌱 Excelente! Você entende bem sustentabilidade no agro.";
  } else if (pontos === 2) {
    mensagem = "👍 Bom! Você já tem boa base sobre o tema.";
  } else {
    mensagem = "📘 Você ainda pode aprender mais sobre agro sustentável.";
  }

  quiz.innerHTML = "";

  resultado.innerHTML = `
    <h3>Resultado Final</h3>
    <p>Você acertou ${pontos} de ${perguntas.length}</p>
    <p>${mensagem}</p>
    <button onclick="iniciarQuiz()">Refazer Quiz</button>
  `;
}