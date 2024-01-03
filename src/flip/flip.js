import { dictionary } from '../dictionary/dictionary';
import { isNotOnMainPage } from '../play-audio/paly-audio';

let language = ['en', 'ge'];

if (isNotOnMainPage) {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.appendChild(document.createElement('img'));
    card.lastElementChild.setAttribute('src', '../flip/assets/turn.png');
    card.lastElementChild.classList.add('flip-icon');
  });

  cards.forEach((card) => {
    card.children[2].addEventListener('click', () => {
      card.classList.add('flip');
      card.children[2].classList.add('disable');
      card.children[1].classList.add('flip');
      card.children[1].innerHTML = dictionary[card.id][language[1]];

      card.addEventListener('mouseleave', () => {
        card.classList.remove('flip');
        card.children[2].classList.remove('disable');
        card.children[1].classList.remove('flip');
        card.children[1].innerHTML = dictionary[card.id][language[0]];
      });
    });
  });
}
