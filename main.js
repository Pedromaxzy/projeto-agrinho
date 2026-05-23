
/* =========================================================
   AGRINHO 2026 — MAIN.JS COMPLETO
   Tema:
   Agro forte, futuro sustentável:
   equilíbrio entre produção e meio ambiente

   FUNÇÕES:
   ✔ Menu ativo
   ✔ Scroll suave
   ✔ Fade animation
   ✔ Modo escuro
   ✔ Simulador agro
   ✔ Quiz interativo
   ✔ Botão voltar topo
   ✔ Contador animado
   ✔ Navbar dinâmica
   ✔ Alertas inteligentes
   ✔ Efeitos modernos
========================================================= */


/* =========================================================
   MENU ATIVO
========================================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================================================
   MODO ESCURO
========================================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️ Modo Claro";

    }else{

        themeBtn.innerHTML = "🌙 Modo Escuro";

    }

});


/* =========================================================
   ANIMAÇÃO FADE
========================================================= */

const fadeElements = document.querySelectorAll(".fade");

function fadeScroll(){

    fadeElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < window.innerHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", fadeScroll);

fadeScroll();


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================================================
   SIMULADOR AGRÍCOLA
========================================================= */

const calcularBtn = document.getElementById("calcularBtn");

if(calcularBtn){

    calcularBtn.addEventListener("click", () => {

        const hectares =
        Number(document.getElementById("hectares").value);

        const economia =
        hectares * 1250;

        const resultado =
        document.getElementById("resultado");

        resultado.style.display = "block";

        resultado.innerHTML = `
        🌱 Sua propriedade pode economizar
        aproximadamente
        <strong>${economia.toLocaleString("pt-BR")} litros</strong>
        de água por mês utilizando tecnologias sustentáveis.
        `;

    });

}


/* =========================================================
   QUIZ INTERATIVO
========================================================= */

const quizButtons =
document.querySelectorAll(".quiz-options button");

quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        const resposta =
        button.dataset.correct;

        if(resposta === "true"){

            alert("✅ Resposta correta!");

        }else{

            alert("❌ Resposta incorreta!");

        }

    });

});


/* =========================================================
   CONTADOR ANIMADO
========================================================= */

const counters =
document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / speed;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCount, 15);

        }else{

            counter.innerText =
            target;

        }

    };

    updateCount();

});


/* =========================================================
   NAVBAR SOMBRA AO ROLAR
========================================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";

    }else{

        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.08)";

    }

});


/* =========================================================
   EFEITO HOVER NOS CARDS
========================================================= */

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/* =========================================================
   SAUDAÇÃO DINÂMICA
========================================================= */

const saudacao =
document.getElementById("saudacao");

if(saudacao){

    const hora = new Date().getHours();

    if(hora < 12){

        saudacao.innerHTML =
        "☀️ Bom dia!";

    }else if(hora < 18){

        saudacao.innerHTML =
        "🌤️ Boa tarde!";

    }else{

        saudacao.innerHTML =
        "🌙 Boa noite!";

    }

}


/* =========================================================
   BARRA DE PROGRESSO DE LEITURA
========================================================= */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    if(progressBar){

        progressBar.style.width =
        progress + "%";

    }

});


/* =========================================================
   GALERIA COM ZOOM
========================================================= */

const galleryImages =
document.querySelectorAll(".gallery-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.classList.toggle("zoom");

    });

});


/* =========================================================
   ALERTA INICIAL
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log(
        "🌱 Projeto Agrinho 2026 carregado com sucesso!"
        );

    },1000);

});


/* =========================================================
   EFEITO DIGITAÇÃO
========================================================= */

const typing =
document.getElementById("typingText");

if(typing){

    const text =
    "Agro forte, futuro sustentável.";

    let index = 0;

    function escrever(){

        if(index < text.length){

            typing.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(escrever,70);

        }

    }

    escrever();

}


/* =========================================================
   PARALLAX HERO
========================================================= */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero");

    let offset =
    window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY =
        offset * 0.5 + "px";

    }

});


/* =========================================================
   BOTÃO DE MENSAGEM
========================================================= */

const btnMensagem =
document.getElementById("btnMensagem");

if(btnMensagem){

    btnMensagem.addEventListener("click", () => {

        alert(
        "🌿 Juntos podemos construir um futuro sustentável!"
        );

    });

}


/* =========================================================
   RELÓGIO DIGITAL
========================================================= */

const relogio =
document.getElementById("relogio");

function atualizarRelogio(){

    if(relogio){

        const agora = new Date();

        let horas =
        agora.getHours().toString().padStart(2,"0");

        let minutos =
        agora.getMinutes().toString().padStart(2,"0");

        let segundos =
        agora.getSeconds().toString().padStart(2,"0");

        relogio.innerHTML =
        `${horas}:${minutos}:${segundos}`;

    }

}

setInterval(atualizarRelogio,1000);


/* =========================================================
   SCROLL SUAVE BOTÕES
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================================================
   FINAL
========================================================= */

console.log(
"✅ MAIN.JS PREMIUM AGRINHO 2026 ATIVO"
);
