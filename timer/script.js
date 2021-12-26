import includeHeader from '../header.js';
import microwaveSound from '../sound/microwave.mp3';
includeHeader();

var microwave = new Audio(microwaveSound);
let seconds = 5;
let milliseconds = 0;
let delay = 33;

document.querySelector('#timeButton').addEventListener('click', start);
function start() {
  const promise = new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      let time = document.getElementById('time');

      if (milliseconds <= 0) {
        seconds--;
        milliseconds = 1000;
      } else {
        updateTime();
        milliseconds -= delay;
      }
      if (seconds <= 0 && milliseconds <= 0) {
        seconds = 0;
        milliseconds = 0;
        updateTime();
        clearInterval(interval);
        resolve('ok');
      }
    }, delay);
  });
  promise.then(() => {
    microwave.play();
    seconds = 5;
    milliseconds = 0;
    updateTime();
  });
}

function updateTime() {
  time.innerText = `00:0${seconds}:${('000' + milliseconds).slice(-3)}`;
}
