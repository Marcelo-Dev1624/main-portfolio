
var sections = document.querySelectorAll('section');
onscroll = function() {
    var scrollPosition = this.document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight*0.25 && scrollPosition + section.offsetHeight - section.offsetHeight*0.25) {
            var currentID = section.attributes.id

            removeAllActiveClass();
            addActiveClass(currentID);
        }
    })
}

var removeAllActiveClass = function() {
    document.querySelectorAll('nav a').forEach (el => {
        el.classList.remove("active")
    })
}

var addActiveClass = function(id) {
    console.log(id);
    var selector = 'nav a[href="#${id}"]';
    document.querySelector(selector).classList.add("active");
}