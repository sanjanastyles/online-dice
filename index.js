let winner = () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no. starts with 0, hence +1

  let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  let player1 = document.getElementById("fname").value;
  let player2 = document.getElementById("lname").value;

  //Who wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
};

function load() {
  const button = document.querySelector("#theme");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
  }

  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    // document.documentElement.classList.toggle("moon");
  });
}

window.addEventListener("DOMContentLoaded", load);
document.getElementById("play").addEventListener("click", winner);
