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

function generateScienceProblem() {
    console.log("generateScienceProblem() is being called!");
    const scienceProblems = [
        { question: "Melting ice is a ______ change.", answer: "physical" },
        { question: "Burning wood is a ______ change.", answer: "chemical" },
        { question: "Rusting iron is a ______ change.", answer: "chemical" },
        { question: "Boiling water is a ______ change.", answer: "physical" },
        { question: "Cooking an egg is a ______ change.", answer: "chemical" },
        { question: "Dissolving sugar in water is a ______ change.", answer: "physical" },
        { question: "Baking a cake is a ______ change.", answer: "chemical" },
        { question: "Freezing water is a ______ change.", answer: "physical" },
        { question: "Digesting food is a ______ change.", answer: "chemical" },
        { question: "Cutting paper is a ______ change.", answer: "physical" },
        { question: "Burning gasoline is a ______ change.", answer: "chemical" },
        { question: "Evaporating water is a ______ change.", answer: "physical" },
        { question: "Mixing vinegar and baking soda is a ______ change.", answer: "chemical" },
        { question: "Crushing a can is a ______ change.", answer: "physical" },
        { question: "Souring milk is a ______ change.", answer: "chemical" },
        { question: "Sublimation of dry ice is a ______ change.", answer: "physical" },
        { question: "Neutralizing an acid with a base is a ______ change.", answer: "chemical" },
        { question: "Breaking glass is a ______ change.", answer: "physical" },
        { question: "Photosynthesis is a ______ change.", answer: "chemical" },
        { question: "Melting butter is a ______ change.", answer: "physical" },
        { question: "Exploding dynamite is a ______ change.", answer: "chemical" },
        { question: "Condensation of water vapor is a ______ change.", answer: "physical" },
        { question: "Fermentation is a ______ change.", answer: "chemical" },
        { question: "Sharpening a pencil is a ______ change.", answer: "physical" },
        { question: "Tarnishing silver is a ______ change.", answer: "chemical" }
    ];

    const problem = scienceProblems[Math.floor(Math.random() * scienceProblems.length)];
    document.getElementById("problem").innerText = problem.question;
    global.answer = problem.answer; // Set the global answer variable
}

function startGame() {
    userName = document.getElementById("userName").value.trim();
    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    const grade = document.querySelector('input[name="grade"]:checked').value;
    const category = document.querySelector('input[name="category"]:checked').value;

    document.getElementById("nameInput").style.display = "none";
    document.getElementById("gameContent").style.display = "block";
    setUnderwaterBackground(); // Set the background when the game starts

    const category = document.querySelector('input[name="category"]:checked').value;
    console.log("Grade: " + grade);
    console.log("Category: " + category);

    if (category === "science" && grade === "5") {
        generateScienceProblem();
    } else if (category === "math") {
        generateProblem();
    } else {
        // Do nothing - don't call generateProblem()
        document.getElementById("problem").innerText = "This should only show science problems"; // Add a debug message
    }
}

