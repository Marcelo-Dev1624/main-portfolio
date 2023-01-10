let navbar = document.getElementsByClassName('navbar');
let navbarLinks = navbar.getElementsByClassName('menu-item');

for (var i =0; i<navbarLinks.length; i++)
{
    navbarLinks[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active")
        this.className += "active";
    })
}

