/* ========================================= */
/* AGRINHO 2026 - MAIN.JS PREMIUM */
/* ========================================= */

/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const pages = document.querySelectorAll(".page");

const themeButton = document.getElementById("themeToggle");

const buttons = document.querySelectorAll("button");

const cards = document.querySelectorAll(
".card, .infoCard, .techCard, .sustainCard"
);

const cursor = document.querySelector(".cursor");

const clickSound = document.getElementById("clickSound");

const successSound = document.getElementById("successSound");

/* ========================================= */
/* VARIÁVEIS QUIZ */
/* ========================================= */

let score = 0;

let answeredQuestions = 0;

let quizFinished = false;

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

},2000);

});

/* ========================================= */
/* CURSOR */
/* ========================================= */

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

/* ========================================= */
/* CURSOR HOVER */
/* ========================================= */

buttons.forEach(button => {

button.addEventListener("mouseenter",()=>{

cursor.style.transform = "translate(-50%,-50%) scale(2)";

});

button.addEventListener("mouseleave",()=>{

cursor.style.transform = "translate(-50%,-50%) scale(1)";

});

});

/* ========================================= */
/* SONS */
/* ========================================= */

buttons.forEach(button => {

button.addEventListener("click",()=>{

if(clickSound){

clickSound.currentTime = 0;

clickSound.volume = 0.3;

clickSound.play();

}

});

});

/* ========================================= */
/* NAVEGAÇÃO */
/* ========================================= */

function navigateTo(pageId){

pages.forEach(page => {

page.style.opacity = "0";

page.style.transform = "translateY(20px)";

setTimeout(()=>{

page.classList.remove("active");

},300);

});

setTimeout(()=>{

const selectedPage = document.getElementById(pageId);

selectedPage.classList.add("active");

selectedPage.style.opacity = "0";

selectedPage.style.transform = "translateY(20px)";

setTimeout(()=>{

selectedPage.style.opacity = "1";

selectedPage.style.transform = "translateY(0)";

},50);

window.scrollTo({

top:0,
behavior:"smooth"

});

},350);

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

themeButton.addEventListener("click",()=>{

if(document.body.classList.contains("dark")){

applyTheme("light");

localStorage.setItem("agrinhoTheme","light");

}else{

applyTheme("dark");

localStorage.setItem("agrinhoTheme","dark");

}

});

/* ========================================= */
/* ANIMAÇÃO DOS CARDS */
/* ========================================= */

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

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform = "translateY(40px)";

card.style.transition = `
0.8s ease
${index * 0.08}s
`;

observer.observe(card);

});

/* ========================================= */
/* EFEITO HEADER */
/* ========================================= */

window.addEventListener("scroll",()=>{

const header = document.getElementById("header");

if(window.scrollY > 20){

header.style.boxShadow = `
0 10px 30px rgba(0,0,0,0.08)
`;

}else{

header.style.boxShadow = `
0 5px 25px rgba(0,0,0,0.05)
`;

}

});

/* ========================================= */
/* EFEITO DIGITAÇÃO */
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

setTimeout(()=>{

typingEffect();

},2300);

/* ========================================= */
/* HOVER IMAGENS */
/* ========================================= */

const images = document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform = "scale(1.03)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform = "scale(1)";

});

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

const buttonsInside = questionBlock.querySelectorAll("button");

buttonsInside.forEach(btn=>{

btn.disabled = true;

btn.style.opacity = "0.7";

});

/* ========================================= */
/* RESPOSTA CERTA */
/* ========================================= */

if(value === 2){

button.style.background = "#111";

button.style.color = "white";

button.style.transform = "scale(1.02)";

}else{

button.style.background = "#c62828";

button.style.color = "white";

}

/* ========================================= */
/* ANIMAÇÃO */
/* ========================================= */

button.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.05)"
},

{
transform:"scale(1)"
}

],{

duration:400

});

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

result.style.animation = "shake 0.4s";

return;

}

quizFinished = true;

/* ========================================= */
/* SOM SUCESSO */
/* ========================================= */

if(successSound){

successSound.volume = 0.4;

successSound.play();

}

/* ========================================= */
/* RESULTADOS */
/* ========================================= */

if(score === 6){

result.innerHTML = `

<h2>🌟 Excelente!</h2>

<p>
Você demonstrou excelente conhecimento sobre
agricultura, tecnologia e sustentabilidade.
</p>

<p>
Pontuação:
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
Pontuação:
<strong>${score}/6</strong>
</p>

`;

}else{

result.innerHTML = `

<h2>📚 Continue aprendendo!</h2>

<p>
Você ainda pode desenvolver mais conhecimento
sobre sustentabilidade e agronegócio.
</p>

<p>
Pontuação:
<strong>${score}/6</strong>
</p>

`;

}

result.style.animation = "pageFade 0.8s";

}

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

window.addEventListener("resize",checkMobile);

/* ========================================= */
/* PRELOAD IMAGENS */
/* ========================================= */

const imageList = [

"img/agro.jpg",
"img/agro2.jpg",
"img/tech.jpg",
"img/sust.jpg"

];

imageList.forEach(src=>{

const img = new Image();

img.src = src;

});

/* ========================================= */
/* PARALLAX SUAVE */
/* ========================================= */

window.addEventListener("scroll",()=>{

const scrolled = window.scrollY;

const bg = document.querySelector(".backgroundAnimation");

bg.style.transform = `
translateY(${scrolled * 0.05}px)
`;

});

/* ========================================= */
/* EFEITO RIPPLE */
/* ========================================= */

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle = document.createElement("span");

const diameter = Math.max(
button.clientWidth,
button.clientHeight
);

const radius = diameter / 2;

circle.style.width = circle.style.height =
`${diameter}px`;

circle.style.left =
`${e.clientX - button.offsetLeft - radius}px`;

circle.style.top =
`${e.clientY - button.offsetTop - radius}px`;

circle.classList.add("ripple");

const ripple = button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

/* ========================================= */
/* CONSOLE */
/* ========================================= */

console.log(`

🌱 AGRINHO 2026

Sistema carregado com sucesso.

✔ Navegação ativa
✔ Dark Mode ativo
✔ Cursor premium ativo
✔ Sons ativos
✔ Quiz funcional
✔ Animações carregadas

`);

/* ========================================= */
/* FINAL */
/* ========================================= */