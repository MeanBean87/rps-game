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
      R: "Rock",
      P: "Paper",
      S: "Scissors",
    };
  
    let computerChoice =
      choices[Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)]];
  
    if (userChoice === computerChoice) {
      result = "tie";
      gameStats.ties++;
      alert(`You chose ${userChoice}, computer chose ${computerChoice}. It's a tie.`)
    } else if (
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "P" && computerChoice === "R") ||
      (userChoice === "S" && computerChoice === "P")
    ) {
      result = "win";
      gameStats.wins++;
      alert(`You chose ${userChoice}, computer chose ${computerChoice}. You win!`);
    } else {
      result = "loss";
      gameStats.losses++;
      alert(`You chose ${userChoice}, computer chose ${computerChoice}. You lose!`);
    }
    
    alert(`Wins: ${gameStats.wins}\nLosses: ${gameStats.losses}\nTies: ${gameStats.ties}`);
  }
  