
/* =========================
   AGRINHO 2026 - MAIN JS
   VERSÃO CAMPEÃO (ESTÁVEL + BONITO)
========================= */


/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  if (!loading) return;

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.transition = "0.6s ease";

    setTimeout(() => {
      loading.style.display = "none";
    }, 600);
  }, 1500);
});


/* =========================
   NAVEGAÇÃO ENTRE TELAS
========================= */

function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

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


/* =========================
   TEMA ESCURO / CLARO
========================= */

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
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }

  iniciarQuiz();
});


/* =========================
   QUIZ AGRÍCOLA (3 PERGUNTAS)
========================= */

const perguntas = [
  {
    pergunta: "O que melhor define agricultura sustentável?",
    opcoes: [
      "Produzir sem pensar no meio ambiente",
      "Equilibrar produção e preservação ambiental",
      "Aumentar uso de agrotóxicos sem controle"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prática ajuda a preservar o solo?",
    opcoes: [
      "Queimada constante",
      "Rotação de culturas",
      "Desmatamento total"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o papel da tecnologia no agro moderno?",
    opcoes: [
      "Reduzir eficiência agrícola",
      "Aumentar desperdício de recursos",
      "Aumentar produtividade com menos impacto ambiental"
    ],
    correta: 2
  }
];

let atual = 0;
let pontos = 0;


/* =========================
   INICIAR QUIZ
========================= */

function iniciarQuiz() {
  atual = 0;
  pontos = 0;
  renderQuiz();
}


/* =========================
   MOSTRAR PERGUNTA
========================= */

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!quiz) return;

  if (resultado) resultado.innerHTML = "";

  const q = perguntas[atual];

  quiz.innerHTML = `
    <h3>Pergunta ${atual + 1} de ${perguntas.length}</h3>
    <p>${q.pergunta}</p>
    <div id="opcoes"></div>
  `;

  const opcoesDiv = document.getElementById("opcoes");

  q.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.innerText = opcao;

    btn.onclick = () => responder(i);

    opcoesDiv.appendChild(btn);
  });
}


/* =========================
   RESPONDER
========================= */

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


/* =========================
   RESULTADO FINAL
========================= */

function mostrarResultado() {
  const quiz = document.getElementById("quiz");
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  let mensagem = "";
  let cor = "";

  if (pontos === 3) {
    mensagem = "🌱 Excelente! Você domina sustentabilidade no agro.";
    cor = "green";
  } else if (pontos === 2) {
    mensagem = "👍 Muito bom! Você tem boa base sobre o tema.";
    cor = "orange";
  } else {
    mensagem = "📘 Você pode aprender mais sobre agro sustentável.";
    cor = "red";
  }

  quiz.innerHTML = "";

  resultado.innerHTML = `
    <h3>Resultado Final</h3>
    <p>Você acertou ${pontos} de ${perguntas.length}</p>
    <p style="color:${cor}; font-weight:bold">${mensagem}</p>
    <button onclick="iniciarQuiz()">🔁 Refazer Quiz</button>
  `;
}