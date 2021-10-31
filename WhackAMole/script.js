function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
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

let field;

function getValue() {
  let width = document.getElementById('width');
  let height = document.getElementById('height');

  return {
    width: width.value,
    height: height.value,
  };
}

function generateField() {
  clearInterval(gameloop);
  score = 0;
  updateScore(score);
  const fieldBox = document.getElementById('fieldBox');
  fieldBox.innerHTML = '';

  let size = getValue();
  let cell = document.createElement('div');
  cell.setAttribute('class', 'cell');

  let row = document.createElement('div');
  row.setAttribute('class', 'row');

  field = new Array(width);
  for (let i = 0; i < size.width; i++) {
    let currentRow = row.cloneNode(true);
    fieldBox.append(currentRow);
    field[i] = new Array(height);
    for (let j = 0; j < size.height; j++) {
      let currentCell = cell.cloneNode(true);
      currentCell.id = `cell-${i}${j}`;
      currentRow.append(currentCell);

      currentCell = currentRow.querySelector(`#cell-${i}${j}`);
      field[i][j] = currentCell;

      field[i][j].addEventListener('click', onCellClick);
    }
  }
}

function onCellClick(event) {
  if (!isPlaying) {
    return;
  }
  if (event.currentTarget === activeMole) {
    score++;
    updateScore(score);
  }
}

let activeMole;
let isPlaying = false;
let gameloop;
let score = 0;
let scoreInfo = document.createElement('p');
scoreInfo.style = 'align-self: center;';

function play() {
  let menu = document.querySelector('.menu');

  menu.append(scoreInfo);
  gameloop = setInterval(mole, 1000);
  isPlaying = true;
}

function mole() {
  if (activeMole != null) {
    activeMole.classList.remove('mole');
  }
  width = Math.floor(Math.random() * field.length);
  height = Math.floor(Math.random() * field[0].length);
  activeMole = field[width][height];
  activeMole.classList.add('mole');
}

function updateScore(score) {
  scoreInfo.innerText = `Счёт: ${score}`;
}
