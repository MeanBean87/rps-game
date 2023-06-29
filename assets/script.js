const gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame() {
  let userChoice = prompt(
    "Let's play Rock, Paper, Scissors! Please choose R, P, or S to begin."
  );

    let choices = ["R", "P", "S"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        result = "tie";
        gameStats.ties++;
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        result = "win";
        gameStats.wins++;
    } else {
        result = "loss";
        gameStats.losses++;
    }
}
