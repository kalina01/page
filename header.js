export default function includeHeader() {
  const header = createHeader();
  document.querySelector('body').prepend(header);

  const button = document.querySelector('.menubutton');
  button.addEventListener('click', myFunction);

  function myFunction() {
    document.querySelector('.menucontent').classList.toggle('show');
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.menubutton')) {
      var dropdowns = document.getElementsByClassName('menucontent');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
}

function createHeader() {
  const header = document.createElement('header');

  const home = document.createElement('a');
  const wai = document.createElement('button');
  wai.classList.add('wai');
  wai.innerText = 'Кто я?';
  home.href = '/index.html';
  home.appendChild(wai);

  const dropmenu = document.createElement('div');
  dropmenu.classList.add('dropmenu');

  const button = document.createElement('button');
  button.classList.add('menubutton');
  button.innerText = 'Тык тык';

  const menucontent = document.createElement('div');
  menucontent.classList.add('menucontent');

  const hobby = document.createElement('a');
  hobby.href = '/myhobby/index.html';
  hobby.innerText = 'Про хобби';

  const education = document.createElement('a');
  education.href = '/education/index.html';
  education.innerText = 'Про учебу';

  const messenger = document.createElement('a');
  messenger.href = '/messenger/index.html';
  messenger.innerText = 'Мессенджер';

  const WhackAMole = document.createElement('a');
  WhackAMole.href = '/WhackAMole/index.html';
  WhackAMole.innerText = 'Ударь крота';

  const pilotsBrothers = document.createElement('a');
  pilotsBrothers.href = '/pilotsBrothers/index.html';
  pilotsBrothers.innerText = 'Братья пилоты';

  const timer = document.createElement('a');
  timer.href = '/timer/index.html';
  timer.innerText = 'Обратный отсчёт';

  const memes = document.createElement('a');
  memes.href = '/memes/index.html';
  memes.innerText = 'Мемы';

  header.appendChild(home);
  menucontent.appendChild(hobby);
  menucontent.appendChild(education);
  menucontent.appendChild(messenger);
  menucontent.appendChild(WhackAMole);
  menucontent.appendChild(pilotsBrothers);
  menucontent.appendChild(timer);
  menucontent.appendChild(memes);
  dropmenu.appendChild(button);
  dropmenu.appendChild(menucontent);
  header.appendChild(dropmenu);
  return header;
}
