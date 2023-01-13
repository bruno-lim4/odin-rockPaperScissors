var playerPoints = 0, computerPoints = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let choice = options[Math.floor(Math.random() * options.length)]

    return choice
}

function playRound(player, computer) {
    var res = "I didn't understand what you've typed!";
    var point = -1;

    if (player == 'rock') {
        if (computer == 'paper') {
            res = "<b>You Lose!</b> Paper beats Rock"
            point = -1
        } else {
            res = "<b>You Win!</b> Rock beats Scissors"
            point = 1
        }
    }

    if (player == 'paper') {
        if (computer == 'rock') {
            res = "<b>You Win!</b> Paper beats Rock"
            point = 1
        } else {
            res = "<b>You Lose!</b> Scissors beats Paper"
            point = -1
        }
    }

    if (player == 'scissors') {
        if (computer == 'paper') {
            res = "<b>You Win!</b> Scissors beats Paper"
            point = 1
        } else {
            res = "<b>You Lose!</b> Rock beats Scissors"
            point = -1
        }
    }

    if (player == computer) {
        res = "It's a tie!"
        point = 0
    }

    return [res, point] // 1 - player win   -1 - pc wins   0 - tie
}

function hideResult() {
    const div = document.querySelector('.result');
    if (!div) return;
    div.textContent = "";
}

function showResult() {
    if (!document.querySelector('.result')) {
        let div = document.createElement('div');
        div.classList.add('result');
        div.textContent = playerPoints==5? "YOU WIN" : "YOU LOSE";
        document.querySelector('.cards').append(div);
    } else {
        const div = document.querySelector('.result');
        div.textContent = playerPoints==5? "YOU WIN" : "YOU LOSE";
    }
}

function showMessage(pcChoice, message) {
    if (!document.querySelector('.message')) {
        let div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `Computer choice: ${pcChoice} <br> ${message}`
        document.querySelector('.cards').append(div);
    } else {
        const div = document.querySelector('.message');
        div.innerHTML = `Computer choice: ${pcChoice} <br> ${message}`
    }
}

function updateScore() {
    const playerScore = document.querySelector('#you');
    const computerScore = document.querySelector('#pc');

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

function processClick(e) {
    let player_choice = e.target.dataset.choice;

    if (!player_choice) return;

    if (playerPoints == 0 && computerPoints == 0) {
        hideResult();
    }

    let pcChoice = getComputerChoice();

    let result = playRound(player_choice, pcChoice);

    console.log(result);

    if (result[1] == -1) {
        computerPoints++;
        if (computerPoints == 5) {
            showResult();
            computerPoints = 0;
            playerPoints = 0;
        }
    } else if (result[1] == 1) {
        playerPoints++;
        if (playerPoints == 5) {
            showResult();
            computerPoints = 0;
            playerPoints = 0;

        }
    }

    console.log(playerPoints);
    updateScore();
    showMessage(pcChoice, result[0]);
}

document.addEventListener('click', processClick);