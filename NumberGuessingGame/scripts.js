var randomNum = Math.floor((Math.random() * 100) + 1);

var guessField = document.querySelector(".guessField");
var guessSubmit = document.querySelector(".guessSubmit");

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
	const guess = Number(guessField.value);

	if(guessCount === 1) {
		guesses.textContent = "Previous Guesses: ";
	}
	guesses.textContent += `${guess} `;

	if(guess === randomNum) {
		lastResult.textContent = "Congratulations! You got it right!";
		lastResult.style.backgroundColor = "green";
		lowOrHi.textContent = "";
		setGameOver();
	}
	else if(guessCount === 10) {
		lastResult.textContent = "!!!GAME OVER!!!";
		lastResult.style.backgroundColor = "blue";
		lowOrHi.textContent = "";
		setGameOver();
	}
	else {
		lastResult.textContent = "Wrong!";
		lastResult.style.backgroundColor = "red";
		if(guess < randomNum) {
			lowOrHi.textContent = "Your guess was too low!!";
		}
		if(guess > randomNum) {
			lowOrHi.textContent = "Your guess was too high!!";
		}
	}

	guessCount++;
	guessField.value = "";
	guessField.focus();
}

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Start new game";
	document.body.append(resetButton);
	resetButton.addEventListener("click", resetGame);
}

function resetGame() {
	guessCount = 1;
	let paras = document.querySelectorAll(".resultParas p");
	for(let p of paras) {
		p.textContent = "";
	}
	resetButton.parentNode.removeChild(resetButton);
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = "";
	guessField.focus();
	lastResult.style.backgroundColor = "white";
	randomNum = Math.floor((Math.random() * 100) + 1);
}

guessSubmit.addEventListener("click", checkGuess);