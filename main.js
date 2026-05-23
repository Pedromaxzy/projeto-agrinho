/* =========================
   LOADER
========================= */

window.addEventListener(
  "load",
  () => {

    document
    .querySelector(".loader")
    .classList.add("hide");

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
   MOBILE MENU
========================= */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.querySelector(".mobile-menu");

const overlay =
document.querySelector(".overlay");

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
  closeMenu
);

document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

  link.addEventListener(
    "click",
    closeMenu
  );

});

function closeMenu(){

  mobileMenu.classList.remove(
    "active"
  );

  overlay.classList.remove(
    "active"
  );

}

/* =========================
   REVEAL ANIMATION
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
   COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

const speed = 200;

const counterObserver =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter =
      entry.target;

      const updateCounter = () => {

        const target =
        +counter.getAttribute(
          "data-target"
        );

        const current =
        +counter.innerText;

        const increment =
        target / speed;

        if(current < target){

          counter.innerText =
          `${Math.ceil(
            current + increment
          )}`;

          setTimeout(
            updateCounter,
            10
          );

        }
        else{

          counter.innerText =
          target;

        }

      };

      updateCounter();

      counterObserver.unobserve(
        counter
      );

    }

  });

});

counters.forEach(counter => {

  counterObserver.observe(
    counter
  );

});

/* =========================
   HEADER EFFECT
========================= */

window.addEventListener(
  "scroll",
  () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

      header.style.padding =
      "15px 7%";

    }
    else{

      header.style.padding =
      "20px 7%";

    }

  }
);