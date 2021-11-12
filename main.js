$(document).ready(function() {

    let coderArray = ["Alexia", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
    let namesAlreadyPicked = [];

    let buttonToChooseCoders = $('.buttonToChooseCoders');
    let winnerSection = $('.winnerSection');
    let availableCoders = $('.availableCoders');

    availableCoders.html(coderArray.slice().join("<div></div>"));


    function chooseCoder() {
        let winner = coderArray[Math.floor(Math.random() * coderArray.length)];
        winnerSection.html(winner);
        namesAlreadyPicked.push(winner);
        coderArray.splice(winner, 1);
        updateList();
    }

    function updateList(winner) {
        availableCoders.html(coderArray.slice().join("<div></div>"));
    }
    
    buttonToChooseCoders.on("click", chooseCoder);


});