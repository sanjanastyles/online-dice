var arrPlay2=new Array();
var arrPlay1=new Array();

var winner = () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no. starts with 0, hence +1

  var randomImageSource = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
  var player1 = document.getElementById("fname").value;
  var player2 = document.getElementById("lname").value;
  
  //Who wins
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = player1 +" wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML =player2 +" wins!";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
};

document.getElementById("play").addEventListener("click", winner);
