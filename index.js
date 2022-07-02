var winner = () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no. starts with 0, hence +1

  var randomImageSource = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  var player1 = document.querySelectorAll("fname")[0].value;
  var player2 = document.querySelectorAll("fname")[1].value;

  //Who wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1+" Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2+" Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
};

document.getElementById("play").addEventListener("click", winner);
