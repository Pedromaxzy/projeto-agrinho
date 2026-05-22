const themeBtn = document.getElementById("themeBtn");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "light"){

  document.body.classList.add("light-mode");

  themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const lightMode =
  document.body.classList.contains("light-mode");

  if(lightMode){

    themeBtn.textContent = "☀️";

    localStorage.setItem(
      "theme",
      "light"
    );

  }
  else{

    themeBtn.textContent = "🌙";

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

});