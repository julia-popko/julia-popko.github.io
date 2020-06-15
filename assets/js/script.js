let body = document.body;
let burger = document.querySelector(".burger");

function openNav(e) {
    var element = e.parentNode;
    element.classList.toggle("nav-open");
    body.classList.toggle("stop-scrolling");
}

function openModal(e) {
    var element = e.parentNode;
    element.classList.add("modal-open");
    body.classList.add("stop-scrolling");
    burger.style.display = "none";
}

function closeModal(e) {
    var element = e.parentNode;
    element.classList.remove("modal-open");
    body.classList.remove("stop-scrolling");
    burger.style.display = "block";
}

// Change class on scroll

window.onscroll = function () {
    var nav = document.getElementById("nav");
    if (window.pageYOffset > window.innerHeight - 50) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
};