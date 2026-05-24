let score = 0;
let answered = 0;

// LOADING
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1800);
};

// NAV
function go(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// QUIZ
function q(btn, value) {
  if (btn.disabled) return;

  score += value;
  answered++;

  btn.style.background = value > 0 ? "#2ecc71" : "#e74c3c";
  btn.style.color = "white";

  btn.parentElement.querySelectorAll("button").forEach(b => b.disabled = true);
}

// RESULTADO
function result() {
  let res = document.getElementById("res");

  if (answered < 3) {
    res.innerHTML = "Responda todas as perguntas!";
    return;
  }

  if (score === 6) {
    res.innerHTML = "🌟 Excelente conhecimento sobre agro e tecnologia!";
  } else if (score >= 3) {
    res.innerHTML = "👍 Bom entendimento, mas pode melhorar!";
  } else {
    res.innerHTML = "📚 Você precisa estudar mais sobre o tema.";
  }
}

// DARK MODE
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};