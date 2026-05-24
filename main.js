
/* =========================
   AGRINHO 2026 - MAIN JS FINAL
   AgroTech Sustentável
   Estável + organizado + sem bugs
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
  }, 1400);
});


/* ================= NAVEGAÇÃO ENTRE SEÇÕES ================= */
function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.classList.remove("ativa");
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

  const modo = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("tema", modo);
}


/* aplicar tema salvo */
document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
  }

  iniciarQuiz();
});


/* ================= QUIZ ================= */

const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da agricultura sustentável?",
    opcoes: [
      "Aumentar produção sem limites",
      "Equilibrar produção e preservação ambiental",
      "Usar mais agrotóxicos para produção rápida"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática ajuda a preservar o solo?",
    opcoes: [
      "Queimadas frequentes",
      "Rotação de culturas",
      "Desmatamento contínuo"
    ],
    correta: 1
  },
  {
    pergunta: "Como a tecnologia ajuda no campo?",
    opcoes: [
      "Aumentando desperdício",
      "Reduzindo eficiência agrícola",
      "Melhorando produção com menos impacto ambiental"
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


/* ================= RENDER QUIZ ================= */
function renderQuiz() {
  const box = document.getElementById("quiz-box");
  const resultado = document.getElementById("resultado");

  if (!box) return;

  resultado.innerHTML = "";

  const q = perguntas[atual];

  box.innerHTML = `
    <h3>${q.pergunta}</h3>
  `;

  q.opcoes.forEach((opcao, i) => {
    box.innerHTML += `
      <button onclick="responder(${i}, this)">
        ${opcao}
      </button>
    `;
  });
}


/* ================= RESPOSTA ================= */
function responder(resposta, botao) {
  const botoes = document.querySelectorAll("#quiz-box button");

  botoes.forEach(b => b.disabled = true);

  const correta = perguntas[atual].correta;

  if (resposta === correta) {
    pontos++;
    botao.style.background = "#a5d6a7";
  } else {
    botao.style.background = "#ef9a9a";
    botoes[correta].style.background = "#a5d6a7";
  }

  setTimeout(() => {
    atual++;

    if (atual < perguntas.length) {
      renderQuiz();
    } else {
      mostrarResultado();
    }
  }, 900);
}


/* ================= RESULTADO ================= */
function mostrarResultado() {
  const box = document.getElementById("quiz-box");
  const resultado = document.getElementById("resultado");

  box.innerHTML = "";

  let msg = "";

  if (pontos === 3) {
    msg = "🌱 Excelente! Você entende perfeitamente o equilíbrio entre agro e meio ambiente.";
  } else if (pontos === 2) {
    msg = "👍 Muito bom! Você já tem bom conhecimento sobre o tema.";
  } else {
    msg = "📘 Você ainda pode aprender mais sobre sustentabilidade no agro.";
  }

  resultado.innerHTML = `
    <h3>Resultado Final</h3>
    <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong></p>
    <p>${msg}</p>

    <button onclick="iniciarQuiz()">🔁 Jogar novamente</button>
  `;
}