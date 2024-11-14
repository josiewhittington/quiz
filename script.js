const quizData = [
    {
        question: "My favorite ice cream topping",
        options: ["oreos", "m&ms",
        "kitkats", "reese's"],
        answer: 1
    },
    {
        question: "What floor of the parking garage am I parked on right now",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "What is the third letter of my favorite major",
        options: ["c", "p", "s", "a"],
        answer: 0
    },
    {
        question: "My favorite season",
        options: ["Spring", "Summer", "Fall", "Winter"],
        answer: 2
    },
    {
        question: "How long was my last phone call with my mom",
        options: ["8 minutes", "12 minutes", "18 minutes", "22 minutes"],
        answer: 3
    },
    {
        question: "What was the last thing I ate",
        options: ["pb & j", "peanut butter", "ice cream", "ramen"],
        answer: 3
    }
];


let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById("cover-page").style.display = "none"; // Hide cover page
    document.getElementById("quiz").style.display = "block"; // Show quiz
    loadQuestion();
}

// Function to load questions
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");

    questionElement.innerText = quizData[currentQuestion].question;
    options.forEach((option, index) => {
        option.innerText = quizData[currentQuestion].options[index];
    });
}

// Function to handle option selection
function selectOption(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    document.querySelectorAll(".option").forEach(option => option.disabled = true);
}

// Function to go to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.querySelectorAll(".option").forEach(option => option.disabled = false);
    } else {
        document.getElementById("quiz").innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2>`;
    }
}
