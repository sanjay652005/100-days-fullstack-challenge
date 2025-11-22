
    const secretNumber = Math.floor(Math.random() * 50) + 1;
    let tries = 0;

    function checkGuess() {
      const guess = Number(document.getElementById("guessInput").value);
      const message = document.getElementById("message");
      const triesCount = document.getElementById("triesCount");
      tries++;

      if (!guess || guess < 1 || guess > 50) {
        message.textContent = "⚠️ Please enter a number between 1 and 50.";
        return;
      }

      if (guess < secretNumber) {
        message.textContent = "Too low! Try again 🔽";
      } else if (guess > secretNumber) {
        message.textContent = "Too high! Try again 🔼";
      } else {
        message.textContent = `🎉 You got it! The number was ${secretNumber}`;
        triesCount.textContent = `You guessed it in ${tries} tries!`;
        document.getElementById("guessInput").disabled = true;
      }

      triesCount.textContent = `Tries: ${tries}`;
      document.getElementById("guessInput").value = "";
    }
  