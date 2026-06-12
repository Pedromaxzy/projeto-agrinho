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

if(score === 10){

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
Pontuação: ${score}/10
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

pageTitle: "AgroFeed | Energia que move o campo",

loadingTitle: "AgroFeed",
loadingText: "Agro forte, futuro sustentável",

headerSubtitle: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",

navHome: "Início",
navAgriculture: "Agricultura",
navWind: "Energia Eólica",
navSustainability: "Sustentabilidade",
navQuiz: "Quiz",
navCredits: "Créditos",

heroTitle: "Energia que move o campo",
heroText: "O futuro do agronegócio depende da união entre produção, tecnologia e sustentabilidade. O AgroFeed apresenta como a energia eólica pode transformar o campo.",
heroButton1: "Explorar Agricultura",
heroButton2: "Conhecer Energia Eólica",

card1Title: "Produção Agrícola",
card1Text: "O Brasil está entre os maiores produtores de alimentos do mundo.",
card2Title: "Energia Renovável",
card2Text: "A energia eólica é uma fonte limpa e sustentável para o campo.",
card3Title: "Futuro Sustentável",
card3Text: "O equilíbrio entre produção e meio ambiente é essencial para o futuro.",

agricultureTitle: "Agricultura Brasileira",
agricultureSubtitle: "A força que alimenta o país e o mundo",

agricultureText1: "A agricultura brasileira possui papel fundamental na economia nacional.",
agricultureText2: "O Brasil é destaque mundial na produção de soja, milho, café e outras culturas.",
agricultureText3: "O avanço tecnológico aumentou a produtividade de forma sustentável.",
agricultureText4: "Máquinas modernas e sensores ajudam na eficiência do campo.",

windTitle: "Energia Eólica",
windSubtitle: "A força dos ventos impulsionando o agronegócio",

windText1: "A energia eólica é produzida a partir da força dos ventos.",
windText2: "É uma fonte limpa e renovável de energia.",
windText3: "No campo, pode ser usada para irrigação e produção agrícola.",
windText4: "Reduz custos e impactos ambientais.",

sustainabilityTitle: "Sustentabilidade",
sustainabilitySubtitle: "Produzir mais preservando os recursos naturais",

sustainabilityText1: "A sustentabilidade é essencial para o agronegócio moderno.",
sustainabilityText2: "Ajuda a preservar o solo e economizar água.",
sustainabilityText3: "Energias renováveis reduzem a emissão de poluentes.",
sustainabilityText4: "Garante equilíbrio entre produção e meio ambiente.",

infoSojaTitle: "Soja",
infoSojaText: "Uma das culturas mais importantes do Brasil.",

infoMilhoTitle: "Milho",
infoMilhoText: "Fundamental para alimentação humana e animal.",

infoCafeTitle: "Café",
infoCafeText: "Produto brasileiro reconhecido mundialmente.",

tech1Title: "Aerogeradores",
tech1Text: "Transformam energia dos ventos em eletricidade.",

tech2Title: "Energia Limpa",
tech2Text: "Produção sem emissão de poluentes.",

tech3Title: "Baixo Impacto",
tech3Text: "Reduz impacto ambiental das atividades humanas.",

sustain1Title: "Preservação do Solo",
sustain1Text: "Mantém a fertilidade e evita erosão.",

sustain2Title: "Economia de Água",
sustain2Text: "Uso eficiente de recursos hídricos.",

sustain3Title: "Rotação de Culturas",
sustain3Text: "Melhora a qualidade do solo.",

quizTitle: "Quiz AgroFeed",
quizSubtitle: "Teste seus conhecimentos sobre agricultura e energia",

finishQuiz: "Finalizar Quiz",

creditsTitle: "Créditos do Projeto",
creditsSubtitle: "Conheça o criador deste projeto",

schoolTitle: "Escola",
functionTitle: "Função no Projeto",

footerText: "Projeto educativo sobre agricultura, energia e sustentabilidade."

},

/* ========================================= */
/* ENGLISH */
/* ========================================= */

