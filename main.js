/* =========================
   DARK MODE
========================= */

const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

  document.body.classList.add(
    "dark-mode"
  );

  themeBtn.textContent = "☀️";

}

themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark-mode"
    );

    const darkMode =
    document.body.classList.contains(
      "dark-mode"
    );

    if(darkMode){

      localStorage.setItem(
        "theme",
        "dark"
      );

      themeBtn.textContent = "☀️";

    }
    else{

      localStorage.setItem(
        "theme",
        "light"
      );

      themeBtn.textContent = "🌙";

    }

  }
);

/* =========================
   MENU MOBILE
========================= */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.querySelector(".mobile-menu");

menuBtn.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "active"
    );

  }
);

/* =========================
   ANIMAÇÃO SCROLL
========================= */

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(reveal => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      reveal.classList.add(
        "active"
      );

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================
   CONTADOR
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target =
    +counter.getAttribute(
      "data-target"
    ) || +counter.innerText;

    const current =
    +counter.innerText;

    const increment =
    target / 80;

    if(current < target){

      counter.innerText =
      `${Math.ceil(
        current + increment
      )}`;

      setTimeout(
        updateCounter,
        30
      );

    }
    else{

      counter.innerText =
      target;

    }

  };

});