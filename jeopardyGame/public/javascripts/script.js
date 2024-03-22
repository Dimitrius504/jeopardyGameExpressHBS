// Global variable to keep track of current user
let currentUser = "user1"; // Start with user1

// Function to switch between users
function switchUser() {
  currentUser = currentUser === "user1" ? "user2" : "user1"; // This allows toggling between both users, the var defines current user as user1, then when the function is called, evaluates and switches to the other user
}

function getQuestion(buttonElement, text, correct, incorrect, value) {
  buttonElement.innerHTML = `<p>${text}</p> <br /> <button id='correct'>${correct}</button><button id='incorrect'>${incorrect}</button><h1>${value}</h1>`;
  // Get references to the correct and incorrect buttons
  const correctButton = buttonElement.querySelector("#correct");
  const incorrectButton = buttonElement.querySelector("#incorrect");

  // Add event listeners to the buttons
  correctButton.addEventListener("click", () =>
    evaluateAnswer(true, value, correctButton)
  );
  incorrectButton.addEventListener("click", () =>
    evaluateAnswer(false, value, incorrectButton)
  );
}

// Evaluation function
function evaluateAnswer(isCorrect, value, buttonElement) {
  const userEarningsElement = document.querySelector(
    `#userEarnings > div.${currentUser} > h1`
  );
  let currentEarnings = parseInt(userEarningsElement.textContent) || 0; // Get current earnings, default to 0

  if (isCorrect) {
    currentEarnings += parseInt(value); // Add value to earnings
    userEarningsElement.textContent = currentEarnings; // Update earnings in HTML
    userEarningsElement.style.color = "green"; // Highlight earnings update
  } else {
    userEarningsElement.style.color = "red"; // highlight incorrect answer
  }
  switchUser(); // Switch to the next user
}
