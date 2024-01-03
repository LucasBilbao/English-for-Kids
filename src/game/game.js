import { audios } from '../play-audio/paly-audio';

const spongeBob = {
  right: new Audio('../src/game/audios/right.wav'),
  wrong: new Audio('../src/game/audios/wrong.wav'),
  won: new Audio('../src/game/audios/won.wav'),
  lost: new Audio('../src/game/audios/lost.wav'),
};

// lower the volume of the audios in the spongeBob's object
for (const key in spongeBob) {
  spongeBob[key].volume = 0.2;
}

let audiosKeys = [];
for (const key in audios) {
  audiosKeys = [...audiosKeys, key];
}

Array.prototype.isNotEmpty = function () {
  return this.length !== 0;
};

Array.prototype.has = function (item) {
  return this.indexOf(item) !== -1;
};

function clickedCorrect(looking, clicked) {
  return looking === clicked;
}

function removeFromList(i, elem) {
  audiosKeys.splice(i, 1);
  elem.style.opacity = '0.5';
}

let wrongs = 0;

export function playGame() {
  let index;
  if (audiosKeys.isNotEmpty()) {
    index = Math.floor(Math.random() * audiosKeys.length);
    setTimeout(() => {
      audios[audiosKeys[index]].play();
    }, 1000);
    window.onclick = (e) => {
      e.getGrandparentElement = e.path[2];
      if (audiosKeys.has(e.getGrandparentElement.id)) {
        if (clickedCorrect(audiosKeys[index], e.getGrandparentElement.id)) {
          setTimeout(() => {
            spongeBob['right'].play();
          }, 500);
          removeFromList(index, e.getGrandparentElement);
          setTimeout(() => {
            playGame();
          }, 3000);
        } else {
          wrongs += 1;
          setTimeout(() => {
            spongeBob['wrong'].play();
          }, 500);
        }
      }
    };
  } else
    switch (wrongs) {
      case 0:
        setTimeout(() => {
          spongeBob['won'].play();
        }, 1000);
        wrongs = -1;
        setTimeout(() => {
          playGame();
        }, 5000);
        break;
      case -1:
        window.location.reload();
        break;
      default:
        setTimeout(() => {
          spongeBob['lost'].play();
        }, 1000);
        wrongs = -1;
        setTimeout(() => {
          playGame();
        }, 5000);
    }
}
