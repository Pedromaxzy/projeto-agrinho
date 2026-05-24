
/* =========================
   AGRINHO 2026 - MAIN JS FINAL
   Versão estável + polida
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

  telas.forEach(t => {
    t.classList.remove("ativa");
  });

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

  const modo = document.body.classList.contains("dark") ? "dark" : "light";

  localStorage.setItem("tema", modo);
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
    pergunta: "O que melhor representa a agricultura sustentável?",
    opcoes: [
      "Produção sem preocupação ambiental",
      "Equilíbrio entre produção e preservação ambiental",
      "Uso excessivo de agrotóxicos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática ajuda a manter o solo saudável?",
    opcoes: [
      "Queimada constante",
      "Rotação de culturas",
      "Desmatamento total"
    ],
    correta: 1
  },
  {
    pergunta: "Como a tecnologia ajuda no campo?",
    opcoes: [
      "Aumentando desperdício",
      "Reduzindo eficiência agrícola",
      "Melhorando produção e reduzindo impactos ambientais"
    ],
    correta: 2
  }
];

let atual = 0;
let pontos = 0;


/* ================= INICIAR QUIZ ================= */
function iniciarQuiz() {
  atual = 0;
  pontos = 0;
  renderQuiz();
}


/* ================= MOSTRAR PERGUNTA ================= */
function renderQuiz() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!quiz) return;

  if (resultado) {
    resultado.innerHTML = "";
  }

  const q = perguntas[atual];

  quiz.innerHTML = `
    <h3>${q.pergunta}</h3>
  `;

  q.opcoes.forEach((opcao, i) => {
    quiz.innerHTML += `
      <button onclick="responder(${i}, this)">
        ${opcao}
      </button>
    `;
  });
}


/* ================= RESPOSTA ================= */
function responder(resposta, botao) {
  const botoes = document.querySelectorAll("#quiz button");

  botoes.forEach(b => b.disabled = true);

  if (resposta === perguntas[atual].correta) {
    pontos++;
    botao.style.background = "#a5d6a7";
  } else {
    botao.style.background = "#ef9a9a";
  }

  setTimeout(() => {
    atual++;

    if (atual < perguntas.length) {
      renderQuiz();
    } else {
      mostrarResultado();
    }
  }, 800);
}


/* ================= RESULTADO FINAL ================= */
function mostrarResultado() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  let mensagem = "";

  if (pontos === 3) {
    mensagem = "🌱 Excelente! Você domina o conceito de sustentabilidade no agro.";
  } else if (pontos === 2) {
    mensagem = "👍 Muito bom! Você já entende bem o tema.";
  } else {
    mensagem = "📘 Você pode melhorar seus conhecimentos sobre agro sustentável.";
  }

  quiz.innerHTML = "";

  resultado.innerHTML = `
    <h3>Resultado Final</h3>
    <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong></p>
    <p>${mensagem}</p>

    <button onclick="iniciarQuiz()">🔁 Refazer Quiz</button>
  `;
}