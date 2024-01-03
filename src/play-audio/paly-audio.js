import { isInPlayMode } from '../play-mode/play-mode';

const cards = document.querySelectorAll('.card');
const audios = {};

let path = window.location.pathname;
let isNotOnMainPage = path.split('/').pop() !== 'main.html';

cards.forEach((item) => {
  if (isNotOnMainPage) {
    audios[`${item.id}`] = new Audio(`./assets/audio/${item.id}.mp3`);
    item.addEventListener('click', () => {
      if (!isInPlayMode()) {
        audios[`${item.id}`].play();
      }
    });
  }
});

export { isNotOnMainPage, cards, audios };
