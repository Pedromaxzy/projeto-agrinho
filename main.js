/* ===================================================== */
/* AGRINHO 2026 - MAIN.JS                                */
/* ===================================================== */

/* ===================================================== */
/* VARIÁVEIS GLOBAIS                                     */
/* ===================================================== */

let currentPage = "home";

let quizScore = 0;

let answeredQuestions = 0;

let quizLocked = false;

const pages = document.querySelectorAll(".page");

const themeButton = document.getElementById("themeToggle");

/* ===================================================== */
/* LOADING SCREEN                                        */
/* ===================================================== */

window.addEventListener("load", () => {

const loading = document.getElementById("loadingScreen");

setTimeout(() => {

loading.style.opacity = "0";

loading.style.pointerEvents = "none";

setTimeout(() => {

loading.style.display = "none";

},1000);

},2200);

});

/* ===================================================== */
/* NAVEGAÇÃO ENTRE PÁGINAS                               */
/* ===================================================== */

function navigateTo(pageId){

pages.forEach(page => {

page.classList.remove("active");

});

const targetPage = document.getElementById(pageId);

if(targetPage){

targetPage.classList.add("active");

currentPage = pageId;

window.scrollTo({

top:0,
behavior:"smooth"

});

}

}

/* ===================================================== */
/* DARK MODE                                             */
/* ===================================================== */

function applyTheme(theme){

if(theme === "dark"){

document.body.classList.remove("light");

document.body.classList.add("dark");

themeButton.textContent = "☀️";

}else{

document.body.classList.remove("dark");

document.body.classList.add("light");

themeButton.textContent = "🌙";

}

}

/* ===================================================== */
/* CARREGAR TEMA                                         */
/* ===================================================== */

function loadTheme(){

const savedTheme = localStorage.getItem("agrinhoTheme");

if(savedTheme){

applyTheme(savedTheme);

}else{

applyTheme("dark");

}

}

loadTheme();

/* ===================================================== */
/* TROCAR TEMA                                           */
/* ===================================================== */

themeButton.addEventListener("click", () => {

if(document.body.classList.contains("dark")){

applyTheme("light");

localStorage.setItem("agrinhoTheme","light");

}else{

applyTheme("dark");

localStorage.setItem("agrinhoTheme","dark");

}

});

/* ===================================================== */
/* QUIZ                                                  */
/* ===================================================== */

function answer(button,value){

if(quizLocked){

return;

}

const question = button.parentElement;

if(question.dataset.answered === "true"){

return;

}

question.dataset.answered = "true";

answeredQuestions++;

quizScore += value;

const buttons = question.querySelectorAll("button");

buttons.forEach(btn => {

btn.disabled = true;

btn.style.opacity = "0.6";

});

button.style.opacity = "1";

if(value === 2){

button.style.background = "#00ff88";

button.style.color = "#000";

button.style.transform = "scale(1.03)";

}else{

button.style.background = "#ff3b3b";

button.style.color = "#fff";

}

}

/* ===================================================== */
/* FINALIZAR QUIZ                                        */
/* ===================================================== */

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

quizLocked = true;

if(quizScore === 6){

result.innerHTML = `
<h2>🌟 Excelente!</h2>

<p>
Você demonstrou excelente entendimento sobre agricultura,
tecnologia e sustentabilidade.
</p>

<p>
Pontuação final: <strong>6/6</strong>
</p>
`;

}else if(quizScore >= 3){

result.innerHTML = `
<h2>👍 Bom trabalho!</h2>

<p>
Você possui um bom conhecimento sobre o tema,
mas ainda pode aprender mais.
</p>

<p>
Pontuação final: <strong>${quizScore}/6</strong>
</p>
`;

}else{

result.innerHTML = `
<h2>📚 Continue aprendendo!</h2>

<p>
Você ainda pode desenvolver mais conhecimentos
sobre agricultura sustentável e tecnologia no campo.
</p>

<p>
Pontuação final: <strong>${quizScore}/6</strong>
</p>
`;

}

}

/* ===================================================== */
/* PARTICLES CANVAS                                      */
/* ===================================================== */

