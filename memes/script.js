import includeHeader from '../header.js';

includeHeader();

fetch('../memes.json').then((result) => {
  result.json().then((result) => {
    console.log(result);

    let imgContainer = document.createElement('img');
    imgContainer.src = result.url;
    let body = document.querySelector('body');
    body.append(imgContainer);

    imgContainer = document.createElement('img');
    imgContainer.src = result.picOnServer;
    body.append(imgContainer);

    let base64 = result.base64;
    imgContainer = new Image();
    imgContainer.src = base64;
    body.append(imgContainer);
  });
});
