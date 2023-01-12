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
            res = "You Lose! Paper beats Rock"
            point = -1
        } else {
            res = "You Win! Rock beats Scissors"
            point = 1
        }
    }

    if (player == 'paper') {
        if (computer == 'rock') {
            res = "You Win! Paper beats Rock"
            point = 1
        } else {
            res = "You Lose! Scissors beats Paper"
            point = -1
        }
    }

    if (player == 'scissors') {
        if (computer == 'paper') {
            res = "You Win! Scissors beats Paper"
            point = 1
        } else {
            res = "You Lose! Rock beats Scissors"
            point = -1
        }
    }

    if (player == computer) {
        res = "It's a tie!"
        point = 0
    }

    return [res, point] // 1 - player win   -1 - pc wins   0 - tie
}

function game() {
    let userp = 0, computerp = 0

    for(let i = 0; i < 5; i++) {
        let result = playRound(prompt("Type: Paper, Rock, or Scissors").toLowerCase(), getComputerChoice())

        console.log(result[0])

        if (result[1] == 1) {
            userp++;
        } else if (result[1] == -1) {
            computerp++;
        }
    }

    console.log("Final Score: \nYou: " + userp + " points\n" + "Computer: " + computerp + " points");
    
    if (userp > computerp) {
        console.log("YOU WIN")
    } else if (computerp > userp) {
        console.log("YOU LOSE")
    } else {
        console.log("TIE")
    }
}

game()