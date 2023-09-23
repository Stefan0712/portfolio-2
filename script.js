// Get all the navigation links
const links = document.querySelectorAll('.nav-link');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section
  document.querySelectorAll('section').forEach((section, index) => {
    // Get the offset top position of the section
    const sectionTop = section.offsetTop - 50; // Adjust for any fixed header

    // Determine the height of the section
    const sectionHeight = section.clientHeight;

    // Check if the current scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Add the 'active' class to the corresponding link
      links[index].classList.add('active');
    } else {
      // Remove the 'active' class from other links
      links[index].classList.remove('active');
    }
  });
});

const toggleNavMenu = () =>{
    const menuBtn = document.getElementById('menu-btn-icon')
    menuBtn.classList.toggle('fa-close');
    menuBtn.classList.toggle('fa-ellipsis-vertical');
    document.getElementById('nav-container').classList.toggle('show-nav')
}

//game logic
const gameQuestions = [
    {
        question: "What is the traditional color of torii gates in Japan?",
        choices: ["Green", "Blue", "Red", "Yellow"],
        correctChoice: "Red",
        fact: "The vibrant red color symbolizes protection against evil spirits in Japanese culture."
    },
    {
        question: "What purpose do torii gates typically serve in Japan?",
        choices: [
            "Marking hiking trails",
            "Decorative garden ornaments",
            "Marking the entrance to a sacred place",
            "Providing shade in parks"
        ],
        correctChoice: "Marking the entrance to a sacred place",
        fact: "Torii gates are often found at the entrances of Shinto shrines and represent the transition from the profane to the sacred."
    },
    {
        question: "In Japan, which direction do you usually walk through a torii gate?",
        choices: ["Back to front", "Right to left", "From front to back, through the center", "It doesn't matter"],
        correctChoice: "From front to back, through the center",
        fact: "Walking through a torii gate symbolizes entering a sacred space."
    },
    {
        question: "What is the name of the path often lined with torii gates that leads to a shrine?",
        choices: ["Sakura Lane", "Torii Tunnel", "Cherry Blossom Road", "Torii-lined path (sando or senbon torii)"],
        correctChoice: "Torii-lined path (sando or senbon torii)",
        fact: "These paths are often referred to as 'sando' and feature rows of torii gates."
    },
    {
        question: "True or False: Torii gates are only found in Japan?",
        choices: ["True", "False", "False", "True"],
        correctChoice: "False",
        fact: "Torii gates can also be found in other countries with Shinto shrines or inspired by Japanese culture."
    },
    {
        question: "Which natural element do torii gates represent in Japanese culture?",
        choices: ["Fire", "Water", "Earth", "The sun"],
        correctChoice: "The sun",
        fact: "Torii gates symbolize the boundary between the sacred and profane and are associated with the sun goddess Amaterasu."
    },
    {
        question: "What is the significance of the shimenawa, a sacred rope often seen hanging from torii gates?",
        choices: ["It's a decorative element", "It marks a boundary between the sacred and profane", "It symbolizes the wind", "It represents the sky"],
        correctChoice: "It marks a boundary between the sacred and profane",
        fact: "The shimenawa signifies the transition from the ordinary to the sacred."
    },
    {
        question: "In Japan, what are the two primary materials used to make torii gates?",
        choices: ["Glass and metal", "Bamboo and paper", "Wood and stone", "Plastic and concrete"],
        correctChoice: "Wood and stone",
        fact: "Traditional torii gates are crafted from wood and stone, reflecting natural elements."
    },
    {
        question: "What shape do the top beams of torii gates typically have?",
        choices: ["Straight", "Pointed", "Serrated", "A gentle curve resembling a shallow arch"],
        correctChoice: "A gentle curve resembling a shallow arch",
        fact: "The curved top beams of torii gates are called 'kasagi' and resemble the shape of a bird's tail feathers."
    },
    {
        question: "Which Japanese festival often involves carrying a portable shrine (mikoshi) through torii gates?",
        choices: ["New Year's Eve", "Hanami Festival", "Gion Matsuri", "Tanabata Festival"],
        correctChoice: "Gion Matsuri",
        fact: "Gion Matsuri, held in Kyoto, is known for its processions with mikoshi carried through the city's torii-lined streets."
    }
];
let questionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
const closeGame = () =>{
    document.getElementById('game').classList.add('contract');
    setTimeout(()=>{
        document.getElementById('game').classList.remove('show-game');
        questionIndex = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        updateScore();
        document.getElementById('start').classList.remove('contract');
        document.getElementById('start').classList.remove('hide');
        if(document.getElementById('end').classList.contains('show-end')){
    
            document.getElementById('end').classList.remove('show-end')
        }
        document.getElementById('game').classList.remove('contract');

    },300)

}
const updateScore = () =>{
    document.getElementById('right-answers').innerText = rightAnswers;
    document.getElementById('wrong-answers').innerText = wrongAnswers;
    
}
const startGame = () =>{
    
    
    showQuestion(questionIndex);
    document.getElementById('game').classList.add('show-game')

    
}
 const begginGame = () =>{
    const button = document.getElementById('start');
    button.classList.add('contract');
    setTimeout(()=>{
        button.classList.add('hide')
    },300)
 }
const showQuestion = (index=questionIndex) =>{
    const questionBox = document.getElementById('question-box');
    const choice_1 = document.getElementById('choice-1');
    const choice_2 = document.getElementById('choice-2');
    const choice_3 = document.getElementById('choice-3');
    const choice_4 = document.getElementById('choice-4');
    const fact = document.getElementById('fact-box');

    questionBox.innerText = gameQuestions[index].question;
    choice_1.innerText = gameQuestions[index].choices[0];
    choice_1.setAttribute('onclick',`handleAnswer("0","choice-1")`)
    choice_2.innerText = gameQuestions[index].choices[1];
    choice_2.setAttribute('onclick',`handleAnswer("1","choice-2")`)
    choice_3.innerText = gameQuestions[index].choices[2];
    choice_3.setAttribute('onclick',`handleAnswer("2","choice-3")`)
    choice_4.innerText = gameQuestions[index].choices[3];
    choice_4.setAttribute('onclick',`handleAnswer("3","choice-4")`)
    fact.innerText = gameQuestions[index].fact;
}
showQuestion(questionIndex);
const endGame = () =>{
    if(wrongAnswers<rightAnswers){
        document.getElementById('result-message').innerText = "Congratsulations! You know a thing or two about torii gates."
        document.getElementById('result-score').innerText = `You got ${rightAnswers} answers out of 10! Good job!`
    }else{
        document.getElementById('result-message').innerText = "Oh no! Now you have to hire me."
        document.getElementById('result-score').innerText = `You got ${rightAnswers} answers out of 10! Maybe try again!`
    }
    document.getElementById('end').classList.add('show-end')
    
    
}
const handleAnswer = (answer,id) =>{
        console.log(gameQuestions[questionIndex].choices[answer], gameQuestions[questionIndex].correctChoice)
        if(gameQuestions[questionIndex].choices[answer]==gameQuestions[questionIndex].correctChoice){
            document.getElementById(id).classList.add('right-answer');
            setTimeout(()=>{
                document.getElementById(id).classList.remove('right-answer');
            },500)
            rightAnswers++;
        }else{
            document.getElementById(id).classList.add('wrong-answer');
            setTimeout(()=>{
                document.getElementById(id).classList.remove('wrong-answer');
            },500)
            wrongAnswers++;
        }
        if(questionIndex>=9){
            endGame();
        }
        setTimeout(()=>{

            questionIndex++;
            showQuestion();
            updateScore();
        },400)


    
}