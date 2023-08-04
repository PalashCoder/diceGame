var num = Math.floor(Math.random() * 6) + 1;
var num2 = prompt("Please Enter A dice number You Want to Give (1-6) : ");
var image1 = "images/dice" + num + ".png";
var image2 = "images/dice" + num2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (num > num2) {
    document.querySelector("h2.win").innerHTML = "🚩 Player 1 Wins";
}
else if (num < num2) {
    document.querySelector("h2.win").innerHTML = "You Wins 🚩";
}
else
    document.querySelector("h2.win").innerHTML = "🚩 It's A Draw 🚩";