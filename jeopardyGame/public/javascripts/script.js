function getQuestion(buttonElement, text, correct, incorrect) {
    buttonElement.innerHTML = `<p>${text}</p> <br /> <button id='correct'>${correct}</button><button id='incorrect'>${incorrect}</button>`;
    // Get references to the correct and incorrect buttons
    const correctButton = buttonElement.querySelector('#correct');
    const incorrectButton = buttonElement.querySelector('#incorrect');

    // Add event listeners to the buttons
    correctButton.addEventListener('click', () => evaluateAnswer(true));
    incorrectButton.addEventListener('click', () => evaluateAnswer(false));

    // Evaluation function
    function evaluateAnswer(isCorrect) {
        if (isCorrect) {
            buttonElement.style.color = 'green';
            return correctButton.setAttribute("disabled"),
            incorrectButton.setAttribute("disabled", true);
        } else {
            // Do something for incorrect answer
            alert('Incorrect!');
            buttonElement.style.color = 'red';
            
        }
    }
}
