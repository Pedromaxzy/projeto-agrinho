/* =========================
   BOTÃO TEMA
========================= */

const themeBtn =
document.getElementById("themeBtn");

/* =========================
   CARREGAR TEMA
========================= */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

  document.body.classList.add(
    "dark-mode"
  );

  themeBtn.textContent = "☀️";

}

/* =========================
   TROCAR TEMA
========================= */

themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark-mode"
    );

    const darkMode =
    document.body.classList.contains(
      "dark-mode"
    );

    if(darkMode){

      localStorage.setItem(
        "theme",
        "dark"
      );

      themeBtn.textContent = "☀️";

    }
    else{

      localStorage.setItem(
        "theme",
        "light"
      );

      themeBtn.textContent = "🌙";

    }

  }
);