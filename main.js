/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click", () => {

  darkMode = !darkMode;

  if (darkMode) {

    document.body.classList.remove("light-mode");
    themeBtn.textContent = "🌙";

  } else {

    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";

  }

});

/* =========================
   SMOOTH SCROLL
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", e => {

    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

  });

});

/* =========================
   SCROLL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
  ".card, .tech-box, .stat, .impact-card, .floating-card"
);

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active-reveal");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".stat h3");

const animateCounter = (counter) => {

  const targetText = counter.innerText;

  const target = parseInt(targetText);

  let current = 0;

  const increment = target / 80;

  const updateCounter = () => {

    current += increment;

    if (current < target) {

      counter.innerText = `${Math.floor(current)}%`;

      requestAnimationFrame(updateCounter);

    } else {

      counter.innerText = `${target}%`;

    }

  };

  updateCounter();

};

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      animateCounter(
        entry.target
      );

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => {
  observer.observe(counter);
});

/* =========================
   PARALLAX EFFECT
========================= */

window.addEventListener("mousemove", (e) => {

  const glow = document.querySelector(".background-glow");

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  glow.style.transform = `
    translate(
      ${x * 30}px,
      ${y * 30}px
    )
  `;

});

/* =========================
   FLOATING EFFECT
========================= */

const floatingCard = document.querySelector(".floating-card");

window.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  floatingCard.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;

});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});

/* =========================
   TYPING EFFECT
========================= */

const heroTitle = document.querySelector(".hero-text h2");

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let i = 0;

const typingEffect = () => {

  if (i < originalText.length) {

    heroTitle.innerHTML += originalText.charAt(i);

    i++;

    setTimeout(typingEffect, 25);

  }

};

setTimeout(typingEffect, 400);

/* =========================
   PARTICLES
========================= */

const createParticle = () => {

  const particle = document.createElement("div");

  particle.classList.add("particle");

  document.body.appendChild(particle);

  const size = Math.random() * 5 + 2;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${Math.random() * window.innerWidth}px`;

  particle.style.animationDuration = `
    ${Math.random() * 10 + 5}s
  `;

  setTimeout(() => {
    particle.remove();
  }, 15000);

};

setInterval(createParticle, 300);

/* =========================
   SIMULATED LIVE DATA
========================= */

const impactNumbers = document.querySelectorAll(".stat h3");

setInterval(() => {

  impactNumbers.forEach(number => {

    const base = parseInt(number.innerText);

    const variation = Math.floor(
      Math.random() * 3
    );

    number.innerText = `${base + variation}%`;

  });

}, 4000);

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;

  progressBar.style.width = `${progress}%`;

});

/* =========================
   LOADING SCREEN
========================= */

const loader = document.createElement("div");

loader.classList.add("loader");

loader.innerHTML = `
  <div class="loader-logo">
    AGRINHO 2026
  </div>
`;

document.body.appendChild(loader);

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.classList.add("loader-hidden");

  }, 1800);

});

/* =========================
   DYNAMIC YEAR
========================= */

const footer = document.querySelector("footer p");

footer.innerHTML = `
  © ${new Date().getFullYear()}
  Projeto desenvolvido para o Concurso Agrinho 2026
`;

/* =========================
   SOUND EFFECT BUTTONS
========================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});

/* =========================
   RANDOM GLOW EFFECT
========================= */

setInterval(() => {

  document.body.style.boxShadow = `
    inset 0 0 120px rgba(
      ${Math.random() * 50},
      255,
      ${Math.random() * 255},
      0.08
    )
  `;

}, 2500);
