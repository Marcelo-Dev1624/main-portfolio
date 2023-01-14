window.addEventListener('DOMContentLoaded', event => {
    // Get the container element
var btnContainer = document.getElementById("navbar-menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-item active");
    current[0].className = current[0].className.replace("menu-item active", " menu-item");
    this.className += " menu-item active";
  });
}

})

