
// Selecting Elements
const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const usernameInput = document.getElementById("username");
const enterBtn = document.querySelector(".user-details button");
const categoryButtons = document.querySelectorAll(".category-section .categories button");

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const questionNumberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score-count");
const timerElement = document.getElementById("timer");
const nextButton = document.querySelector("#quiz-page .btn"); // Next button
const startAgainBtn = document.getElementById("start-again-btn"); // Start Again button
const goHomeBtn = document.getElementById("go-home-btn"); // Go to home button

// Result Elements
const totalScoreElement = document.getElementById("total-score");
const totalTimeElement = document.getElementById("tatal-time");
const totalQuestionsElement = document.getElementById("total-questions");
const attemptElement = document.getElementById("Attempt");
const correctElement = document.getElementById("correct");
const wrongElement = document.getElementById("wrong");
const percentageElement = document.getElementById("percentage");
const categoryTitleElement = document.getElementById("category-title");
// Variables
let userName = "";
let currentCategoryQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let attempt = 0; // Variable to track attempts
let timer = 10;
let interval;
let selectedCategory = ""; // Variable to store selected category

let startTime, endTime; // Variables to store start and end time


// Event listener for Enter button on home page
enterBtn.addEventListener("click", () => {
    userName = usernameInput.value;
    if (userName) {
        document.querySelector(".uname").textContent = userName;
    } else {
        alert("Please enter your name.");
    }
});

// Event listeners for category buttons
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Check if username is entered before selecting a category
        if (!userName) {
            alert("Please enter your name before selecting a category.");
            return;
        }

        homePage.classList.add("hidden");
        selectedCategory = button.textContent; // Store selected category
        // Set category title element to show selected category
        categoryTitleElement.textContent = `${selectedCategory}`;
        currentCategoryQuestions = questionsByCategory[selectedCategory];
        currentQuestionIndex = 0;
        score = 0;
        attempt = 0; // Reset attempt count for new quiz
        timer = 10;

        // Set the start time of the quiz
        startTime = new Date();

        // Load the first question
        quizPage.classList.remove("hidden");
        loadQuestion();
        startTimer();
    });
});

// Load question function
function loadQuestion() {
    const currentQuestion = currentCategoryQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionNumberElement.textContent = `${currentQuestionIndex + 1}/${currentCategoryQuestions.length}`;

    optionsContainer.innerHTML = ""; // Clear previous options
    currentQuestion.options.forEach(optionText => {
        const optionButton = document.createElement("button");
        optionButton.textContent = optionText;
        optionButton.classList.add("option-btn");
        optionButton.addEventListener("click", () => checkAnswer(optionText, optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

// Check answer function
function checkAnswer(selectedOption, optionButton) {
    const currentQuestion = currentCategoryQuestions[currentQuestionIndex];

    // Disable all options after one is selected
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true); // Disable all option buttons

    // Change background color of selected option
    optionButton.style.backgroundColor = selectedOption === currentQuestion.answer ? "lightgreen" : "salmon";

    // Increment attempt count since the user answered the question
    attempt++;
    attemptElement.textContent = attempt; // Update the displayed attempt count

    if (selectedOption === currentQuestion.answer) {
        score++;
        scoreElement.textContent = score;
    }
    
    // Show the next button after answering
}

// Next question function
nextButton.addEventListener("click", () => {
    nextQuestion(); // Move to the next question when Next button is clicked
});

// Next question logic
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentCategoryQuestions.length) {
        loadQuestion();
        timer =10; // Reset timer
        startTimer(); // Restart the timer for the next question
    } else {
        endQuiz(); // End quiz when there are no more questions
    }
}

// Start timer function
function startTimer() {
    clearInterval(interval); // Clear any existing intervals to prevent multiple timers
    timerElement.textContent = `${timer}`;
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = `${timer}`;
        if (timer <= 0) {
            clearInterval(interval);
             
            nextQuestion(); // Automatically move to the next question when time runs out
        }
    }, 1000);
}

// End quiz function
function endQuiz() {
    clearInterval(interval); // Stop the timer
    quizPage.classList.add("hidden");
    resultPage.classList.remove("hidden");

    // Set the end time and calculate the total time taken
    endTime = new Date();
    const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // Total time in seconds


    // Calculate and display results
    totalScoreElement.textContent = score;
    totalTimeElement.textContent = `${totalTimeTaken}`; // Show total time taken
    totalQuestionsElement.textContent = currentCategoryQuestions.length;
    attemptElement.textContent = attempt; // Display the correct number of attempts
    correctElement.textContent = score;
    wrongElement.textContent = attempt - score; // Calculate wrong answers correctly
    percentageElement.textContent = `${((score / currentCategoryQuestions.length) * 100).toFixed(2)}%`;
}

// Start Again button functionality
startAgainBtn.addEventListener("click", () => {
    // Reset variables for a new attempt
    currentQuestionIndex = 0;
    score = 0;
    attempt = 0; // Reset attempt count
    timer = 10;
    
      // Set a new start time for the restarted quiz
      startTime = new Date();

    // Load the first question of the selected category
    resultPage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    loadQuestion();
    startTimer();
});

// Go Home button functionality
goHomeBtn.addEventListener("click", () => {
    console.log("Go Home button clicked."); // Debugging line
    // Hide the result page and show the home page
    resultPage.classList.add("hidden");
    quizPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    
    usernameInput.value = ""; // Clear username input
    document.querySelector(".uname").textContent = ""; // Clear displayed username
    userName = ""; // Reset username variable
});
