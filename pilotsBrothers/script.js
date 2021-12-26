import includeHeader from '../header.js';

includeHeader();

let field;

function getValue() {
  let width = document.getElementById('width');
  let height = document.getElementById('height');

  return {
    width: width.value,
    height: height.value,
  };
}

document
  .querySelector('#generateButton')
  .addEventListener('click', generateField);

function generateField() {
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
  let id = event.currentTarget.id;
  let x = parseInt(id[5]);
  let y = parseInt(id[6]);

  for (let i = 0; i < field.length; i++) {
    switchActive(field[i][y]);
  }
  for (let i = 0; i < field[0].length; i++) {
    switchActive(field[x][i]);
  }
  switchActive(field[x][y]);
}

function switchActive(cell) {
  if (cell.classList.contains('active')) {
    cell.classList.remove('active');
  } else {
    cell.classList.add('active');
  }
}
