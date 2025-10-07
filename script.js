//Trying to make some sense:/

let i;
let questions = document.getElementsByClassName("question");

//Listen for click event on buttons:/
//When a button is clicked, toggle the style of the answer block under the
//question to appear or disappear

for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active");
    
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none"
    }   else {
        answer.style.display = "block";
    }
    })
}