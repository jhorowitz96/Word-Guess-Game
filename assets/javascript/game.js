// Creating an array of Sixers by last name
var sixers = ["butler", "redick", "embiid", "fultz", "simmons"];
var butler = ["b", "u", "t", "l", "e", "r"]
var redick = ["r", "e", "d", "i", "c", "k"]
var embiid = ["e", "m", "b", "i", "i", "d"]
var fultz = ["f", "u", "l", "t", "z"]
var simmons = ["s", "i", "m", "m", "o", "n", "s"]

var wins = "1";
var losses = "1";

var dashes = ""
var userGuess;
var newLetters;
var lettersGuessed;
var guessesLeft = 1;




function generateRandom() {
    return Math.floor(Math.random() * 5);

}


var selectedPlayer = sixers[generateRandom()]
console.log(selectedPlayer)


function createDashes() {
    for (var i = 0; i < selectedPlayer.length; i++) {
        dashes = dashes + "_"
    }

    function resetGame() {
        for (var i = 0; i < sixers.length; i++);
        return dashes;
    }
}


createDashes()
document.getElementById("user-text").innerText = dashes
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}



document.onkeyup = function (event) {
    var currentCharacter = document.getElementById("user-text").innerText
    userGuess = event.key.toLowerCase();


    newLetters = currentCharacter.replaceAt(selectedPlayer.indexOf(userGuess), userGuess);
    // document.getElementById("user-text").innerText = newLetters;
    console.log(userGuess);

    document.getElementById("letters-guessed").innerHTML += userGuess;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    // document.getElementById("wins").textContent = wins++;





    const isCorrect = selectedPlayer.includes(userGuess);



    if (isCorrect) {
        newLetters = currentCharacter.replaceAt(selectedPlayer.indexOf(userGuess), userGuess);
        document.getElementById("user-text").innerText = newLetters;
        // document.getElementById("wins").textContent = wins++;
        document.getElementById("guesses-left").innerHTML = guessesLeft++;
    } else {
        document.getElementById("letters-guessed").prepend(userGuess);
        document.getElementById("guesses-left").innerHTML = guessesLeft++;
    }

    if (userGuess >= 65 && userGuess <= 90) {
        userGuess(userGuess.toLowerCase());
    }

    // if dashes equal the characters in the selected player, add wins by 1.
    if ("user-text" === selectedPlayer) {
        document.getElementById("wins").innerText = wins++;
    }


    if (guessesLeft > 10) {
        alert("You Lose!");
    }

}

//     if (selectedPlayer.indexOf(userGuess) === -1){
//         console.log("Does not exist")
//     }
//     else {
//     console.log("Exists")
// 

// // Looping through each item in the array and logging a message to the console for now.
// for (var i = 0; i < sixers.length; i++) {
//     document.getElementById("user-text") = sixers[i];
// }
// // Original script below:



// if ((userGuess === "b") || (userGuess === "u") || (userGuess === "t")) || (userGuess === "l") || (userGuess === "e") || (userGuess === "r"){
//     document.getElementById("wins").innerHTML = "Wins: " + wins++;
// } else ((userGuess !== "b") || (userGuess !== "u") || (userGuess !== "t")) || (userGuess !== "l") || (userGuess !== "e") || (userGuess !== "r"){
//     document.getElementById("losses").innerHTML = "losses: " + losses++;
// };

// if ((userGuess === "r") || (userGuess === "e") || (userGuess === "d")) || (userGuess === "i") || (userGuess === "c") || (userGuess === "k"){
//     document.getElementById("wins").innerHTML = "Wins: " + wins++;
// } else ((userGuess !== "r") || (userGuess !== "e") || (userGuess !== "d")) || (userGuess !== "i") || (userGuess !== "c") || (userGuess !== "k"){
//     document.getElementById("losses").innerHTML = "losses: " + losses++;
// };

// if ((userGuess === "e") || (userGuess === "m") || (userGuess === "b")) || (userGuess === "i") || (userGuess === "d"){
//     document.getElementById("wins").innerHTML = "Wins: " + wins++;
// } else ((userGuess !== "e") || (userGuess !== "m") || (userGuess !== "b")) || (userGuess !== "i") || (userGuess !== "d"){
//     document.getElementById("losses").innerHTML = "losses: " + losses++;
// };

// if ((userGuess === "f") || (userGuess === "u") || (userGuess === "l")) || (userGuess === "t") || (userGuess === "z"){
//     document.getElementById("wins").innerHTML = "Wins: " + wins++;
// } else ((userGuess !== "f") || (userGuess !== "u") || (userGuess !== "l")) || (userGuess !== "t") || (userGuess !== "z"){
//     document.getElementById("losses").innerHTML = "losses: " + losses++;
// };

// if ((userGuess === "s") || (userGuess === "i") || (userGuess === "m")) || (userGuess === "o") || (userGuess === "n"){
//     document.getElementById("wins").innerHTML = "Wins: " + wins++;
// } else ((userGuess !== "s") || (userGuess !== "i") || (userGuess !== "m")) || (userGuess !== "o") || (userGuess !== "n"){
//     document.getElementById("losses").innerHTML = "losses: " + losses++;
// };










 
 