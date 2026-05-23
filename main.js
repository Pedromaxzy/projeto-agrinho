/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1200);

});

/* =========================
   PAGE SYSTEM
========================= */

const navButtons =
document.querySelectorAll(".nav-btn");

const pages =
document.querySelectorAll(".page");

function changePage(pageId){

  pages.forEach(page => {

    page.classList.remove("active-page");

  });

  navButtons.forEach(btn => {

    btn.classList.remove("active");

  });

  document
    .getElementById(pageId)
    .classList.add("active-page");

  document
    .querySelector(`[data-page="${pageId}"]`)
    ?.classList.add("active");

}

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    const pageId =
    button.dataset.page;

    changePage(pageId);

  });

});

/* =========================
   HERO BUTTONS
========================= */

const heroButtons =
document.querySelectorAll("[data-page-target]");

heroButtons.forEach(button => {

  button.addEventListener("click", () => {

    const pageId =
    button.dataset.pageTarget;

    changePage(pageId);

  });

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.querySelector(".mobile-menu");

const overlay =
document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  overlay.classList.toggle("active");

});

overlay.addEventListener("click", closeMenu);

function closeMenu(){

  mobileMenu.classList.remove("active");

  overlay.classList.remove("active");

}

const mobileLinks =
document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    const pageId =
    link.dataset.page;

    changePage(pageId);

    closeMenu();

  });

});

/* =========================
   DARK MODE
========================= */

const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

  document.body.classList.add("dark-mode");

  themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const darkMode =
  document.body.classList.contains("dark-mode");

  if(darkMode){

    themeBtn.textContent = "☀️";

    localStorage.setItem("theme","dark");

  }else{

    themeBtn.textContent = "🌙";

    localStorage.setItem("theme","light");

  }

});

/* =========================
   COUNTER
========================= */

const counters =
document.querySelectorAll(".counter");

function startCounters(){

  counters.forEach(counter => {

    const target =
    +counter.dataset.target;

    let count = 0;

    const increment =
    target / 100;

    const updateCounter = () => {

      count += increment;

      if(count < target){

        counter.innerText =
        Math.floor(count) + "%";

        requestAnimationFrame(updateCounter);

      }else{

        counter.innerText =
        target + "%";

      }

    };

    updateCounter();

  });

}

startCounters();