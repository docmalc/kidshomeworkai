let userName = "";
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answer = "";

function startGame() {
    userName = document.getElementById("name").value;
    document.getElementById("name-input").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    questions = [
        {question: "Is rusting iron a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is melting ice a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is burning wood a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is dissolving sugar in water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is crushing a can a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is cooking an egg a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is tearing paper a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is boiling water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is baking a cake a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is grinding coffee beans a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is sublimation of dry ice a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the digestion of food a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the fermentation of grapes into wine a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the photosynthesis in plants a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the magnetization of a nail a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the electrolysis of water a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the explosion of fireworks a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the condensation of water vapor a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the burning of gasoline in a car engine a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the souring of milk a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the tarnishing of silver a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the ripening of fruit a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the rusting of a bicycle chain a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the bleaching of hair a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the dissolving of salt in water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the freezing of water to ice a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the breaking of a glass window a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the bending of a metal rod a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the crumpling of a piece of paper a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the hammering of metal into a sheet a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the cutting of grass with a lawnmower a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the shaping of clay into a pot a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the melting of butter on toast a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the shattering of a ceramic plate a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the evaporation of alcohol a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the condensation of dew on grass a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the freezing of a lake in winter a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the grinding of wheat into flour a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the dissolving of carbon dioxide in water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the dissolving of oxygen in water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the dissolving of fertilizer in water a physical or chemical change?", answer: "physical", options: ["physical", "chemical"]},
        {question: "Is the burning of a candle a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the explosion of dynamite a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the cooking of meat a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the frying of an egg a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the baking of bread a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the burning of leaves a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]},
        {question: "Is the rusting of a car a physical or chemical change?", answer: "chemical", options: ["physical", "chemical"]}
    ];

    // Shuffle questions array (Fisher-Yates shuffle)
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        document.getElementById("answer1-label").textContent = currentQuestion.options[0];
        document.getElementById("answer2-label").textContent = currentQuestion.options[1];
        document.getElementById("answer1").value = currentQuestion.options[0];
        document.getElementById("answer2").value = currentQuestion.options[1];
        answer = currentQuestion.answer;
    } else {
        endGame();
    }
}

function checkAnswer() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    let resultArea = document.getElementById("result-area");
    if (selectedAnswer === answer) {
        const positiveMessages = [
            "Great job, " + userName + "!",
            "You got it right!",
            "Fantastic!",
            "Awesome!",
            "You're a science whiz!"
        ];
        const randomPositiveMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
        resultArea.textContent = randomPositiveMessage;
        score++;
    } else {
        const encouragingMessages = [
            "Not quite, " + userName + ", but keep trying!",
            "That's okay! You'll get the next one.",
            "Good try! Don't give up.",
            "Almost there!",
            "Keep going, you can do it!"
        ];
        const randomEncouragingMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        resultArea.textContent = randomEncouragingMessage + " The correct answer was " + answer;
    }
    currentQuestionIndex++;
    document.getElementById("answer-form").reset();
    loadQuestion();
    updateScore();
}

function updateScore() {
     document.getElementById("score-area").textContent = "Score: " + score + "/" + questions.length;
}

function endGame() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("result-area").textContent = "Game Over! Your final score is " + score + "/" + questions.length;
}