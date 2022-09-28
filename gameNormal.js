const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let turn = 0;
var win = document.getElementById('win');

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

if (!hasFlippedCard) {
hasFlippedCard = true;
firstCard = this;

return;
}

secondCard = this;
checkForMatch();
}

function checkForMatch() {
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards();
}



function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
score++;
turn++;
if (score == 8){
startConfetti();
win.innerHTML = "Bravo ! <br> tu as finis le memory en "+ turn + " coups !"
win.style = "position: relative; justify-content: center;text-align: center;font-size: 25px;font-weight: 600;-webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) ;  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) ";
}
resetBoard();
}

function unflipCards() {
lockBoard = true;

setTimeout(() => {
firstCard.classList.remove('flip');
secondCard.classList.remove('flip');
turn++;
resetBoard();
}, 1500);
}

function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}

(function shuffle() {
cards.forEach(card => {
let randomPos = Math.floor(Math.random() * 16);
card.style.order = randomPos;
});
})();

cards.forEach(card => card.addEventListener('click', flipCard));