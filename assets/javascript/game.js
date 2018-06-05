    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var wins = 0;
    var losses = 0;
    var guesses = []
    var guessesLeft = 9;
document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (computerChoices.includes(userGuess)) {

        if (guesses.indexOf(userGuess) === -1) {
            if (userGuess === computerGuess) {
        wins++; guesses = []; guessesLeft = 9;
}
            else if (guessesLeft > 1) {
        guesses.push(userGuess);
    guessesLeft--;
}
            else {
        losses++;
    guessesLeft = 9;
    guesses = [];
}
}
}
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guessesLeft + "</p>" +
        "<p>guesses: " + guesses + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
}
