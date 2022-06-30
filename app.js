const landingApp = {};

// variables
landingApp.questions = document.getElementsByClassName("question");
landingApp.buttonContent = document.querySelectorAll(".question > button > span")


    for (let i = 0; i < landingApp.questions.length; i++) {
    landingApp.questions[i].addEventListener('click', () => {

        /* Toggle between hiding and showing the active panel */
        let answer = landingApp.questions[i].nextElementSibling;
        console.log(landingApp.buttonContent[0]);
        if (answer.style.display === "block") {
            answer.style.display = "none";
            if(landingApp.buttonContent[i].classList.contains('minus-symbol')) {
                landingApp.buttonContent[i].classList.remove('minus-symbol');
                landingApp.buttonContent[i].classList.add('plus-symbol');
            }
        } else {
            answer.style.display = "block";
            landingApp.buttonContent[i].classList.remove('plus-symbol');
            landingApp.buttonContent[i].classList.add('minus-symbol');
        }
    })}
