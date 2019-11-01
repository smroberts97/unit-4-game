//set variables to 0 for each crystal
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//set variables for each tally or counter to 0
var wins = 0;
var losses = 0;
var score = 0;

//write a function that produces a random number w/a max and min value
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//set a new variable "goal" that user is trying to reach; write function
//that sets a new random number as a goal b/t 12-100
var goal = randomNumber(12, 100);
$("#goal").text("Goal: " + goal);

//write the function that resets the game and sets scores and values to 0
//print the goal and score on the screen
function resetGame() {
    score = 0;
    $("#score").text("Score: " + score);
    goal = randomNumber(19, 120);
    $("#goal").text("Goal: " + goal);
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;
}

//function to look for the winning number which matches the score to the goal
//resets the game when user wins or loses. User loses when score exceeds goal
function checkWin() {
    if (score === goal) {
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }
    else if (score > goal) {
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame()
    }
}

//functions per crystal to reset its random number that occurs when user clicks crystal
//console log the function to be sure it works
//add the value of the crystal to the score each time user clicks
//Crystal 1
$("#crystal1").on("click", function() {
    if (crystal1 === 0) {
        crystal1 = randomNumber(1, 12);
        console.log(crystal1);
    }
    score += crystal1;
    $("#score").text("Score: " + score);
    checkWin();
});

//Crystal 2
$("#crystal2").on("click", function() {
    if (crystal2 === 0) {
        crystal2 = randomNumber(1, 12);
        console.log(crystal2);
    }
    score += crystal2;
    $("#score").text("Score: " + score);
    checkWin();
});

//Crystal 3
$("#crystal3").on("click", function() {
    if (crystal3 === 0) {
        crystal3 = randomNumber(1, 12);
        console.log(crystal3);
    }
    score += crystal3;
    $("#score").text("Score: " + score);
    checkWin();
});

//Crystal 4
$("#crystal4").on("click", function() {
    if (crystal4 === 0) {
        crystal4 = randomNumber(1, 12);
        console.log(crystal4);
    }
    score += crystal4;
    $("#score").text("Score: " + score);
    checkWin();
});
