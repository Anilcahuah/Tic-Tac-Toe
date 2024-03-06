let chance = 'X';

function getNumber(num) {

    if (chance === 'X' || chance === 'O') {
        const buttons = document.getElementsByTagName("button");
        buttons[num].innerHTML = `<img src="Images/${chance.toLowerCase()}.png" class="player-sign">`;
        buttons[num].disabled = true;
        winComb[num] = chance;

        getWinner();
        chance = (chance === 'X') ? 'O' : 'X';
        updatePlayerDisplay();
    }
}


let winComb = Array(9).fill(null)
let winner = false
function getWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern

        if (winComb[a] === winComb[b] && winComb[b] === winComb[c] && winComb[a] !== null) {
            console.log("success", pattern);
            winner = true
        }
    }

    if (winner) {
        document.querySelector('div>h1').innerHTML = `<h3>Winner is :- ${chance}</h3>`
        let btns = document.getElementsByTagName('button')
        for (let btn of btns) {
            btn.disabled = true;
        }
    }
}

updatePlayerDisplay();

function updatePlayerDisplay() {
    const players = ['X', 'O'];
    players.forEach(player => 
        document.getElementById(`player${player}`).classList.toggle('glow', player === chance)
    );
}