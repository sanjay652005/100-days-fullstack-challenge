const emojis = ["😀", "🐱", "🌸", "🚗", "🍕", "⚽", "🎵", "🌈"];
let cards = [...emojis, ...emojis];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let timer = 0;
let timerInterval;

const gameBoard = document.getElementById("gameBoard");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const restartBtn = document.getElementById("restart");
const winMessage = document.getElementById("winMessage");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  gameBoard.innerHTML = "";
  cards = shuffle(cards);
  moves = 0;
  matchedPairs = 0;
  movesDisplay.textContent = moves;
  winMessage.style.display = "none";
  resetTimer();

  cards.forEach((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.innerHTML = "❓";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains("matched")) return;

  this.textContent = this.dataset.emoji;
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    if (moves === 0) startTimer();
    return;
  }

  secondCard = this;
  moves++;
  movesDisplay.textContent = moves;

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === emojis.length) endGame();

    resetFlip();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.textContent = "❓";
      secondCard.textContent = "❓";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetFlip();
    }, 1000);
  }
}

function resetFlip() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function startTimer() {
  timer = 0;
  timerInterval = setInterval(() => {
    timer++;
    timerDisplay.textContent = timer;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timer = 0;
  timerDisplay.textContent = timer;
}

function endGame() {
  clearInterval(timerInterval);
  winMessage.style.display = "block";
}

restartBtn.addEventListener("click", startGame);

startGame();
