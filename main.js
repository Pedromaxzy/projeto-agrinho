// LOADING SCREEN
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
};

// NAVIGAÇÃO ENTRE SEÇÕES
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// DARK MODE
const toggle = document.getElementById("themeToggle");

function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  }
};

loadTheme();

// QUIZ
let score = 0;
let answered = 0;

function answer(points, btn) {
  if (btn.parentElement.classList.contains("done")) return;

  score += points;
  answered++;

  btn.parentElement.classList.add("done");
  btn.style.background = "#4caf50";
}

function finishQuiz() {
  let result = document.getElementById("result");

  if (answered < 3) {
    result.textContent = "Responda todas as perguntas primeiro!";
    return;
  }

  if (score === 6) {
    result.textContent = "Excelente entendimento sobre o agro! 🌱";
  } else if (score >= 3) {
    result.textContent = "Bom entendimento, mas ainda pode melhorar!";
  } else {
    result.textContent = "Baixo entendimento, estude mais sobre o tema.";
  }
}