document.addEventListener("DOMContentLoaded", () => {

  // ================= LOADING =================
  setTimeout(() => {
    const loading = document.getElementById("loading-screen");
    if (loading) {
      loading.style.opacity = "0";
      loading.style.transition = "0.5s";
      setTimeout(() => loading.remove(), 500);
    }
  }, 1500);

  // ================= SPA NAVIGATION =================
  window.irPara = function (id) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
      tela.classList.remove("ativa");
    });

    const alvo = document.getElementById(id);
    if (alvo) {
      alvo.classList.add("ativa");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================= THEME (DARK / LIGHT) =================
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

  btnTheme.addEventListener("click", () => {
    const novoTema = document.body.classList.contains("dark")
      ? "light"
      : "dark";

    aplicarTema(novoTema);
  });

  // ================= QUIZ =================
  window.responder = function (resposta) {
    const resultado = document.getElementById("resultado");

    if (!resultado) return;

    if (resposta) {
      resultado.innerText = "✔ Correto! A tecnologia ajuda o meio ambiente.";
      resultado.style.color = "green";
    } else {
      resultado.innerText = "❌ Errado! Isso prejudica o meio ambiente.";
      resultado.style.color = "red";
    }
  };

  // ================= ANIMAÇÃO SIMPLES DE ENTRADA =================
  const cards = document.querySelectorAll(".card, .box");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
        entry.target.style.transition = "0.5s";
      }
    });
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    observer.observe(card);
  });

});