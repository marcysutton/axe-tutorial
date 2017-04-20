document.addEventListener('DOMContentLoaded', function() {
	console.log('HEY')
	var carousel = document.getElementById('maintainers'),
		buttons = carousel.querySelectorAll('button'),
		caption = carousel.querySelector('figcaption');

	for (var i=0; i<buttons.length; i++){
		console.log(buttons[i]);
		buttons[i].addEventListener('click', function(event) {
			console.log(event);
		}, true);
		buttons[i].addEventListener('focus', function(event) {
			console.log(event.target);
			// var target = event.target;
			// var figcaption = target.querySelector('img').getAttribute('alt');

			// caption.textContent = figcaption;
		});
	}
});