let points = 0;
let level = 1;

// Function to update the displayed points
function updatePoints() {
  document.getElementById("points").textContent = points;
}

// Function to update the displayed level
function updateLevel() {
  document.getElementById("level").textContent = level;
}

// Handle clicking the "thingy"
document.getElementById("clickBtn").addEventListener("click", () => {
  points += 1;

  // Level up every 10 points
  if (points >= level * 10) {
    level += 1;
    document.getElementById("message").textContent = `You leveled up to ${level}!`;
  } else {
    document.getElementById("message").textContent = "";
  }

  updatePoints();
  updateLevel();
});
