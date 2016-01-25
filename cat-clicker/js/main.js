(function () {
	"use strict";

	var image = document.getElementById('cat-image');
	var counter = document.getElementById('score-counter');
	var score = 0;

	function incrementClicks() {
		score = score + 1;
		counter.innerHTML = score;
	}

	image.addEventListener('click', function () {
		incrementClicks();
	}, false);

})();