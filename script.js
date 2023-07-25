const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");
const playerMove = document.getElementById("player-move");
const AIMove = document.getElementById("ai-move");
let aiPoints = document.getElementById("ai-points");
let playerPoints = document.getElementById("player-points");

rockBtn.addEventListener("click", e => {
    playerMove.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`
});

paperBtn.addEventListener("click", e => {
    playerMove.innerHTML = `<i class="fa-regular fa-hand"></i>`
});

scissorBtn.addEventListener("click", e => {
    playerMove.innerHTML = `<i class="fa-regular fa-hand-peace"></i>`
});

lizardBtn.addEventListener("click", e => {
    playerMove.innerHTML = `<i class="fa-regular fa-hand-lizard"></i>`
});

spockBtn.addEventListener("click", e => {
    playerMove.innerHTML = `<i class="fa-regular fa-hand-spock"></i>`
});

const gen1to5 = () => {
    return(Math.floor(Math.random()*5)+1)
};

const returnIcon = (num) => {
    if(num === 1) {
        return(`<i class="fa-regular fa-hand-back-fist"></i>`)
    } else if(num === 2) {
        return(`<i class="fa-regular fa-hand"></i>`)
    } else if(num === 3) {
        return(`<i class="fa-regular fa-hand-peace"></i>`)
    } else if(num === 4) {
        return(`<i class="fa-regular fa-hand-lizard"></i>`)
    } else if(num === 5) {
        return(`<i class="fa-regular fa-hand-spock"></i>`)
    }
};

const addPoint = (aiOrPlayer) => {
    aiOrPlayer.value++
};

const determineWinner = () => {
    if(
    // rock > scissor
    playerMove.innerHTML === `<i class="fa-regular fa-hand-back-fist"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-peace"></i>`
    // paper > rock
    || playerMove.innerHTML === `<i class="fa-regular fa-hand"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-back-fist"></i>`
    // scissor > papper
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-peace"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand"></i>`
    // rock > lizard
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-back-fist"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-lizard"></i>`
    // lizard > spock
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-lizard"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-spock"></i>`
    // spock > scissor
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-peace"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand"></i>`
    // scissor > lizard
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-peace"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-lizard"></i>`
    // lizard > paper
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-lizard"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand"></i>`
    // paper > spock
    || playerMove.innerHTML === `<i class="fa-regular fa-hand"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-spock"></i>`
    // spock > rock
    || playerMove.innerHTML === `<i class="fa-regular fa-hand-spock"></i>`
    && AIMove.innerHTML === `<i class="fa-regular fa-hand-back-fist"></i>`
    ) {
        playerPoints.value++;
    } else if(playerMove.innerHTML === AIMove.innerHTML) {
        console.log("draw");
    } else {
        aiPoints.value++;
    }

    

    // scissor > paper

};

document.addEventListener("click", e => {
    if(e.target.parentNode.classList.contains("player-btn")) {
        AIMove.innerHTML = returnIcon(gen1to5())
    }

    determineWinner()
});