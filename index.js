var cube1 = document.querySelector('.cube1');
var cube2 = document.querySelector('.cube2');
var currentClass1 = '';
var currentClass2 = '';

let winner = () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var ResultClass1 = 'result-' + randomNumber1;
  console.log(ResultClass1);
  if ( currentClass1 ) {
    cube1.classList.remove( currentClass1 );
  }
  cube1.classList.add( ResultClass1 );
  currentClass1 = ResultClass1;

 let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var ResultClass2 = 'result-' + randomNumber2;
  console.log(ResultClass2);
  if ( currentClass2 ) {
    cube2.classList.remove( currentClass2 );
  }
  cube2.classList.add( ResultClass2 );
  currentClass2 = ResultClass2;

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

function theme() {
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

window.addEventListener("DOMContentLoaded", theme);
document.getElementById("play").addEventListener("click", winner);
