function seleccionarCoder(listaDeCoders, position) {
    let elegida = listaDeCoders.splice(position,1)[0];
    return elegida;
}

$(document).ready(function() {

    let coderArray = ["Alexia", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Gràcia", "Helen", "Joana", "Judith", "Kristina", "Laura C.", "Laura M.", "Marisa", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
    let namesAlreadyPicked = [];

    let buttonToChooseCoders = $('.buttonToChooseCoders');
    let restartButton = $('.restartButton');
    let winnerSection = $('.winnerSection');
    let availableCoders = $('.availableCoders');

    function showCoders() {
        availableCoders.html(coderArray.map(coder => `<div>${coder}</div>`));
        restartButton.hide();
    }

    showCoders();

    function chooseCoder() {
        let position = Math.floor(Math.random() * coderArray.length);
        let winner = seleccionarCoder(coderArray, position);
        winnerSection.html(winner);
        namesAlreadyPicked.push(winner);
        showCoders();
        if (coderArray.length === 0) {
            restartButton.show();
            buttonToChooseCoders.hide();
            winnerSection.empty();            
        }
    }

    function restart() {
        coderArray = namesAlreadyPicked.sort();
        namesAlreadyPicked = [];
        showCoders();
        buttonToChooseCoders.show();
    }
    
    buttonToChooseCoders.on("click", chooseCoder);
    restartButton.on("click", restart);

});