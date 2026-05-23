/* =========================
   LOADING SCREEN
========================= */

window.addEventListener(
  "load",
  () => {

    const loader =
    document.querySelector(".loader");

    loader.classList.add("hide");

  }
);

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

const overlay =
document.querySelector(".menu-overlay");

menuBtn.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "active"
    );

    overlay.classList.toggle(
      "active"
    );

  }
);

overlay.addEventListener(
  "click",
  () => {

    mobileMenu.classList.remove(
      "active"
    );

    overlay.classList.remove(
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
   PROGRESS BAR
========================= */

window.addEventListener(
  "scroll",
  () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    document.querySelector(
      ".progress-bar"
    ).style.width =
    progress + "%";

  }
);

/* =========================
   CONTADOR
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
    +counter.getAttribute(
      "data-target"
    );

    const current =
    +counter.innerText;

    const increment =
    target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(
        current + increment
      )}`;

      setTimeout(
        updateCounter,
        20
      );

    }
    else{

      counter.innerText =
      target;

    }

  };

  updateCounter();

});