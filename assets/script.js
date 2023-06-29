const gameStats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame() {
  let userChoice = prompt(
    "Let's play Rock, Paper, Scissors! Please choose R, P, or S to begin."
  );
  const choices = {
   "R": "Rock",
    "P": "Paper",
    "S": "Scissors",
  };

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        result = "tie";
        gameStats.ties++;
        alert(`you chose ${userChoice}, computer chose ${computerChoice}, it's a tie`)
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        result = "win";
        gameStats.wins++;
        alert(`you chose ${userChoice}, computer chose ${computerChoice}, it's a win`)
    } else {
        result = "loss";
        gameStats.losses++;
        alert(`you chose ${userChoice}, computer chose ${computerChoice}, it's a loss`)
    }
    alert(`wins: ${gameStats.wins}\n losses: ${gameStats.losses}\n ties: ${gameStats.ties}`)
}

