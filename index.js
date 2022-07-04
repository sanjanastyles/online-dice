var winner = () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no. starts with 0, hence +1

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);

  var player1 = document.getElementById("fname").value;
  var player2 = document.getElementById("lname").value;

  //Who wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
};

var theme = () => {
  var current = document.querySelectorAll("img")[0];

  var dark =
    "https://cdn.discordapp.com/attachments/773668004004757514/992797197160698017/unknown.png";

  var light =
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png";

  if (current.src === light) {
    current.setAttribute("src", dark);
    document.querySelector("body").style.backgroundColor = "#232931";
    document.getElementById("play").style.backgroundColor = "#232931";
    document.getElementById("theme").style.backgroundColor = "#232931";
    document.getElementById("fname").style.color = "#fff";
    document.getElementById("lname").style.color = "#fff";
    document.getElementById("fname").style.borderBottomColor = "#fff";
    document.getElementById("lname").style.borderBottomColor = "#fff";
  } else {
    current.setAttribute("src", light);
  }
};

document.getElementById("play").addEventListener("click", winner);

document.getElementById("theme").addEventListener("click", theme);
