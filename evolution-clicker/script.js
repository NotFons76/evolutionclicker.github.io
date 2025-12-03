let points = 0;
let level = 1;
const pointsPerClick = 1;
const clickBtn = document.getElementById("clickBtn");
const pointsDisplay = document.getElementById("points");
const levelDisplay = document.getElementById("level");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  points += pointsPerClick;
  pointsDisplay.textContent = points;
  checkEvolution();
});

function checkEvolution() {
  if (points >= level * 10) { // simple evolution condition
    level++;
    levelDisplay.textContent = level;
    message.textContent = "You evolved!";
    setTimeout(() => { message.textContent = ""; }, 2000);
  }
}
