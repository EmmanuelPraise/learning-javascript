const options = ["rock", "paper", "scissors"];
let player_move = "";

let player_score = 0;
let computer_score = 0;

function play() {
    const computer_move = options[Math.floor(Math.random() * 3)];

    document.getElementById("computer-choice-display").innerText = computer_move;

    if (player_move === computer_move) {
        console.log("Tie!");
    } else if (
        (player_move === "rock" && computer_move === "scissors") ||
        (player_move === "paper" && computer_move === "rock") ||
        (player_move === "scissors" && computer_move === "paper")
    ) {
        player_score++;
        document.getElementById("player-score").innerText = player_score;
        console.log("Player Win!");
    } else {
        computer_score++;
        document.getElementById("computer-score").innerText = computer_score;
        console.log("Computer Win!");
    }
}

function rockBtn() {
    player_move = "rock";
    document.getElementById("player-choice-display").innerText = player_move;
    play();
}

function paperBtn() {
    player_move = "paper";
    document.getElementById("player-choice-display").innerText = player_move;
    play();
}

function scissorsBtn() {
    player_move = "scissors";
    document.getElementById("player-choice-display").innerText = player_move;
    play();
}

function resetGame() {
    player_score = 0;
    computer_score = 0;
    player_move = "";

    document.getElementById("player-score").innerText = player_score;
    document.getElementById("computer-score").innerText = computer_score;
    document.getElementById("player-choice-display").innerText = " - ";
    document.getElementById("computer-choice-display").innerText = " - ";
}