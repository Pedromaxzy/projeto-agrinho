/* =========================
   AGRINHO 2026 - MAIN JS
   SISTEMA COMPLETO
========================= */

/* ===== LOADING SCREEN ===== */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  // garante que nunca fique infinito
  setTimeout(() => {
    if (loading) {
      loading.style.opacity = "0";
      loading.style.transition = "0.6s ease";

      setTimeout(() => {
        loading.style.display = "none";
      }, 600);
    }
  }, 1200);
});

/* ===== NAVEGAÇÃO ENTRE TELAS ===== */
function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

  telas.forEach(tela => {
    tela.classList.remove("ativa");
  });

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.add("ativa");

    // rola pro topo sempre que muda de seção
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

/* ===== DARK / LIGHT MODE ===== */
function toggleTema() {
  const body = document.body;
  body.classList.toggle("dark");

  // salva preferência
  if (body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}

/* carregar tema salvo */
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }
});

/* ===== QUIZ AGRINHO ===== */

let perguntaAtual = 0;
let pontuacao = 0;

const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da agricultura sustentável?",
    opcoes: [
      "Aumentar produção sem se importar com o meio ambiente",
      "Equilibrar produção agrícola e preservação ambiental",
      "Usar mais agrotóxicos para maior produtividade"
    ],
    correta: 1
  },
  {
    pergunta: "O que ajuda a reduzir impactos ambientais no campo?",
    opcoes: [
      "Desmatamento total da área",
      "Uso consciente da água e do solo",
      "Queima de resíduos agrícolas sem controle"
    ],
    correta: 1
  },
  {
    pergunta: "Tecnologias no agro ajudam principalmente a:",
    opcoes: [
      "Aumentar desperdício de recursos",
      "Controlar e melhorar a eficiência da produção",
      "Eliminar a necessidade de planejamento"
    ],
    correta: 1
  }
];

/* iniciar quiz */
function iniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
}

/* mostrar pergunta */
function mostrarPergunta() {
  const quiz = document.getElementById("quiz");

  if (!quiz) return;

  const q = perguntas[perguntaAtual];

  quiz.innerHTML = `
    <h3>${q.pergunta}</h3>
  `;

  q.opcoes.forEach((opcao, index) => {
    quiz.innerHTML += `
      <button onclick="responder(${index})">
        ${opcao}
      </button>
    `;
  });

  document.getElementById("resultado").innerText = "";
}

/* responder pergunta */
function responder(resposta) {
  const correta = perguntas[perguntaAtual].correta;

  if (resposta === correta) {
    pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

/* resultado final */
function mostrarResultado() {
  const resultado = document.getElementById("resultado");

  let mensagem = "";

  if (pontuacao === 3) {
    mensagem = "🌱 Excelente! Você entende bem sustentabilidade no agro!";
  } 
  else if (pontuacao === 2) {
    mensagem = "👍 Bom! Você tem uma boa base sobre o tema.";
  } 
  else {
    mensagem = "📘 Você ainda pode aprender mais sobre agro sustentável.";
  }

  resultado.innerHTML = `
    <h3>Resultado Final</h3>
    <p>Você acertou ${pontuacao} de ${perguntas.length}</p>
    <p>${mensagem}</p>
    <button onclick="iniciarQuiz()">Refazer Quiz</button>
  `;
}

/* ===== INICIALIZAÇÃO ===== */
document.addEventListener("DOMContentLoaded", () => {
  iniciarQuiz();
});