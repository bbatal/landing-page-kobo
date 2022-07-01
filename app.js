const landingApp = {};

// variables
landingApp.questions = document.getElementsByClassName("question");
landingApp.buttonContent = document.querySelectorAll(".question > button > span")

// loop through our questions and add a click event to the whole container
    for (let i = 0; i < landingApp.questions.length; i++) {
    landingApp.questions[i].addEventListener('click', () => {

        /* Toggle between hiding and showing the active panel */
        let answer = landingApp.questions[i].nextElementSibling;
        
        // conditional check for if the 
        if (answer.style.display === "block") {
            answer.style.display = "none";
                landingApp.buttonContent[i].classList.toggle('minus-symbol');
        } else {
            answer.style.display = "block";
            landingApp.buttonContent[i].classList.toggle('minus-symbol');
        }
    })}
