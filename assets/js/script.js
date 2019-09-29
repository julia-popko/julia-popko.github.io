//Scroll Reveal
ScrollReveal().reveal(".reveal", {
	useDelay: "onload", reset: !0
})

// Modals
function openModal(e) {
	var element = e.parentNode;
	element.classList.toggle("modal-open");
}