function generateProblem() {
    wrongAttempts = 0; // Reset wrong attempts counter for the new problem
    document.getElementById("skipButton").style.display = "none"; // Hide the skip button
    const operations = ['addFractions', 'subtractFractions', 'multiplyFractions', 'divideFractions', 'mixedNumbers', 'wordProblemFractions'];
    problemType = operations[Math.floor(Math.random() * operations.length)];

    switch (problemType) {
        case 'addFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            global.answer = (numA / denA) + (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} + ${numB}/${denB} = ?`;
            break;
        case 'subtractFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            global.answer = (numA / denA) - (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} - ${numB}/${denB} = ?`;
            break;
        case 'multiplyFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            global.answer = (numA / denA) * (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} * ${numB}/${denB} = ?`;
            break;
        case 'divideFractions':
            numA = Math.floor(Math.random() * 5) + 1;
            denA = Math.floor(Math.random() * 5) + 2;
            numB = Math.floor(Math.random() * 5) + 1;
            denB = Math.floor(Math.random() * 5) + 2;
            global.answer = (numA / denA) / (numB / denB);
            document.getElementById("problem").innerText = `${numA}/${denA} ÷ ${numB}/${denB} = ?`;
            break;
        case 'mixedNumbers':
            wholeNum = Math.floor(Math.random() * 5) + 1; // Whole number part
            numA = Math.floor(Math.random() * 5) + 1; // Numerator of fraction
            denA = Math.floor(Math.random() * 5) + 2; // Denominator of fraction
            numB = Math.floor(Math.random() * 5) + 1; // Numerator of second fraction
            denB = Math.floor(Math.random() * 5) + 2; // Denominator of second fraction
            global.answer = wholeNum + (numA / denA) + (numB/ denB);
            document.getElementById("problem").innerText = `${wholeNum} ${numA}/${denA} + ${numB}/${denB} = ?`;
            break;
        case 'wordProblemFractions':
            const wordProblems = [
                {
                    question: "Sarah baked a pie and ate 1/4 of it. John ate 2/8 of the same pie. How much of the pie did they eat altogether?",
                    answer: 0.5
                },
                {
                    question: "A recipe calls for 2/3 cup of flour. You only want to make half of the recipe. How much flour do you need?",
                    answer: 0.3333333333333333
                },
                {
                    question: "Tom has 1 1/2 pizzas. He eats 2/4 of a pizza. How much pizza does Tom have left?",
                    answer: 1
                }
            ];
            const problem = wordProblems[Math.floor(Math.random() * wordProblems.length)];
            document.getElementById("problem").innerText = problem.question;
            global.answer = problem.answer;
            break;
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const feedbackDiv = document.getElementById("feedback");
    const celebrationDiv = document.getElementById("celebration");
    const category = document.querySelector('input[name="category"]:checked').value;

    console.log("checkAnswer() called");
    console.log("category: " + category);
    console.log("userAnswer: " + userAnswer);
    console.log("answer: " + answer);

    if (!userAnswer) {
        feedbackDiv.innerText = "Please enter an answer.";
        celebrationDiv.style.display = "none";
        return;
    }

    if (category === "science") {
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            feedbackDiv.innerText = "Great job, " + userName + "!";
            celebrationDiv.style.display = "block";
            correctCount++;
            document.getElementById("correctCount").innerText = correctCount;
            generateScienceProblem();
            document.getElementById("answer").value = "";
            playSound(correctSound);
        } else {
            wrongAttempts++;
            feedbackDiv.innerText = "Not quite, " + userName + ", try again!";
            celebrationDiv.style.display = "none";
            incorrectCount++;
            document.getElementById("incorrectCount").innerText = incorrectCount;
            document.getElementById("answer").value = "";
            playSound(incorrectSound);

            if (wrongAttempts >= 2) {
                document.getElementById("skipButton").style.display = "block";
            }
        }
    } else {
        let parsedAnswer = parseAnswer(userAnswer);

        if (isNaN(parsedAnswer)) {
            feedbackDiv.innerText = "Please enter a valid number or fraction.";
            celebrationDiv.style.display = "none";
            return;
        }

        if (Math.abs(parsedAnswer - answer) < 0.01) {
            feedbackDiv.innerText = "Great job, " + userName + "!";
            celebrationDiv.style.display = "block";
            correctCount++;
            document.getElementById("correctCount").innerText = correctCount;
            generateProblem();
            document.getElementById("answer").value = "";
            playSound(correctSound);
        } else {
            wrongAttempts++;
            feedbackDiv.innerText = "Not quite, " + userName + ", try again!";
            celebrationDiv.style.display = "none";
            incorrectCount++;
            document.getElementById("incorrectCount").innerText = incorrectCount;
            document.getElementById("answer").value = "";
            playSound(incorrectSound);

            if (wrongAttempts >= 2) {
                document.getElementById("skipButton").style.display = "block";
            }
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
