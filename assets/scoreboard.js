function scoreboard() {
  const latestScore = document.getElementById('latestScore');
  const lastLevel = document.getElementById('lastLevel');
  const highScore = document.getElementById('highScore');
  const highLevel = document.getElementById('highLevel');

  const lastResult = JSON.parse(localStorage.getItem('last result'));
  const bestResult = JSON.parse(localStorage.getItem('best result'));

  if (lastResult !== null) {
    latestScore.innerText = lastResult.score;
    lastLevel.innerText = lastResult.lvl;
  }
  if (bestResult !== null) {
    highScore.innerText = bestResult.score;
    highLevel.innerText = bestResult.lvl;
  }
}
scoreboard();
