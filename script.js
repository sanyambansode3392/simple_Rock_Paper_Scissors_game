function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function makeChoice(userChoice) {
    const computer = computerChoice();
    const result = determineWinner(userChoice, computer);

    document.getElementById('outcome').innerText = result;
    document.getElementById('computerResult').innerText = `Computer chose ${computer}.`;

    // Optional: Highlight the choices
    document.getElementById('userChoice').classList.remove('winner', 'loser', 'tie');
    document.getElementById('computerChoice').classList.remove('winner', 'loser', 'tie');

    if (result === 'You win!') {
        document.getElementById('userChoice').classList.add('winner');
        document.getElementById('computerChoice').classList.add('loser');
    } else if (result === 'Computer wins!') {
        document.getElementById('userChoice').classList.add('loser');
        document.getElementById('computerChoice').classList.add('winner');
    } else {
        document.getElementById('userChoice').classList.add('tie');
        document.getElementById('computerChoice').classList.add('tie');
    }
}
