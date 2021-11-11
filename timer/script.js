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

var microwave = new Audio('../sound/microwave.mp3');
let seconds = 5;
let milliseconds = 0;
let delay = 33;
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
