/* jshint esversion: 11 */


// Modal code sourced from W3 Schools and Traversy Media

let modal = document.getElementById('modal');
let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close');

// open the newsletter signup form

openBtn.onclick = function() {
    modal.style.display= "block";
};

// Close the newsletter signup form

closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the signup form if the user clicks on the dark area

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Code for book quiz:

let radios = document.querySelectorAll('input[type=radio]');
let score = 0;
let result = document.getElementById('result');
let recommendedBook, bookImg;
let startBtn = document.getElementById('start-quiz');
let quizSection = document.getElementById('quiz-section');
let newsSection = document.getElementById('news-section');
let nextBtns = document.querySelectorAll('.next-button');

let refresh = document.getElementsByClassName('.refresh');

const calculateBtn = document.getElementById('calculate');

// Add the data points of each option selected

calculateBtn.addEventListener('click', function(){
    radios.forEach(radio => {
       if (radio.checked) {
        score += parseInt(radio.dataset.points);
       }
    });

    result.innerText = score;
    calculateRecommendation();

});

// radios.forEach(radio => {
//     radio.addEventListener('click', function(){
//         console.log(this.dataset.points);
//     });
// });


// Recommend a book based on the points score

function calculateRecommendation() {
    if (score <= 14) {
        recommendedBook = "Towards Zero";
        bookImg = "towards-zero.jpg";
    } else if (score >= 15 && score <= 28) {
        recommendedBook = "The Clocks";
        bookImg = "the-clocks.jpg";
    } else if (score >= 29 && score <= 42) {
        recommendedBook = "Murder at the Vicarage";
        bookImg = "murder-at-the-vicarage.jpg";
    } else if (score >= 43 && score <= 56) {
        recommendedBook = "And Then There Were None";
        bookImg = "and-then-there-were-none.jpg";
    } else {
        recommendedBook = "Death on the Nile";
        bookImg = "death-on-the-nile.jpg";
    }
    result.innerText = recommendedBook;
    document.getElementById('book-image').alt = recommendedBook;
    document.getElementById('book-image').src = "assets/images/" + bookImg;
}

// Hide the newssection when the user starts the quiz

startBtn.addEventListener('click', function() {
    newsSection.classList.add('hide');
    quizSection.classList.remove('hide');
    startBtn.classList.add('hide');
}
);

// Show the next question and hide the previous one

nextBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let nextQuestion = parseInt(btn.dataset.next); 
        let currentQuestion = nextQuestion - 1; 
        let currentDiv = document.querySelectorAll(`[data-question="${currentQuestion}"]`)[0];
       
        currentDiv?.classList.add('hide');
        let nextDiv = document.querySelectorAll(`[data-question="${nextQuestion}"]`)[0];
        nextDiv?.classList.remove('hide');
    });
 });

//  Show the newssection and hide the quiz

refresh.addEventListener('click', function() {
    newsSection.classList.remove('hide');
    quizSection.classList.add('hide');
    startBtn.classList.remove('hide');
});

