// =========================
// LOADING SCREEN FIX
// =========================
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "0.8s";

    setTimeout(() => {
      loading.style.display = "none";
    }, 800);

  }, 1200); // tempo mínimo de loading (efeito bonito)
});


// =========================
// TROCA DE SEÇÕES (MENU)
// =========================
function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// =========================
// DARK / LIGHT MODE
// =========================
function toggleTema() {
  document.body.classList.toggle("dark");

  // salva preferência
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}


// carregar tema salvo
window.addEventListener("load", () => {
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
  }
});


// =========================
// QUIZ AGRÍCOLA (3 PERGUNTAS)
// =========================

const perguntas = [
  {
    pergunta: "Qual prática ajuda a preservar o solo?",
    opcoes: ["Desmatamento", "Rotação de culturas", "Queimadas"],
    correta: 1
  },
  {
    pergunta: "O que reduz o desperdício de água no agro?",
    opcoes: ["Irrigação inteligente", "Mais máquinas", "Uso aleatório"],
    correta: 0
  },
  {
    pergunta: "Qual tecnologia ajuda no monitoramento das lavouras?",
    opcoes: ["Drones", "TV", "Rádio"],
    correta: 0
  }
];

let indice = 0;
let pontos = 0;

const quizBox = document.getElementById("quiz-box");
const resultado = document.getElementById("resultado");

function carregarPergunta() {
  if (indice >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const p = perguntas[indice];

  quizBox.innerHTML = `
    <h3>${p.pergunta}</h3>
    ${p.opcoes.map((opcao, i) => `
      <button class="quiz-btn" onclick="responder(${i})">
        ${opcao}
      </button>
    `).join("")}
  `;
}

function responder(resposta) {
  if (resposta === perguntas[indice].correta) {
    pontos++;
  }

  indice++;
  carregarPergunta();
}

function mostrarResultado() {
  quizBox.innerHTML = "";

  let mensagem = "";

  if (pontos === 3) {
    mensagem = "🌟 Excelente! Você entende de agro sustentável!";
  } else if (pontos === 2) {
    mensagem = "👍 Bom! Você já sabe bastante sobre o tema.";
  } else {
    mensagem = "🌱 Continue aprendendo sobre sustentabilidade!";
  }

  resultado.innerHTML = `
    <h3>Resultado final</h3>
    <p>Você acertou ${pontos} de ${perguntas.length}</p>
    <p>${mensagem}</p>

    <button class="quiz-btn" onclick="reiniciarQuiz()">Tentar novamente</button>
  `;
}

function reiniciarQuiz() {
  indice = 0;
  pontos = 0;
  resultado.innerHTML = "";
  carregarPergunta();
}


// iniciar quiz ao abrir seção (opcional)
document.addEventListener("DOMContentLoaded", () => {
  carregarPergunta();
});