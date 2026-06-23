//creating questions of the quiz
let questions = [
    {
        question:"What is the capital of India?",
        options:["Delhi","Kolkata","Mumbai","Chennai"],
        answer:"Delhi"
    },
    {
        question:"Which language is used for web developement?",
        options:["Java","C++","HTML","Python"],
        answer:"HTML"
    },
    {
        question:"Which is the national flower of India?",
        options:["Rose","Sunflower","Lotus","Lily"],
        answer:"Lotus"
    },
    {
        question:"Which is the national animal of India?",
        options:["Lion","Tiger","Elephant","Gorilla"],
        answer:"Tiger"
    },
    {
        question:"Which is the national bird of India?",
        options:["Owl","Crow","Sparrow","Peacock"],
        answer:"Peacock"
    }
];
//since we created classes named option therefore we use . to access elements by class name
let optionBtns = document.querySelectorAll(".option");
let questionElement = document.getElementById("question");
let scoreElement = document.getElementById("score");
let currentQuestion = 0;
let score = 0;
loadQuestion();
//writing function to load questions of the quiz
function loadQuestion()
{
    questionElement.innerText = questions[currentQuestion].question;
    //to give 4 options
    for(let i=0;i<4;i++)
    {
        optionBtns[i].innerText = questions[currentQuestion].options[i];
    }
}
//to check the answers
for(let i=0;i<optionBtns.length;i++)
{
    optionBtns[i].addEventListener("click", function()
{
    let selectedAnswer = optionBtns[i].innerText;
    if(selectedAnswer === questions[currentQuestion].answer)
    {
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length)
    {
        loadQuestion();
    }
    else
    {
        questionElement.innerText = "Quiz Finished!";
        //since the four buttons are created on the hTML pgae, therefore they will be visible even after the quiz is over which looks clumsy. Hence we need to hide it using none
        for(let j=0;j<optionBtns.length;j++)
        {
            optionBtns[j].style.display = "none";
        }
        scoreElement.innerText = "Your score: "+score+"/"+questions.length;
    }
});
}