let randomNumber;

document.getElementById("play-button").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 101);
    document.getElementById("game-container").classList.remove("hidden");
    this.style.display = "none";
    document.getElementById("result").textContent = "";
});

document.getElementById("guess-button").addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("guess-input").value);
    
    if (isNaN(userGuess)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
    } else if (userGuess < 0 || userGuess > 100) {
        document.getElementById("result").textContent = "Please enter a number between 0 and 100.";
    } else {
        let resultMessage;

        if (userGuess === randomNumber) {
            resultMessage = "You are right! You guessed the number!";
            document.getElementById("result").textContent = resultMessage + " Click 'Play' to play again.";
            document.getElementById("play-button").style.display = "block";
        } else if (userGuess < randomNumber) {
            resultMessage = "Your guess is too low. Try again!";
        } else {
            resultMessage = "Your guess is too high. Try again!";
        }

        document.getElementById("result").textContent = resultMessage;
    }
});
