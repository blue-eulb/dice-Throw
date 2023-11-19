function whoWins() {
    var dices = ["dice1","dice2","dice3","dice4","dice5","dice6"];

    var player1 = Math.floor(Math.random()*6);
    var player2 = Math.floor(Math.random()*6);

    var player1dice = dices[player1];
    var player2dice = dices[player2];

    document.querySelector(".result1").classList.add(player1dice);
    document.querySelector(".result2").classList.add(player2dice);

    if (player1 > player2) {
        document.querySelector("h1").textContent="🚩Player1 wins";
    } else if (player1 < player2) {
        document.querySelector("h1").textContent="Player2 wins🚩";
    } else {
        document.querySelector("h1").textContent="It is a draw! ✌️";
    }

}

whoWins();