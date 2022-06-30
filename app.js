const landingApp = {};

// variables
landingApp.questions = document.getElementsByClassName("question");


    for (let i = 0; i < landingApp.questions.length; i++) {
    landingApp.questions[i].addEventListener('click', () => {

        /* Toggle between hiding and showing the active panel */
        let answer = landingApp.questions[i].nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })}
