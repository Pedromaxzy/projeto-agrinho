/* ========================================= */
/* AGRINHO 2026 - MAIN.JS */
/* ========================================= */

/* ========================================= */
/* VARIÁVEIS */
/* ========================================= */

let score = 0;

let answeredQuestions = 0;

let quizFinished = false;

const pages = document.querySelectorAll(".page");

const themeButton = document.getElementById("themeToggle");

/* ========================================= */
/* LOADING SCREEN */
/* ========================================= */

window.addEventListener("load", () => {

const loadingScreen = document.getElementById("loadingScreen");

setTimeout(() => {

loadingScreen.style.opacity = "0";

loadingScreen.style.pointerEvents = "none";

setTimeout(() => {

loadingScreen.style.display = "none";

},1000);

},1800);

});

/* ========================================= */
/* NAVEGAÇÃO ENTRE SEÇÕES */
/* ========================================= */

function navigateTo(pageId){

pages.forEach(page => {

page.classList.remove("active");

});

const selectedPage = document.getElementById(pageId);

if(selectedPage){

selectedPage.classList.add("active");

window.scrollTo({

top:0,
behavior:"smooth"

});

}

}

/* ========================================= */
/* DARK MODE */
/* ========================================= */

function applyTheme(theme){

if(theme === "dark"){

document.body.classList.add("dark");

themeButton.textContent = "☀️";

}else{

document.body.classList.remove("dark");

themeButton.textContent = "🌙";

}

}

/* ========================================= */
/* CARREGAR TEMA */
/* ========================================= */

function loadTheme(){

const savedTheme = localStorage.getItem("agrinhoTheme");

if(savedTheme){

applyTheme(savedTheme);

}else{

applyTheme("light");

}

}

loadTheme();

/* ========================================= */
/* TROCAR TEMA */
/* ========================================= */

themeButton.addEventListener("click", () => {

if(document.body.classList.contains("dark")){

applyTheme("light");

localStorage.setItem("agrinhoTheme","light");

}else{

applyTheme("dark");

localStorage.setItem("agrinhoTheme","dark");

}

});

/* ========================================= */
/* QUIZ */
/* ========================================= */

function answer(button,value){

if(quizFinished){

return;

}

const questionBlock = button.parentElement;

if(questionBlock.dataset.answered === "true"){

return;

}

questionBlock.dataset.answered = "true";

answeredQuestions++;

score += value;

const buttons = questionBlock.querySelectorAll("button");

buttons.forEach(btn => {

btn.disabled = true;

btn.style.opacity = "0.7";

});

if(value === 2){

button.style.background = "#111";

button.style.color = "white";

}else{

button.style.background = "#d64545";

button.style.color = "white";

}

}

/* ========================================= */
/* FINALIZAR QUIZ */
/* ========================================= */

function finishQuiz(){

const result = document.getElementById("quizResult");

if(answeredQuestions < 3){

result.innerHTML = `

<h2>⚠️ Atenção</h2>

<p>
Responda todas as perguntas antes de finalizar o quiz.
</p>

`;

return;

}

quizFinished = true;

if(score === 6){

result.innerHTML = `

<h2>🌟 Excelente!</h2>

<p>
Você demonstrou excelente entendimento sobre agricultura,
tecnologia e sustentabilidade.
</p>

<p>
Pontuação final:
<strong>6/6</strong>
</p>

`;

}else if(score >= 3){

result.innerHTML = `

<h2>👍 Bom trabalho!</h2>

<p>
Você possui um bom entendimento sobre o tema.
</p>

<p>
Pontuação final:
<strong>${score}/6</strong>
</p>

`;

}else{

result.innerHTML = `

<h2>📚 Continue aprendendo!</h2>

<p>
Você ainda pode aprender mais sobre sustentabilidade
e tecnologia agrícola.
</p>

<p>
Pontuação final:
<strong>${score}/6</strong>
</p>

`;

}

}

/* ========================================= */
/* ANIMAÇÃO DOS CARDS */
/* ========================================= */

const cards = document.querySelectorAll(
".card, .infoCard, .techCard, .sustainCard"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.2
});

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform = "translateY(30px)";

card.style.transition = "0.7s ease";

observer.observe(card);

});

/* ========================================= */
/* HEADER EFEITO */
/* ========================================= */

window.addEventListener("scroll", () => {

const header = document.getElementById("header");

if(window.scrollY > 20){

header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";

}else{

header.style.boxShadow = "0 3px 15px rgba(0,0,0,0.05)";

}

});

/* ========================================= */
/* EFEITO DE DIGITAÇÃO */
/* ========================================= */

const heroTitle = document.querySelector(".mainTitle");

const originalTitle = "O futuro do agro começa agora";

heroTitle.innerHTML = "";

let index = 0;

function typingEffect(){

if(index < originalTitle.length){

heroTitle.innerHTML += originalTitle.charAt(index);

index++;

setTimeout(typingEffect,45);

}

}

setTimeout(() => {

typingEffect();

},2200);

/* ========================================= */
/* EFEITO NAS IMAGENS */
/* ========================================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

image.addEventListener("mouseenter", () => {

image.style.transform = "scale(1.02)";

image.style.transition = "0.4s";

});

image.addEventListener("mouseleave", () => {

image.style.transform = "scale(1)";

});

});

/* ========================================= */
/* RESPONSIVO */
/* ========================================= */

function checkMobile(){

if(window.innerWidth <= 768){

document.body.classList.add("mobile");

}else{

document.body.classList.remove("mobile");

}

}

checkMobile();

window.addEventListener("resize", checkMobile);

/* ========================================= */
/* PRELOAD IMAGENS */
/* ========================================= */

const imageList = [

"img/agro.jpg",
"img/agro2.jpg",
"img/tech.jpg",
"img/sust.jpg"

];

imageList.forEach(src => {

const img = new Image();

img.src = src;

});

/* ========================================= */
/* EFEITO BOTÕES */
/* ========================================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transition = "0.3s";

});

});

/* ========================================= */
/* CONSOLE */
/* ========================================= */

console.log(`

🌱 AGRINHO 2026

Projeto carregado com sucesso.

Tema:
Agro forte, futuro sustentável.

`);

/* ========================================= */
/* FINAL */
/* ========================================= */