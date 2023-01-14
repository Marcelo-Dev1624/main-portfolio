const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-menu ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (section.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.href.includes(current)) {
      li.classList.add('active');
    }
  });
};