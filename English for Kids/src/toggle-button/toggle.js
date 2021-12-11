import { isInPlayMode } from '../play-mode/play-mode';
import { isNotOnMainPage, cards } from '../play-audio/paly-audio';
import { startGameBtn } from '../start-game-btn/start-game-btn';

// create a container for the toggle button
const container = document.createElement('div');

container.classList.add('container');

document.body.appendChild(container);

// create the toggle button
const toggleBtn = document.createElement('div');

toggleBtn.classList.add('toggle-btn');

container.appendChild(toggleBtn);

if (isInPlayMode()) {
  toggleBtn.classList.add('activate');
}

// create the mode indicator
const mode = document.createElement('p');

mode.classList.add('mode');

toggleBtn.appendChild(mode);

if (isInPlayMode()) {
  mode.innerHTML = 'Play';
  if (isNotOnMainPage) {
    cards.forEach((card) => {
      card.classList.add('play-mode');
    });
    startGameBtn();
  }
} else {
  mode.innerHTML = 'Train';
}

toggleBtn.onclick = () => {
  toggleBtn.classList.toggle('activate');
};

// create the toggle circle
const innerCircle = document.createElement('div');

innerCircle.classList.add('inner-circle');

toggleBtn.appendChild(innerCircle);

toggleBtn.addEventListener('click', () => {
  if (!isInPlayMode()) {
    mode.innerHTML = 'Play';
    localStorage.setItem('inPlayMode', `${!isInPlayMode()}`);
  } else {
    mode.innerHTML = 'Train';
    localStorage.setItem('inPlayMode', `${!isInPlayMode()}`);
  }
  if(isNotOnMainPage){
    startGameBtn();
  }
});

// get the cards in play mode
toggleBtn.addEventListener('click', () => {
  if (isNotOnMainPage) {
    cards.forEach((card) => {
      card.classList.toggle('play-mode');
    });
  }
});
