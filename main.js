/* ========================================= */
/* AGRINHO 2026 - MAIN.JS */
/* ========================================= */

/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const pages = document.querySelectorAll(".page");

const themeToggle = document.getElementById("themeToggle");

const cards = document.querySelectorAll(
".card, .infoCard, .techCard, .sustainCard"
);

/* ========================================= */
/* VARIÁVEIS QUIZ */
/* ========================================= */

let score = 0;

let answeredQuestions = 0;

let quizFinished = false;

/* ========================================= */
/* LOADING SCREEN */
/* ========================================= */

window.addEventListener("load",()=>{

const loadingScreen =
document.getElementById("loadingScreen");

setTimeout(()=>{

loadingScreen.style.opacity = "0";

loadingScreen.style.pointerEvents = "none";

setTimeout(()=>{

loadingScreen.style.display = "none";

},1000);

},1800);

});

/* ========================================= */
/* NAVEGAÇÃO ENTRE SEÇÕES */
/* ========================================= */

function navigateTo(pageId){

pages.forEach(page=>{

page.classList.remove("active");

});

const selectedPage =
document.getElementById(pageId);

selectedPage.classList.add("active");

window.scrollTo({

top:0,
behavior:"smooth"

});

}

/* ========================================= */
/* DARK MODE */
/* ========================================= */

function applyTheme(theme){

if(theme === "dark"){

document.body.classList.add("dark");

themeToggle.textContent = "☀️";

}else{

document.body.classList.remove("dark");

themeToggle.textContent = "🌙";

}

}

/* ========================================= */
/* CARREGAR TEMA */
/* ========================================= */

function loadTheme(){

const savedTheme =
localStorage.getItem("agrinho-theme");

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

themeToggle.addEventListener("click",()=>{

if(document.body.classList.contains("dark")){

applyTheme("light");

localStorage.setItem(
"agrinho-theme",
"light"
);

}else{

applyTheme("dark");

localStorage.setItem(
"agrinho-theme",
"dark"
);

}

});

/* ========================================= */
/* ANIMAÇÃO DOS CARDS */
/* ========================================= */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},{
threshold:0.2
});

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition = `
0.8s ease
${index * 0.1}s
`;

observer.observe(card);

});

/* ========================================= */
/* HEADER SOMBRA */
/* ========================================= */

window.addEventListener("scroll",()=>{

const header =
document.getElementById("header");

if(window.scrollY > 20){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,0.12)";

}else{

header.style.boxShadow =
"0 5px 25px rgba(0,0,0,0.05)";

}

});

/* ========================================= */
/* EFEITO DIGITAÇÃO */
/* ========================================= */

const mainTitle =
document.querySelector(".mainTitle");

const originalText =
"O futuro do agro começa agora";

mainTitle.innerHTML = "";

let textIndex = 0;

function typingEffect(){

if(textIndex < originalText.length){

mainTitle.innerHTML +=
originalText.charAt(textIndex);

textIndex++;

setTimeout(typingEffect,45);

}

}

setTimeout(()=>{

typingEffect();

},2200);

/* ========================================= */
/* HOVER NAS IMAGENS */
/* ========================================= */

const images =
document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform =
"scale(1.03)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform =
"scale(1)";

});

});

/* ========================================= */
/* QUIZ */
/* ========================================= */

function answer(button,value){

if(quizFinished){

return;

}

const questionBlock =
button.parentElement;

if(questionBlock.dataset.answered
=== "true"){

return;

}

questionBlock.dataset.answered =
"true";

answeredQuestions++;

score += value;

const buttons =
questionBlock.querySelectorAll("button");

buttons.forEach(btn=>{

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

const result =
document.getElementById("quizResult");

if(answeredQuestions < 3){

result.innerHTML = `

<h2>
⚠️ Atenção
</h2>

<p>
Responda todas as perguntas
antes de finalizar o quiz.
</p>

`;

result.style.animation =
"pageFade 0.5s";

return;

}

quizFinished = true;

/* ========================================= */
/* RESULTADOS */
/* ========================================= */

if(score === 6){

result.innerHTML = `

<h2>
🌟 Excelente!
</h2>

<p>
Você demonstrou excelente
conhecimento sobre agricultura,
tecnologia e sustentabilidade.
</p>

<p>
Pontuação:
<strong>6/6</strong>
</p>

`;

}else if(score >= 3){

result.innerHTML = `

<h2>
👍 Bom trabalho!
</h2>

<p>
Você possui um bom entendimento
sobre o tema.
</p>

<p>
Pontuação:
<strong>${score}/6</strong>
</p>

`;

}else{

result.innerHTML = `

<h2>
📚 Continue aprendendo!
</h2>

<p>
Você ainda pode desenvolver mais
conhecimento sobre sustentabilidade
e agronegócio.
</p>

<p>
Pontuação:
<strong>${score}/6</strong>
</p>

`;

}

result.style.animation =
"pageFade 0.8s";

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

window.addEventListener(
"resize",
checkMobile
);

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

const background =
document.querySelector(
".backgroundAnimation"
);

background.style.transform =
`translateY(${scrolled * 0.03}px)`;

});

/* ========================================= */
/* EFEITO RIPPLE NOS BOTÕES */
/* ========================================= */

const allButtons =
document.querySelectorAll("button");

allButtons.forEach(button=>{

button.addEventListener("click",
function(e){

const circle =
document.createElement("span");

const diameter = Math.max(
button.clientWidth,
button.clientHeight
);

const radius = diameter / 2;

circle.style.width =
circle.style.height =
`${diameter}px`;

circle.style.left =
`${e.clientX -
button.offsetLeft -
radius}px`;

circle.style.top =
`${e.clientY -
button.offsetTop -
radius}px`;

circle.classList.add("ripple");

const ripple =
button.getElementsByClassName(
"ripple"
)[0];

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

🌱 PROJETO AGRINHO

Sistema carregado com sucesso.

✔ Navegação ativa
✔ Dark Mode funcionando
✔ Quiz funcionando
✔ Animações carregadas
✔ Responsividade ativa

`);

/* ========================================= */
/* FINAL */
/* ========================================= */