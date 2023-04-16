// Image1

var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Image2

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// condition

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}