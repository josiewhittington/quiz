const quizData = [
    {
        question: "What do I like to do on Sunday mornings",
        options: ["Drink coffee with almond milk", "Drink black coffee",
        "Drink coffee with oat milk", "Drink coffee with extra oat milk"],
        answer: 3
    },
    {
        question: "What am I scared of",
        options: ["Spiders", "The dark", "Picasso", "Grapes"],
        answer: 1
    },
    {
        question: "What are my thoughts on raw chicken",
        options: ["Gross", "Yum", "Protein"],
        answer: 0
    }
    {
        question: "My celebrity crush",
        options: ["Grian Chatten", "Chris Evans", "Timothée Chalamet", "Ryan Reynolds"],
        answer: 0
    }
    {
        question: "My favorite food",
        options: ["Bread", "Pizza", "Almond butter", "Peanut butter"],
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
