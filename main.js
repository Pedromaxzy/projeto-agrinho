
/* =========================
   LOADING SCREEN (CORRIGIDO)
========================= */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  if (!loading) return;

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "0.8s ease";

    setTimeout(() => {
      loading.remove();
    }, 800);
  }, 1000);
});

/* =========================
   NAVEGAÇÃO ENTRE SEÇÕES
========================= */
function abrirSecao(id) {
  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.classList.remove("ativa");
    secao.style.display = "none";
  });

  const alvo = document.getElementById(id);

  if (alvo) {
    alvo.style.display = "block";

    setTimeout(() => {
      alvo.classList.add("ativa");
    }, 50);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   DARK MODE (FUNCIONANDO 100%)
========================= */
const btnTema = document.querySelector(".tema-btn");

function alternarTema() {
  document.body.classList.toggle("dark");

  const ativo = document.body.classList.contains("dark");

  if (btnTema) {
    btnTema.textContent = ativo ? "☀️" : "🌙";
  }

  localStorage.setItem("tema", ativo ? "dark" : "light");
}

/* carregar tema salvo */
window.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
    if (btnTema) btnTema.textContent = "☀️";
  }
});

/* =========================
   EFEITO BOTÃO (FEEDBACK VISUAL)
========================= */
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.transform = "scale(0.97)";

    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 120);
  }
});

/* =========================
   QUIZ AGRÍCOLA FINAL
========================= */

const quiz = [
  {
    pergunta: "Qual é o principal objetivo da agricultura sustentável?",
    respostas: [
      { texto: "Produzir sem destruir o meio ambiente", pontos: 2 },
      { texto: "Produzir o máximo possível sem controle", pontos: 0 },
      { texto: "Eliminar a tecnologia do campo", pontos: 0 }
    ]
  },
  {
    pergunta: "Qual tecnologia ajuda o agricultor moderno?",
    respostas: [
      { texto: "Drones e sensores agrícolas", pontos: 2 },
      { texto: "Ferramentas antigas apenas", pontos: 0 },
      { texto: "Nenhuma tecnologia", pontos: 0 }
    ]
  },
  {
    pergunta: "Qual prática protege o solo?",
    respostas: [
      { texto: "Rotação de culturas", pontos: 2 },
      { texto: "Queimada constante", pontos: 0 },
      { texto: "Uso excessivo de agrotóxicos", pontos: 0 }
    ]
  }
];

let perguntaAtual = 0;
let pontos = 0;

/* iniciar quiz */
function iniciarQuiz() {
  perguntaAtual = 0;
  pontos = 0;
  mostrarPergunta();
}

/* mostrar pergunta */
function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const atual = quiz[perguntaAtual];

  container.innerHTML = `
    <div class="quiz-card">
      <h3>${atual.pergunta}</h3>

      <div class="quiz-opcoes">
        ${atual.respostas.map(r => `
          <button onclick="responder(${r.pontos})">
            ${r.texto}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

/* responder pergunta */
function responder(valor) {
  pontos += valor;
  perguntaAtual++;

  if (perguntaAtual < quiz.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

/* resultado final */
function mostrarResultado() {
  const container = document.getElementById("quiz-container");

  let mensagem = "";
  let classe = "";

  if (pontos === 6) {
    mensagem = "🌱 Excelente! Você entende muito sobre agricultura sustentável e tecnologia!";
    classe = "bom";
  } else if (pontos >= 3) {
    mensagem = "🌿 Bom! Você já tem conhecimento, mas ainda pode evoluir.";
    classe = "medio";
  } else {
    mensagem = "🌾 Você precisa estudar mais sobre sustentabilidade no campo.";
    classe = "ruim";
  }

  container.innerHTML = `
    <div class="quiz-resultado ${classe}">
      <h3>Resultado Final</h3>
      <p>${mensagem}</p>
      <button onclick="iniciarQuiz()">Refazer Quiz</button>
    </div>
  `;
}

/* auto iniciar quiz se existir */
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quiz-container")) {
    iniciarQuiz();
  }
});