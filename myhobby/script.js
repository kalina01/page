function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menubutton')) {
      var dropdowns = document.getElementsByClassName("menucontent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

var piano = new Audio("../sound/piano.mp3");
var gitara = new Audio("../sound/gitara.mp3");
var flute = new Audio("../sound/flute.mp3");