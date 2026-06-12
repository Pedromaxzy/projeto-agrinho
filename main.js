/* ========================================= */
/* LOADING SCREEN */
/* ========================================= */

window.addEventListener("load", () => {

const loadingScreen =
document.getElementById("loadingScreen");

setTimeout(() => {

loadingScreen.style.opacity = "0";

loadingScreen.style.pointerEvents = "none";

setTimeout(() => {

loadingScreen.style.display = "none";

}, 700);

}, 1800);

});

/* ========================================= */
/* PAGE NAVIGATION */
/* ========================================= */

function navigateTo(pageId){

const pages =
document.querySelectorAll(".page");

pages.forEach((page) => {

page.classList.remove("active");

});

const targetPage =
document.getElementById(pageId);

targetPage.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}
/* ========================================= */
/* DARK MODE */
/* ========================================= */

const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

/* LOAD THEME */

if(savedTheme === "dark"){

document.body.classList.add("dark");

themeToggle.textContent = "☀️";

}else{

themeToggle.textContent = "🌙";

}

/* TOGGLE */

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

const isDark =
document.body.classList.contains("dark");

if(isDark){

themeToggle.textContent = "☀️";

localStorage.setItem("theme", "dark");

}else{

themeToggle.textContent = "🌙";

localStorage.setItem("theme", "light");

}

});

/* ========================================= */
/* QUIZ */
/* ========================================= */

let score = 0;

let answeredQuestions = [];

/* ANSWER */

function answer(button, points){

const questionBlock =
button.parentElement;

const buttons =
questionBlock.querySelectorAll("button");

/* PREVENT MULTIPLE ANSWERS */

if(answeredQuestions.includes(questionBlock)){
return;
}

answeredQuestions.push(questionBlock);

/* ADD SCORE */

score += points;

/* BUTTON VISUAL */

buttons.forEach((btn) => {

btn.style.opacity = "0.5";

btn.disabled = true;

});

/* SELECTED BUTTON */

button.style.opacity = "1";

button.style.transform = "scale(1.03)";

/* CORRECT / WRONG */

if(points === 2){

button.style.background = "#63d471";

button.style.color = "#111";

}else{

button.style.background = "#ff5f5f";

button.style.color = "white";

}

}

/* FINISH QUIZ */

function finishQuiz(){

const result =
document.getElementById("quizResult");

let message = "";

/* RESULT */

if(score === 6){

message =
"🌟 Excelente! Você possui um ótimo entendimento sobre agricultura, tecnologia e sustentabilidade.";

}else if(score >= 3){

message =
"✅ Bom trabalho! Você entende bastante sobre o tema Agrinho.";

}else{

message =
"📚 Continue aprendendo! Conhecimento é essencial para construir um futuro sustentável.";

}

/* SHOW RESULT */

result.innerHTML = `

<div class="resultBox">

<h2>
Pontuação: ${score}/6
</h2>

<p>
${message}
</p>

</div>

`;

}

/* ========================================= */
/* LANGUAGE SYSTEM */
/* ========================================= */

