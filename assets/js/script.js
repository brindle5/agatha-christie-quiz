let radio = document.getElementsByTagName('radio');

let score;


function questionOne() {
   
    let exotic = document.getElementById('exotic');
    let mansion = document.getElementById('mansion');
    let townhouse = document.getElementById('townhouse');

    if (exotic) {
        score = score + 5;
    } else if (mansion) {
        score = score + 10;
    } else if (townhouse); {
        score = score + 1;
    }  

}

function questionTwo() {

}

function questionThree() {

}

function calculateRecommendation() {
    if (score < 14) {
        recommendBookOne
    } else if (score > 15) {
        recommendBookTwo
    }
}

