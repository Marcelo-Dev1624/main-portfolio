var coll = document.getElementsByClassName("navbar-menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
      body.classList.toggle("blur");
    } else {
      content.style.display = "flex";
      body.classList.toggle("blur");
    }
  });
}