const translations = {

/* ========================================= */
/* PORTUGUÊS */
/* ========================================= */

pt: {

loadingTitle:
"Projeto Agrinho",

loadingText:
"Agro forte, futuro sustentável",

headerSubtitle:
"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",

navHome:
"Início",

navAgriculture:
"Agricultura",

navTechnology:
"Tecnologia",

navSustainability:
"Sustentabilidade",

navQuiz:
"Quiz",

navCredits:
"Créditos",

heroTitle:
"O futuro do agro começa agora",

heroText:
"O agronegócio brasileiro é uma das maiores forças econômicas do planeta. A união entre tecnologia, produtividade e sustentabilidade garante desenvolvimento, geração de empregos e preservação ambiental.",

heroButton1:
"Explorar Agricultura",

heroButton2:
"Conhecer Tecnologia",

card1Title:
"Produção Agrícola",

card1Text:
"O Brasil é referência mundial na produção de alimentos e exportação agrícola.",

card2Title:
"Tecnologia no Campo",

card2Text:
"Máquinas modernas aumentam a produtividade e reduzem desperdícios.",

card3Title:
"Sustentabilidade",

card3Text:
"O equilíbrio entre produção e meio ambiente é essencial para o futuro.",

agricultureTitle:
"Agricultura Brasileira",

agricultureSubtitle:
"Uma das maiores potências agrícolas do mundo",

technologyTitle:
"Tecnologia no Campo",

technologySubtitle:
"A inovação transformando a agricultura",

sustainabilityTitle:
"Sustentabilidade",

sustainabilitySubtitle:
"Produzir preservando o meio ambiente",

quizTitle:
"Quiz Agrinho",

quizSubtitle:
"Teste seus conhecimentos",

finishQuiz:
"Finalizar Quiz",

creditsTitle:
"Créditos do Projeto",

creditsSubtitle:
"Conheça o criador deste projeto Agrinho",

creatorRole:
"Criador e Desenvolvedor do Projeto",

schoolTitle:
"Escola",

functionTitle:
"Função no Projeto",

functionText:
"Desenvolvimento Front-End, Design do Site e programação JavaScript.",

phraseTitle:
"Frase",

phraseText:
"\"O futuro da agricultura nasce da união entre tecnologia, consciência ambiental e inovação.\"",

footerText:
"Projeto educativo desenvolvido para o concurso Agrinho 2026 com foco em agricultura, tecnologia e sustentabilidade."

},

/* ========================================= */
/* ENGLISH */
/* ========================================= */

en: {

loadingTitle:
"Agrinho Project",

loadingText:
"Strong agriculture, sustainable future",

headerSubtitle:
"Strong agriculture, sustainable future: balance between production and environment",

navHome:
"Home",

navAgriculture:
"Agriculture",

navTechnology:
"Technology",

navSustainability:
"Sustainability",

navQuiz:
"Quiz",

navCredits:
"Credits",

heroTitle:
"The future of agriculture starts now",

heroText:
"Brazilian agribusiness is one of the greatest economic forces on the planet. The union between technology, productivity and sustainability guarantees development and environmental preservation.",

heroButton1:
"Explore Agriculture",

heroButton2:
"Discover Technology",

card1Title:
"Agricultural Production",

card1Text:
"Brazil is a world reference in food production and agricultural exports.",

card2Title:
"Technology in the Field",

card2Text:
"Modern machines increase productivity and reduce waste.",

card3Title:
"Sustainability",

card3Text:
"The balance between production and the environment is essential for the future.",

agricultureTitle:
"Brazilian Agriculture",

agricultureSubtitle:
"One of the largest agricultural powers in the world",

technologyTitle:
"Technology in Agriculture",

technologySubtitle:
"Innovation transforming agriculture",

sustainabilityTitle:
"Sustainability",

sustainabilitySubtitle:
"Producing while preserving the environment",

quizTitle:
"Agrinho Quiz",

quizSubtitle:
"Test your knowledge",

finishQuiz:
"Finish Quiz",

creditsTitle:
"Project Credits",

creditsSubtitle:
"Meet the creator of this Agrinho project",

creatorRole:
"Project Creator and Developer",

schoolTitle:
"School",

functionTitle:
"Project Role",

functionText:
"Front-End development, website design and JavaScript programming.",

phraseTitle:
"Phrase",

phraseText:
"\"The future of agriculture is born from the union of technology, environmental awareness and innovation.\"",

footerText:
"Educational project developed for the Agrinho 2026 contest focusing on agriculture, technology and sustainability."

},

/* ========================================= */
/* ESPAÑOL */
/* ========================================= */

es: {

loadingTitle:
"Proyecto Agrinho",

loadingText:
"Agro fuerte, futuro sostenible",

headerSubtitle:
"Agro fuerte, futuro sostenible: equilibrio entre producción y medio ambiente",

navHome:
"Inicio",

navAgriculture:
"Agricultura",

navTechnology:
"Tecnología",

navSustainability:
"Sostenibilidad",

navQuiz:
"Quiz",

navCredits:
"Créditos",

heroTitle:
"El futuro de la agricultura comienza ahora",

heroText:
"El agronegocio brasileño es una de las mayores fuerzas económicas del planeta. La unión entre tecnología, productividad y sostenibilidad garantiza desarrollo y preservación ambiental.",

heroButton1:
"Explorar Agricultura",

heroButton2:
"Conocer Tecnología",

card1Title:
"Producción Agrícola",

card1Text:
"Brasil es referencia mundial en producción de alimentos y exportación agrícola.",

card2Title:
"Tecnología en el Campo",

card2Text:
"Las máquinas modernas aumentan la productividad y reducen desperdicios.",

card3Title:
"Sostenibilidad",

card3Text:
"El equilibrio entre producción y medio ambiente es esencial para el futuro.",

agricultureTitle:
"Agricultura Brasileña",

agricultureSubtitle:
"Una de las mayores potencias agrícolas del mundo",

technologyTitle:
"Tecnología en el Campo",

technologySubtitle:
"La innovación transformando la agricultura",

sustainabilityTitle:
"Sostenibilidad",

sustainabilitySubtitle:
"Producir preservando el medio ambiente",

quizTitle:
"Quiz Agrinho",

quizSubtitle:
"Pon a prueba tus conocimientos",

finishQuiz:
"Finalizar Quiz",

creditsTitle:
"Créditos del Proyecto",

creditsSubtitle:
"Conoce al creador de este proyecto Agrinho",

creatorRole:
"Creador y Desarrollador del Proyecto",

schoolTitle:
"Escuela",

functionTitle:
"Función en el Proyecto",

functionText:
"Desarrollo Front-End, diseño del sitio y programación JavaScript.",

phraseTitle:
"Frase",

phraseText:
"\"El futuro de la agricultura nace de la unión entre tecnología, conciencia ambiental e innovación.\"",

footerText:
"Proyecto educativo desarrollado para el concurso Agrinho 2026 enfocado en agricultura, tecnología y sostenibilidad."

}

};

