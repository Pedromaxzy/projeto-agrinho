function mostrarMensagem() {
  const msg = document.getElementById("mensagem");

  const mensagens = [
    "🌱 A tecnologia pode salvar o futuro do campo!",
    "💧 Economizar água é essencial para o planeta.",
    "🚜 O agro e a tecnologia precisam andar juntos.",
    "🌍 Sustentabilidade garante o futuro das próximas gerações."
  ];

  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  msg.textContent = aleatoria;
}

/* ===== QUIZ ===== */
function responder(opcao) {
  const resultado = document.getElementById("resultado");

  if (opcao === "B") {
    resultado.textContent = "✅ Correto! Irrigação inteligente ajuda o meio ambiente.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Errado. Pense em sustentabilidade no campo.";
    resultado.style.color = "red";
  }
}

/* ===== IMPACTO DINÂMICO ===== */
function calcularImpacto() {
  const resultado = document.getElementById("impactoResultado");

  let pontuacao = 0;

  // Simulação simples de impacto sustentável
  const agro = Math.random() * 100;
  const ambiente = 100 - agro;

  if (agro > 70) {
    pontuacao = 1;
  } else if (agro > 40) {
    pontuacao = 2;
  } else {
    pontuacao = 3;
  }

  resultado.innerHTML = `
    🌾 Produção agrícola: ${agro.toFixed(1)}% <br>
    🌍 Preservação ambiental: ${ambiente.toFixed(1)}% <br><br>
    ⭐ Nível de sustentabilidade: ${pontuacao}/3
  `;
}

/* ===== FORMULÁRIO ===== */
function enviarMensagem() {
  const status = document.getElementById("status");

  const mensagens = [
    "📩 Mensagem enviada com sucesso!",
    "🌱 Obrigado por apoiar a sustentabilidade!",
    "🚜 Sua ideia pode transformar o agro!"
  ];

  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  status.textContent = aleatoria;
  status.style.color = "green";
}

/* ===== EXTRAS (EXPERIÊNCIA DO SITE) ===== */

// Mensagem automática ao carregar o site
window.addEventListener("load", () => {
  console.log("Projeto Agrinho carregado com sucesso 🌱");
});

// Efeito simples de interação no scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "#145a18";
  } else {
    nav.style.background = "#1b5e20";
  }
});