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