const canvas = document.getElementById("backgroundCanvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

/* ===================================================== */
/* REDIMENSIONAR                                         */
/* ===================================================== */

window.addEventListener("resize", () => {

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});

/* ===================================================== */
/* PARTICLE CLASS                                        */
/* ===================================================== */

class Particle{

constructor(){

this.x = Math.random() * canvas.width;

this.y = Math.random() * canvas.height;

this.size = Math.random() * 3 + 1;

this.speedX = (Math.random() - 0.5) * 0.7;

this.speedY = (Math.random() - 0.5) * 0.7;

this.opacity = Math.random() * 0.5 + 0.2;

}

update(){

this.x += this.speedX;

this.y += this.speedY;

if(this.x < 0){

this.x = canvas.width;

}

if(this.x > canvas.width){

this.x = 0;

}

if(this.y < 0){

this.y = canvas.height;

}

if(this.y > canvas.height){

this.y = 0;

}

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle = `rgba(0,255,136,${this.opacity})`;

ctx.fill();

}

}

/* ===================================================== */
/* ARRAY DE PARTICULAS                                   */
/* ===================================================== */

const particles = [];

/* ===================================================== */
/* INICIALIZAR                                           */
/* ===================================================== */

function initParticles(){

particles.length = 0;

for(let i = 0; i < 140; i++){

particles.push(new Particle());

}

}

initParticles();

/* ===================================================== */
/* CONECTAR LINHAS                                       */
/* ===================================================== */

function connectParticles(){

for(let a = 0; a < particles.length; a++){

for(let b = a; b < particles.length; b++){

let dx = particles[a].x - particles[b].x;

let dy = particles[a].y - particles[b].y;

let distance = dx * dx + dy * dy;

if(distance < 12000){

ctx.beginPath();

ctx.strokeStyle = "rgba(0,255,136,0.05)";

ctx.lineWidth = 1;

ctx.moveTo(particles[a].x,particles[a].y);

ctx.lineTo(particles[b].x,particles[b].y);

ctx.stroke();

}

}

}

}

/* ===================================================== */
/* ANIMAR PARTICLES                                      */
/* ===================================================== */

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(particle => {

particle.update();

particle.draw();

});

connectParticles();

requestAnimationFrame(animateParticles);

}

animateParticles();

/* ===================================================== */
/* EFEITO HEADER                                         */
/* ===================================================== */

window.addEventListener("scroll", () => {

const header = document.getElementById("header");

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,0.75)";

header.style.boxShadow = "0 0 20px rgba(0,255,136,0.1)";

}else{

header.style.background = "rgba(0,0,0,0.4)";

header.style.boxShadow = "none";

}

});

/* ===================================================== */
/* REVELAR CARDS                                         */
/* ===================================================== */

const animatedCards = document.querySelectorAll(
".statCard, .contentCard, .techCard, .sustainCard, .futureCard"
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

animatedCards.forEach(card => {

card.style.opacity = "0";

card.style.transform = "translateY(40px)";

card.style.transition = "0.7s ease";

observer.observe(card);

});

/* ===================================================== */
/* GALERIA HOVER                                         */
/* ===================================================== */

const galleryImages = document.querySelectorAll(".galleryGrid img");

galleryImages.forEach(image => {

image.addEventListener("mouseenter", () => {

image.style.transform = "scale(1.05) rotate(1deg)";

});

image.addEventListener("mouseleave", () => {

image.style.transform = "scale(1) rotate(0deg)";

});

});

/* ===================================================== */
/* MICRO INTERAÇÃO MOUSE                                 */
/* ===================================================== */

document.addEventListener("mousemove", e => {

const x = e.clientX / window.innerWidth;

const y = e.clientY / window.innerHeight;

document.body.style.backgroundPosition =
`${x * 20}px ${y * 20}px`;

});

/* ===================================================== */
/* TEXTO DIGITANDO                                       */
/* ===================================================== */

const heroTitle = document.querySelector(".heroText h2");

const originalText = heroTitle.innerText;

heroTitle.innerText = "";

let typeIndex = 0;

function typeWriter(){

if(typeIndex < originalText.length){

heroTitle.innerText += originalText.charAt(typeIndex);

typeIndex++;

setTimeout(typeWriter,50);

}

}

setTimeout(typeWriter,2500);

/* ===================================================== */
/* BOTÕES HERO                                           */
/* ===================================================== */

const heroButtons = document.querySelectorAll(".heroButtons button");

heroButtons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.letterSpacing = "1px";

});

button.addEventListener("mouseleave", () => {

button.style.letterSpacing = "0px";

});

});

/* ===================================================== */
/* EFEITO FLUTUAR                                        */
/* ===================================================== */

const floatingCards = document.querySelectorAll(
".statCard,.futureCard"
);

floatingCards.forEach((card,index) => {

setInterval(() => {

card.style.transform = `
translateY(${Math.sin(Date.now()/700 + index)*4}px)
`;

},30);

});

/* ===================================================== */
/* DETECTAR MOBILE                                       */
/* ===================================================== */

function isMobile(){

return window.innerWidth <= 768;

}

if(isMobile()){

document.body.classList.add("mobile");

}

/* ===================================================== */
/* RECARREGAR MOBILE                                     */
/* ===================================================== */

window.addEventListener("resize", () => {

if(isMobile()){

document.body.classList.add("mobile");

}else{

document.body.classList.remove("mobile");

}

});

/* ===================================================== */
/* PRELOAD IMAGES                                        */
/* ===================================================== */

const imageSources = [

"img/agro.jpg",
"img/agro2.jpg",
"img/tech.jpg",
"img/sust.jpg"

];

imageSources.forEach(src => {

const img = new Image();

img.src = src;

});

/* ===================================================== */
/* CONSOLE MESSAGE                                       */
/* ===================================================== */

console.log(`
🌱 AGRINHO 2026

Projeto carregado com sucesso.

Tecnologia + Sustentabilidade + Futuro.

`);

/* ===================================================== */
/* FINAL                                                 */
/* ===================================================== */