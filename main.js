document.addEventListener("DOMContentLoaded", () => {

  // ================= LOADING (SEGURADO CONTRA BUG) =================
  const loading = document.getElementById("loading-screen");

  function removerLoading() {
    if (loading) {
      loading.style.opacity = "0";
      loading.style.transition = "0.6s ease";
      setTimeout(() => loading.remove(), 600);
    }
  }

  // garante que SEMPRE some (mesmo se algo travar)
  setTimeout(removerLoading, 1200);
  window.addEventListener("load", removerLoading);

  // ================= SPA NAVIGATION =================
  window.irPara = function (id) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(t => t.classList.remove("ativa"));

    const alvo = document.getElementById(id);

    if (alvo) {
      alvo.classList.add("ativa");

      // animação leve de entrada
      alvo.style.opacity = 0;
      setTimeout(() => {
        alvo.style.opacity = 1;
        alvo.style.transition = "0.4s";
      }, 50);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================= TEMA ESCURO / CLARO =================
  const btnTheme = document.getElementById("toggle-theme");

  function setTema(tema) {
    if (tema === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("tema", tema);
  }

  // carregar tema salvo
  const temaSalvo = localStorage.getItem("tema") || "light";
  setTema(temaSalvo);

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const novoTema = document.body.classList.contains("dark")
        ? "light"
        : "dark";

      setTema(novoTema);
    });
  }

  // ================= QUIZ COM PONTUAÇÃO =================
  let pontos = 0;

  window.responder = function (resposta) {
    const resultado = document.getElementById("resultado");
    if (!resultado) return;

    if (resposta) {
      pontos += 10;
      resultado.innerText = `✔ Correto! +10 pontos | Total: ${pontos}`;
      resultado.style.color = "green";
    } else {
      resultado.innerText = `❌ Errado! Total: ${pontos}`;
      resultado.style.color = "red";
    }
  };

  // ================= ANIMAÇÃO AO ROLAR (MODERNO) =================
  const elementos = document.querySelectorAll(".card, .box, img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
        entry.target.style.transition = "0.5s ease";
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    observer.observe(el);
  });

  // ================= SEGURANÇA (EVITA ERROS SILENCIOSOS) =================
  console.log("🌱 Agro Forte carregado com sucesso!");
});