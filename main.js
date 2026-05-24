/* =========================
   LOADING SCREEN
========================= */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "0.6s ease";

    setTimeout(() => {
      loading.style.display = "none";
    }, 600);
  }, 1200);
});

/* =========================
   NAVEGAÇÃO ENTRE SEÇÕES
========================= */
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

/* =========================
   DARK / LIGHT MODE
========================= */
function alternarTema() {
  document.body.classList.toggle("dark");

  const botao = document.querySelector(".tema-btn");

  if (document.body.classList.contains("dark")) {
    botao.textContent = "☀️";
    localStorage.setItem("tema", "dark");
  } else {
    botao.textContent = "🌙";
    localStorage.setItem("tema", "light");
  }
}

/* carregar tema salvo */
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    const botao = document.querySelector(".tema-btn");
    if (botao) botao.textContent = "☀️";
  }
});

/* =========================
   QUIZ (3 PERGUNTAS)
========================= */

let perguntaAtual = 0;
let pontuacao = 0;

const perguntas = [
  {
    pergunta: "Qual prática ajuda a preservar o solo agrícola?",
    opcoes: [
      { texto: "Rotação de culturas", valor: 1 },
      { texto: "Queimada constante", valor: 0 },
      { texto: "Desmatamento", valor: 0 }
    ]
  },
  {
    pergunta: "O que é agricultura sustentável?",
    opcoes: [
      { texto: "Produção sem pensar no futuro", valor: 0 },
      { texto: "Produção equilibrada com o meio ambiente", valor: 1 },
      { texto: "Uso excessivo de agrotóxicos", valor: 0 }
    ]
  },
  {
    pergunta: "Qual tecnologia ajuda no campo moderno?",
    opcoes: [
      { texto: "Drones agrícolas", valor: 1 },
      { texto: "Ferramentas quebradas", valor: 0 },
      { texto: "Queima de pasto", valor: 0 }
    ]
  }
];

function iniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");

  if (!container) return;

  const q = perguntas[perguntaAtual];

  container.innerHTML = `
    <h3>${q.pergunta}</h3>
    <div class="opcoes">
      ${q.opcoes.map((op, index) => `
        <button onclick="responder(${op.valor})">
          ${op.texto}
        </button>
      `).join("")}
    </div>
  `;
}

function responder(valor) {
  pontuacao += valor;
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("quiz-container");

  let mensagem = "";

  if (pontuacao === 3) {
    mensagem = "🌱 Excelente! Você entende muito sobre agricultura sustentável!";
  } else if (pontuacao === 2) {
    mensagem = "🌿 Bom! Você já entende bem, mas pode melhorar.";
  } else {
    mensagem = "🌾 Você precisa aprender mais sobre sustentabilidade no campo.";
  }

  container.innerHTML = `
    <h3>Resultado</h3>
    <p>${mensagem}</p>
    <button onclick="iniciarQuiz()">Tentar novamente</button>
  `;
}

/* iniciar quiz automaticamente se existir */
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quiz-container")) {
    iniciarQuiz();
  }
});