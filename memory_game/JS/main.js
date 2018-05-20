

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = "queen";
var cardTwo = "king";

 cardsInPlay.push("cardOne");
 cardsInPlay.push("cardTwo");

console.log("user flipped queen");
console.log("user flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
}

else {
	alert("Sorry try again.")
}
