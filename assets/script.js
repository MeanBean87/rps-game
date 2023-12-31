let gameStats = { wins: 0, losses: 0, ties: 0 };

function playGame() {
    
    let userChoice = prompt(
      "Let's play Rock, Paper, Scissors! Please choose R, P, or S to begin."
    );
  
    const choices = {
      R: "Rock",
      P: "Paper",
      S: "Scissors",
    };
  
    userChoice = userChoice.toUpperCase();
  
    if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
      userChoice = choices[userChoice];
  
      let computerChoice =
        choices[
          Object.keys(choices)[
            Math.floor(Math.random() * Object.keys(choices).length)
          ]
        ];
  
      if (userChoice === computerChoice) {
        gameStats.ties++;
        alert(
          `you chose ${userChoice}, computer chose ${computerChoice}, it's a tie`
        );
      } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
      ) {
        gameStats.wins++;
        alert(
          `you chose ${userChoice}, computer chose ${computerChoice}, it's a win`
        );
      } else {
        gameStats.losses++;
        alert(
          `you chose ${userChoice}, computer chose ${computerChoice}, it's a loss`
        );
      }
      alert(
        `wins: ${gameStats.wins}\nlosses: ${gameStats.losses}\nties: ${gameStats.ties}`
      );
  
      if (
        confirm(
          "Would you like to play again?\nPress OK to play again.\nPress Cancel to quit."
        )
      ) {
        playGame();
      }
    } else {
      alert("Invalid choice. Please choose R, P, or S.");
      playGame();
    }
  }
  