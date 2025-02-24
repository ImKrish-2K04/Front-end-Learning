let submitBtn = document.querySelector("#submit-btn");
let remainingGuess = document.querySelector(".remaining_guess");
let recentGuess = document.querySelector(".recent_guess");
let inputField = document.querySelector("#guess");

let errorMsg = document.createElement("p");
errorMsg.classList.add("error-msg");
errorMsg.style.color = "red";
errorMsg.style.fontWeight = "bold";
inputField.insertAdjacentElement("afterend", errorMsg);

let chance = 10;
remainingGuess.textContent = chance;
let randNum = Math.floor(Math.random() * 100) + 1;

submitBtn.addEventListener("click", () => {
  let inputValue = parseInt(inputField.value);

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
    errorMsg.textContent = "❌ Please enter a valid number between 1 and 100!";
    inputField.value = "";
    inputField.focus();
    return;
  } else {
    errorMsg.textContent = "";
  }

  recentGuess.textContent = inputValue;

  if (chance > 1) {
    if (randNum !== inputValue) {
      chance--;
      remainingGuess.textContent = chance;

      let hint =
        inputValue < randNum
          ? "📈 Try a higher number!"
          : "📉 Try a lower number!";
      errorMsg.textContent = hint;

      inputField.value = "";
      inputField.focus();
    } else {
      document.querySelector(
        "main"
      ).innerHTML = `<p class='info'>🎉 You won! Guess: ${inputValue}</p>`;
    }
  } else {
    let choice = confirm("Game over! Would you like to play again?");
    if (choice) {
      window.location.reload();
    } else {
      document.querySelector(
        "main"
      ).innerHTML = `<p class='info'>Arigatou! we hope you enjoyed it</p>`;
    }
  }
});
