
let radios = document.querySelectorAll('input[type=radio]');
let score = 0;
let result = document.getElementById('result');
let recommendedBook, bookImg;

const calculateBtn = document.getElementById('calculate');

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


function calculateRecommendation() {
    if (score <= 14) {
        recommendedBook = "Towards Zero";
        bookImg = "towards-zero.jpg";
    } else if (score >= 15 && score <= 28) {
        recommendedBook = "The Clocks";
        bookImg = "the-clocks.png";
    } else if (score >= 29 && score <= 42) {
        recommendedBook = "Murder at the Vicarage";
        bookImg = "the-clocks.png";
    } else if (score >= 43 && score <= 56) {
        recommendedBook = "And Then There Were None";
        bookImg = "the-clocks.png";
    } else {
        recommendedBook = "Death on the Nile";
        bookImg = "the-clocks.png";
    }
    result.innerText = recommendedBook;
    document.getElementById('book-image').src = "assets/images/" + bookImg;
}

