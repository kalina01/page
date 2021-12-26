import includeHeader from '../header.js';

includeHeader();

let historyPerson1 = [];
let historyPerson2 = [];
let isPerson2 = true;

window.onload = function () {
  let historyPerson2Json = window.localStorage.getItem('historyPerson2');
  if (historyPerson2Json !== null) {
    historyPerson2 = JSON.parse(historyPerson2Json);
    historyPerson2.forEach((msg) => {
      addMessage(msg);
    });
  }
  let historyPerson1Json = window.localStorage.getItem('historyPerson1');
  if (historyPerson1Json !== null) {
    historyPerson1 = JSON.parse(historyPerson1Json);
  }
};

const plane = document.querySelector('#plane');
plane.addEventListener('click', function () {
  let textArea = document.querySelector('textarea');
  addMessage(textArea.value);
  if (isPerson2) {
    historyPerson2.push(textArea.value);
    window.localStorage.setItem(
      'historyPerson2',
      JSON.stringify(historyPerson2)
    );
  } else {
    historyPerson1.push(textArea.value);
    window.localStorage.setItem(
      'historyPerson1',
      JSON.stringify(historyPerson1)
    );
  }
  textArea.value = '';
});

document
  .querySelector('button.person1')
  .addEventListener('click', selectPerson1);
document
  .querySelector('button.person2')
  .addEventListener('click', selectPerson2);

function selectPerson1() {
  let messengerWindow = document.querySelector('.messengerWindow');
  messengerWindow.classList.remove('person2');
  messengerWindow.classList.add('person1');
  isPerson2 = false;
  document.querySelector('.messageBox').innerHTML = '';
  historyPerson1.forEach((msg) => {
    addMessage(msg);
  });
}

function selectPerson2() {
  console.log('Hello');
  let messengerWindow = document.querySelector('.messengerWindow');
  messengerWindow.classList.remove('person1');
  messengerWindow.classList.add('person2');
  isPerson2 = true;
  document.querySelector('.messageBox').innerHTML = '';
  historyPerson2.forEach((msg) => {
    addMessage(msg);
  });
}

function addMessage(text) {
  let message = document
    .querySelector('#messageTemplate')
    .content.cloneNode(true);
  message.querySelector('p').innerText = text;
  let messageBox = document.querySelector('.messageBox');
  messageBox.append(message);
}
