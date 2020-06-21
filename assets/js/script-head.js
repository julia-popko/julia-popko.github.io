// Typed

document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 50,
		backSpeed: 30,
		startDelay: 1000,
		loop: true,
		loopCount: Infinity,
	});
});

function prettyLog(str) {
	console.log('%c ' + str, 'color: green; font-weight: bold;');
}