/* ========================================= */
/* LANGUAGE SELECT */
/* ========================================= */

const languageSelect =
document.getElementById("languageSelect");

/* LOAD LANGUAGE */

const savedLanguage =
localStorage.getItem("language") || "pt";

languageSelect.value =
savedLanguage;

changeLanguage(savedLanguage);

/* CHANGE EVENT */

languageSelect.addEventListener("change", (e) => {

const selectedLanguage =
e.target.value;

changeLanguage(selectedLanguage);

localStorage.setItem(
"language",
selectedLanguage
);

});

/* ========================================= */
/* CHANGE LANGUAGE */
/* ========================================= */

function changeLanguage(language){

const elements =
document.querySelectorAll("[data-translate]");

elements.forEach((element) => {

const key =
element.getAttribute("data-translate");

if(translations[language][key]){

element.textContent =
translations[language][key];

}

});

}

/* ========================================= */
/* SCROLL HEADER EFFECT */
/* ========================================= */

window.addEventListener("scroll", () => {

const header =
document.getElementById("header");

if(window.scrollY > 20){

header.style.background =
"rgba(17,17,17,0.95)";

header.style.backdropFilter =
"blur(10px)";

}else{

header.style.background =
"#111";

header.style.backdropFilter =
"none";

}

});

/* ========================================= */
/* CONSOLE MESSAGE */
/* ========================================= */

console.log(
"%c🌱 Projeto Agrinho carregado com sucesso!",
"color:#63d471; font-size:16px; font-weight:bold;"
);