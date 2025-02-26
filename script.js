// script.js (modified)
let problemType, numA, denA, numB, denB, wholeNum, answer;
let correctCount = 0;
let incorrectCount = 0;
let skippedCount = 0; // Counter for skipped problems
let wrongAttempts = 0; // Counter for wrong attempts on the current problem
let userName = ""; // Variable to store the user's name

// Placeholder audio URLs (replace with actual audio file URLs)
const correctSound = "placeholder_correct.mp3";
const incorrectSound = "placeholder_incorrect.mp3";

function setUnderwaterBackground() {
    // Base64 encoded image (replace with a real image URL for better quality)
    const underwaterImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w+rAI0wU2wf1vwECLvOyfgqjEQAAAABJRU5ErkJggg==";

    document.body.style.backgroundImage = `url('${underwaterImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

function playSound(soundURL) {
    const audio = new Audio(soundURL);
    audio.play();
}

function startGame() {
    userName = document.getElementById("userName").value.trim();
    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("nameInput").style.display = "none";
    document.getElementById("gameContent").style.display = "block";
    setUnderwaterBackground(); // Set the background when the game starts
    generateProblem();
}

function generateProblem() {
    wrongAttempts = 0; // Reset wrong attempts counter for the new problem
    document.getElementById("skipButton").style.display = "none"; // Hide the skip button
    const operations = ['addFractions', 'subtractFractions', 'multiplyFractions', 'divideFractions', 'mixedNumbers'];
    problemType = operations[Math.floor(Math.random() * operations.length)];

    switch (problemType) {
        case 'addFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            answer = (numA / denA) + (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} + ${numB}/${denB} = ?`;
            break;
        case 'subtractFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            answer = (numA / denA) - (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} - ${numB}/${denB} = ?`;
            break;
        case 'multiplyFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            answer = (numA / denA) * (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} * ${numB}/${denB} = ?`;
            break;
        case 'divideFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            answer = (numA / denA) / (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} ÷ ${numB}/${denB} = ?`;
            break;
        case 'mixedNumbers':
            wholeNum = Math.floor(Math.random() * 5) + 1; // Whole number part
            numA = Math.floor(Math.random() * 5) + 1; // Numerator of fraction
            denA = Math.floor(Math.random() * 5) + 2; // Denominator of fraction
            numB = Math.floor(Math.random() * 5) + 1; // Numerator of second fraction
            denB = Math.floor(Math.random() * 5) + 2; // Denominator of second fraction
            answer = wholeNum + (numA / denA) + (numB/ denB);
            document.getElementById("problem").innerText = `${wholeNum} ${numA}/${denA} + ${numB}/${denB} = ?`;
            break;
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim(); // Get user input and remove leading/trailing spaces
    const feedbackDiv = document.getElementById("feedback");
    const celebrationDiv = document.getElementById("celebration");

    if (!userAnswer) {
        feedbackDiv.innerText = "Please enter an answer.";
        celebrationDiv.style.display = "none";
        return;
    }

    let parsedAnswer = parseAnswer(userAnswer);

    if (isNaN(parsedAnswer)) {
        feedbackDiv.innerText = "Please enter a valid number or fraction.";
        celebrationDiv.style.display = "none";
        return;
    }

    if (Math.abs(parsedAnswer - answer) < 0.01) {
        feedbackDiv.innerText = "Great job, " + userName + "!"; // Personalized message
        celebrationDiv.style.display = "block";
        correctCount++;
        document.getElementById("correctCount").innerText = correctCount;
        generateProblem();
        document.getElementById("answer").value = "";
        playSound(correctSound); // Play correct sound
    } else {
        wrongAttempts++; // Increment wrong attempts counter
        feedbackDiv.innerText = "Not quite, " + userName + ", try again!"; // Personalized message
        celebrationDiv.style.display = "none";
        incorrectCount++;
        document.getElementById("incorrectCount").innerText = incorrectCount;
        document.getElementById("answer").value = ""; // Clear the input field on incorrect answer
        playSound(incorrectSound); // Play incorrect sound

        if (wrongAttempts >= 2) {
            document.getElementById("skipButton").style.display = "block"; // Show skip button
        }
    }
}

function skipProblem() {
    skippedCount++; // Increment skipped count
    document.getElementById("skippedCount").innerText = skippedCount; // Update skipped count in HTML
    generateProblem(); // Generate new problem
}

function parseAnswer(answerString) {
    // Handle decimal input
    if (answerString.includes('.')) {
        return parseFloat(answerString);
    }

    // Handle fraction input (e.g., "1/2")
    if (answerString.includes('/')) {
        const [num, den] = answerString.split('/').map(Number);
        if (isNaN(num) || isNaN(den) || den === 0) {
            return NaN; // Invalid fraction
        }
        return num / den;
    }

    // Handle mixed number input (e.g., "1 1/2")
    if (answerString.includes(' ')) {
        const [whole, fraction] = answerString.split(' ');
        if (fraction.includes('/')) {
            const [num, den] = fraction.split('/').map(Number);
            if (isNaN(whole) || isNaN(num) || isNaN(den) || den === 0) {
                return NaN; // Invalid mixed number
            }
            return parseFloat(whole) + (num / den);
        } else {
            return NaN; // Invalid mixed number format
        }
    }

    // Handle whole number input
    const num = parseFloat(answerString);
    if (!isNaN(num)) {
        return num;
    }

    return NaN; // Invalid input
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}
