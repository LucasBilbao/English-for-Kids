import { isInPlayMode } from '../play-mode/play-mode';
import { playGame } from '../game/game';

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
document.body.appendChild(btnContainer);

const btn = document.createElement('button');
btn.classList.add('game-btn');
btn.innerHTML = 'Start Game';

btn.addEventListener('click', () => {
  btn.innerHTML = '<img src="../flip/assets/turn.png"/>';
  btn.addEventListener('click', () => {
    window.location.reload();
  });
});

btn.onclick = function () {
  playGame();
};

export function startGameBtn() {
  if (isInPlayMode()) {
    btn.innerHTML = 'Start Game';
    btnContainer.appendChild(btn);
  } else {
    btnContainer.removeChild(btn);
  }
}