en: {

pageTitle: "AgroFeed | Energy that drives the countryside",

loadingTitle: "AgroFeed",
loadingText: "Strong agriculture, sustainable future",

headerSubtitle: "Strong agriculture, sustainable future: balance between production and environment",

navHome: "Home",
navAgriculture: "Agriculture",
navWind: "Wind Energy",
navSustainability: "Sustainability",
navQuiz: "Quiz",
navCredits: "Credits",

heroTitle: "Energy that drives the countryside",
heroText: "Agribusiness depends on the union of production, technology and sustainability.",
heroButton1: "Explore Agriculture",
heroButton2: "Discover Wind Energy",

card1Title: "Agricultural Production",
card1Text: "Brazil is one of the largest food producers in the world.",
card2Title: "Renewable Energy",
card2Text: "Wind energy is clean and sustainable.",
card3Title: "Sustainable Future",
card3Text: "Balance between production and environment is essential.",

agricultureTitle: "Brazilian Agriculture",
agricultureSubtitle: "The force that feeds the country and the world",

agricultureText1: "Brazilian agriculture plays a key role in the economy.",
agricultureText2: "The country is a global leader in soy, corn and coffee production.",
agricultureText3: "Technology has increased productivity sustainably.",
agricultureText4: "Modern machines improve efficiency in farming.",

windTitle: "Wind Energy",
windSubtitle: "The power of wind driving agriculture",

windText1: "Wind energy comes from wind movement.",
windText2: "It is a clean and renewable source.",
windText3: "It can power irrigation and rural systems.",
windText4: "It reduces costs and environmental impact.",

sustainabilityTitle: "Sustainability",
sustainabilitySubtitle: "Producing while preserving nature",

sustainabilityText1: "Sustainability is essential for modern farming.",
sustainabilityText2: "It helps preserve soil and save water.",
sustainabilityText3: "Renewable energy reduces pollution.",
sustainabilityText4: "Ensures balance between production and nature.",

infoSojaTitle: "Soybean",
infoSojaText: "One of Brazil's most important crops.",

infoMilhoTitle: "Corn",
infoMilhoText: "Essential for human and animal food.",

infoCafeTitle: "Coffee",
infoCafeText: "Brazilian product recognized worldwide.",

tech1Title: "Wind Turbines",
tech1Text: "Convert wind energy into electricity.",

tech2Title: "Clean Energy",
tech2Text: "Production without pollution emissions.",

tech3Title: "Low Impact",
tech3Text: "Reduces environmental impact.",

sustain1Title: "Soil Preservation",
sustain1Text: "Maintains fertility and prevents erosion.",

sustain2Title: "Water Saving",
sustain2Text: "Efficient use of water resources.",

sustain3Title: "Crop Rotation",
sustain3Text: "Improves soil quality.",

quizTitle: "AgroFeed Quiz",
quizSubtitle: "Test your knowledge",

finishQuiz: "Finish Quiz",

creditsTitle: "Project Credits",
creditsSubtitle: "Meet the creator",

schoolTitle: "School",
functionTitle: "Project Role",

footerText: "Educational project about agriculture, energy and sustainability."

},

/* ========================================= */
/* ESPAÑOL */
/* ========================================= */

es: {

pageTitle: "AgroFeed | Energía que mueve el campo",

loadingTitle: "AgroFeed",
loadingText: "Agro fuerte, futuro sostenible",

headerSubtitle: "Agro fuerte, futuro sostenible: equilibrio entre producción y medio ambiente",

navHome: "Inicio",
navAgriculture: "Agricultura",
navWind: "Energía Eólica",
navSustainability: "Sostenibilidad",
navQuiz: "Quiz",
navCredits: "Créditos",

heroTitle: "Energía que mueve el campo",
heroText: "El agronegocio depende de la unión entre producción, tecnología y sostenibilidad.",
heroButton1: "Explorar Agricultura",
heroButton2: "Conocer Energía Eólica",

card1Title: "Producción Agrícola",
card1Text: "Brasil es uno de los mayores productores de alimentos.",
card2Title: "Energía Renovable",
card2Text: "La energía eólica es limpia y sostenible.",
card3Title: "Futuro Sostenible",
card3Text: "El equilibrio entre producción y medio ambiente es clave.",

agricultureTitle: "Agricultura Brasileña",
agricultureSubtitle: "La fuerza que alimenta el país y el mundo",

agricultureText1: "La agricultura brasileña es fundamental para la economía.",
agricultureText2: "Brasil lidera la producción mundial de soja, maíz y café.",
agricultureText3: "La tecnología aumentó la productividad sostenible.",
agricultureText4: "Las máquinas modernas mejoran la eficiencia.",

windTitle: "Energía Eólica",
windSubtitle: "La fuerza del viento impulsando la agricultura",

windText1: "La energía eólica proviene del viento.",
windText2: "Es una fuente limpia y renovable.",
windText3: "Se usa en sistemas agrícolas.",
windText4: "Reduce costos e impacto ambiental.",

sustainabilityTitle: "Sostenibilidad",
sustainabilitySubtitle: "Producir preservando la naturaleza",

sustainabilityText1: "La sostenibilidad es esencial en la agricultura.",
sustainabilityText2: "Ayuda a conservar suelo y agua.",
sustainabilityText3: "Las energías renovables reducen contaminación.",
sustainabilityText4: "Equilibra producción y naturaleza.",

infoSojaTitle: "Soja",
infoSojaText: "Uno de los cultivos más importantes de Brasil.",

infoMilhoTitle: "Maíz",
infoMilhoText: "Esencial para alimentación humana y animal.",

infoCafeTitle: "Café",
infoCafeText: "Producto brasileño reconocido mundialmente.",

tech1Title: "Aerogeneradores",
tech1Text: "Convierten el viento en electricidad.",

tech2Title: "Energía Limpia",
tech2Text: "Producción sin contaminación.",

tech3Title: "Bajo Impacto",
tech3Text: "Reduce impacto ambiental.",

sustain1Title: "Conservación del Suelo",
sustain1Text: "Mantiene fertilidad del suelo.",

sustain2Title: "Ahorro de Agua",
sustain2Text: "Uso eficiente del agua.",

sustain3Title: "Rotación de Cultivos",
sustain3Text: "Mejora la calidad del suelo.",

quizTitle: "Quiz AgroFeed",
quizSubtitle: "Pon a prueba tus conocimientos",

finishQuiz: "Finalizar Quiz",

creditsTitle: "Créditos del Proyecto",
creditsSubtitle: "Conoce al creador",

schoolTitle: "Escuela",
functionTitle: "Función en el Proyecto",

footerText: "Proyecto educativo sobre agricultura, energía y sostenibilidad."
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

const elements = document.querySelectorAll("[data-translate]");

elements.forEach((element) => {

const key = element.getAttribute("data-translate");

if(translations[language][key]){
    element.textContent = translations[language][key];
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