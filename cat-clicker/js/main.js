(function ($) {
	"use strict";

	var cat = {
		name: "",
		image: "",
		score: 0
	}
	var cats = [];

	var catsContainer = $('#cats-container');

	function drawCat(cat, i) {
		catsContainer.append('<div class="col-sm-6" id="cat-' + i + '">' 
		+ '<div class="thumbnail">'
		+ '<img id="cat-image" src="' + cat.image + '" alt=Cat ' + cat.name + '"/>'
		+ '<div class="caption">'
		+ '<h2>' + cat.name + '</h2>'
		+ '<p id="cat-score">' + cat.score + '</p>'	
		+ '</div>'
		+ '</div>'
		+ '</div>');
	}

	function incrementScore(cat, catContainer) {
		cat.score = cat.score + 1;
		catContainer.find('#cat-score').text(cat.score);
	}

	function drawCats(cats) {
		cats.forEach(function (cat, i) {
			drawCat(cat, i);

			var catContainer = $('#cat-' + i);

			catContainer.find('#cat-image').click(function () {
					incrementScore(cat, catContainer);
				});
		});
	}

	cats = [
	{
		name: "Mace",
		image: "images/cat.jpg",
		score: 0
	},
	{
		name: "Macak",
		image: "images/cat2.jpg",
		score: 0
	}];
	drawCats(cats);

})(jQuery);