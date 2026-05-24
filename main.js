document.addEventListener("DOMContentLoaded", () => {

  // ================= LOADING =================
  const loading = document.getElementById("loading-screen");

  function fecharLoading() {
    if (!loading) return;

    loading.style.opacity = "0";
    loading.style.transition = "0.6s ease";

    setTimeout(() => {
      loading.remove();
    }, 600);
  }

  // fecha sempre (evita bug infinito)
  setTimeout(fecharLoading, 1200);
  window.addEventListener("load", fecharLoading);

  // ================= NAVEGAÇÃO ENTRE TELAS =================
  window.irPara = function (id) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(t => t.classList.remove("ativa"));

    const alvo = document.getElementById(id);

    if (alvo) {
      alvo.classList.add("ativa");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ================= TEMA ESCURO / CLARO =================
  const btnTheme = document.getElementById("toggle-theme");

  function aplicarTema(tema) {
    if (tema === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("tema", tema);
  }

  // carregar tema salvo
  const temaSalvo = localStorage.getItem("tema") || "light";
  aplicarTema(temaSalvo);

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const novoTema = document.body.classList.contains("dark")
        ? "light"
        : "dark";

      aplicarTema(novoTema);
    });
  }

  // ================= QUIZ COMPLETO (3 PERGUNTAS) =================
  const perguntas = [
    {
      pergunta: "Qual é um exemplo de tecnologia sustentável no campo?",
      opcoes: [
        "Queimar áreas para plantar",
        "Uso de drones agrícolas",
        "Desperdício de água"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa agricultura sustentável?",
      opcoes: [
        "Produzir sem pensar no futuro",
        "Produzir com equilíbrio ambiental",
        "Apenas aumentar produção a qualquer custo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual problema o agronegócio moderno tenta reduzir?",
      opcoes: [
        "Desmatamento e poluição",
        "Aumento de tecnologia",
        "Uso de internet no campo"
      ],
      correta: 0
    }
  ];

  let atual = 0;
  let pontos = 0;

  const perguntaEl = document.getElementById("pergunta");
  const opcoesBtn = [
    document.getElementById("op1"),
    document.getElementById("op2"),
    document.getElementById("op3")
  ];
  const resultado = document.getElementById("resultado");

  function carregarPergunta() {
    const q = perguntas[atual];

    if (!q) {
      mostrarResultadoFinal();
      return;
    }

    if (perguntaEl) perguntaEl.innerText = q.pergunta;

    opcoesBtn.forEach((btn, i) => {
      if (btn) {
        btn.innerText = q.opcoes[i];
        btn.onclick = () => responder(i);
      }
    });

    if (resultado) resultado.innerText = "";
  }

  function responder(indice) {
    const correta = perguntas[atual].correta;

    if (indice === correta) {
      pontos += 10;
      resultado.innerText = "✔ Correto! +10 pontos";
      resultado.style.color = "green";
    } else {
      resultado.innerText = "❌ Errado!";
      resultado.style.color = "red";
    }

    // trava botões por 0.8s
    opcoesBtn.forEach(b => b.disabled = true);

    setTimeout(() => {
      opcoesBtn.forEach(b => b.disabled = false);
      atual++;
      carregarPergunta();
    }, 800);
  }

  function mostrarResultadoFinal() {
    perguntaEl.innerText = "🏁 Quiz finalizado!";
    resultado.innerHTML = `
      🌱 Sua pontuação final: <b>${pontos}</b> de 30<br><br>
      ${pontos === 30
        ? "🏆 Excelente! Você domina o tema!"
        : pontos >= 20
        ? "👍 Muito bom! Você entendeu bem o tema."
        : "📚 Você pode melhorar mais sobre sustentabilidade."
      }
    `;

    opcoesBtn.forEach(b => b.style.display = "none");
  }

  // botão para reiniciar quiz (se quiser usar depois)
  window.reiniciarQuiz = function () {
    atual = 0;
    pontos = 0;

    opcoesBtn.forEach(b => b.style.display = "block");

    carregarPergunta();
  };

  // iniciar quiz automaticamente quando entrar na tela
  carregarPergunta();

  console.log("🌱 Agro Forte carregado com sucesso!");
});