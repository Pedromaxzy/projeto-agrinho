/* ========================================= */
/* PROJETO AGRINHO - MAIN.JS */
/* ========================================= */

/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const pages = document.querySelectorAll(".page");

const themeToggle =
document.getElementById("themeToggle");

const cards = document.querySelectorAll(
".card, .infoCard, .techCard, .sustainCard"
);

/* ========================================= */
/* VARIÁVEIS DO QUIZ */
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

},700);

},1400);

});

/* ========================================= */
/* NAVEGAÇÃO */
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
threshold:0.15
});

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform =
"translateY(20px)";

card.style.transition = `
0.5s ease
${index * 0.05}s
`;

observer.observe(card);

});

/* ========================================= */
/* SOMBRA HEADER */
/* ========================================= */

window.addEventListener("scroll",()=>{

const header =
document.getElementById("header");

if(window.scrollY > 10){

header.style.boxShadow =
"0 6px 18px rgba(0,0,0,0.08)";

}else{

header.style.boxShadow =
"0 4px 18px rgba(0,0,0,0.05)";

}

});

/* ========================================= */
/* EFEITO HOVER NAS IMAGENS */
/* ========================================= */

const images =
document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform =
"scale(1.02)";

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
/* COR DA RESPOSTA */
/* ========================================= */

if(value === 2){

button.style.background = "#111";

button.style.color = "white";

}else{

button.style.background = "#c62828";

button.style.color = "white";

}

/* ========================================= */
/* PEQUENA ANIMAÇÃO */
/* ========================================= */

button.style.transform =
"scale(1.02)";

setTimeout(()=>{

button.style.transform =
"scale(1)";

},200);

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
sobre o tema agrícola.
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

result.style.opacity = "0";

setTimeout(()=>{

result.style.transition =
"0.4s";

result.style.opacity = "1";

},50);

}

/* ========================================= */
/* RESPONSIVIDADE */
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
/* PRELOAD DAS IMAGENS */
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
/* CONSOLE */
/* ========================================= */

console.log(`

🌱 PROJETO AGRINHO

✔ Sistema carregado
✔ Navegação funcionando
✔ Dark mode ativo
✔ Quiz funcionando
✔ Site otimizado

`);

/* ========================================= */
/* FINAL */
/* ========================================= */