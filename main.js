/* =========================
   LOADER
========================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      document
      .querySelector(".loader")
      .classList.add("hide");

    }, 1200);

  }
);

/* =========================
   THEME
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

    const isDark =
    document.body.classList.contains(
      "dark-mode"
    );

    if(isDark){

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
   PAGE SYSTEM
========================= */

const navButtons =
document.querySelectorAll(
  ".nav-btn"
);

const mobileButtons =
document.querySelectorAll(
  ".mobile-link"
);

const pageButtons =
document.querySelectorAll(
  "[data-page-target]"
);

const pages =
document.querySelectorAll(
  ".page"
);

function changePage(pageId){

  pages.forEach(page => {

    page.classList.remove(
      "active-page"
    );

  });

  document
  .getElementById(pageId)
  .classList.add("active-page");

  navButtons.forEach(btn => {

    btn.classList.remove(
      "active"
    );

    if(
      btn.dataset.page === pageId
    ){

      btn.classList.add(
        "active"
      );

    }

  });

  closeMenu();

}

navButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      changePage(
        button.dataset.page
      );

    }
  );

});

mobileButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      changePage(
        button.dataset.page
      );

    }
  );

});

pageButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      changePage(
        button.dataset.pageTarget
      );

    }
  );

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.getElementById(
  "menuBtn"
);

const mobileMenu =
document.querySelector(
  ".mobile-menu"
);

const overlay =
document.querySelector(
  ".overlay"
);

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

function closeMenu(){

  mobileMenu.classList.remove(
    "active"
  );

  overlay.classList.remove(
    "active"
  );

}

/* =========================
   COUNTERS
========================= */

const counters =
document.querySelectorAll(
  ".counter"
);

const speed = 200;

function animateCounters(){

  counters.forEach(counter => {

    const target =
    +counter.dataset.target;

    let count = 0;

    const updateCounter = () => {

      const increment =
      target / speed;

      count += increment;

      if(count < target){

        counter.innerText =
        Math.ceil(count);

        requestAnimationFrame(
          updateCounter
        );

      }
      else{

        counter.innerText =
        target;

      }

    };

    updateCounter();

  });

}

animateCounters();

/* =========================
   HEADER EFFECT
========================= */

window.addEventListener(
  "mousemove",
  (e) => {

    const header =
    document.querySelector(
      "header"
    );

    const x =
    (window.innerWidth / 2 - e.pageX)
    / 90;

    const y =
    (window.innerHeight / 2 - e.pageY)
    / 90;

    header.style.transform =
    `translate(${x}px, ${y}px)`;

  }
);