import includeHeader from '../header.js';
import pianoSound from '../sound/piano.mp3';
import guitarSound from '../sound/gitara.mp3';
import fluteSound from '../sound/flute.mp3';

includeHeader();

const pianoInput = document.querySelector('#piano');
pianoInput.addEventListener('click', function () {
  piano.play();
});

const guitarInput = document.querySelector('#guitar');
guitarInput.addEventListener('click', function () {
  guitar.play();
});

const fluteInput = document.querySelector('#flute');
fluteInput.addEventListener('click', function () {
  flute.play();
});

var piano = new Audio(pianoSound);
var guitar = new Audio(guitarSound);
var flute = new Audio(fluteSound);
