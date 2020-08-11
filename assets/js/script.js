// Open menu

let body = document.body;
let header = document.querySelector("header");
let burger = document.querySelector(".burger");

function openMenu() {
    header.classList.toggle("nav-open");
    body.classList.toggle("stop-scrolling");
}

// Open modal

function openModal(e) {
    e.parentNode.parentNode.classList.add("modal-open");
    burger.style.display = "none";
}

function closeModal(e) {
    e.parentNode.classList.remove("modal-open");
    burger.style.display = "block";
}

// On load animation
var picture = document.getElementsByClassName("profile-pic")[0];
function loadPic() {
    picture.classList.add("loaded")
}

// Scroll events

var scrollPosition = window.scrollY;
var cover = document.getElementsByClassName("cover")[0];
let logo = document.querySelector(".logo");
var hasBlocked = false;

window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

    if (scrollPosition >= window.innerHeight - 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});