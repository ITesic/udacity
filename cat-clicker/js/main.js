(function ($) {
	"use strict";

	var cat = {
		name: "",
		image: "",
		score: 0
	}
	var cats = [];

	var catsContainer = $('#cats-container');
	var catsListContainer = $('#cats-list');

	function drawCat(cat, options) {
		options = options || {};
		options.size = options.size || 4;

		catsContainer.append('<div class="col-sm-'+ options.size + '" id="cat-' + cat.id + '">' 
		+ '<div class="thumbnail">'
		+ '<img id="cat-image" src="' + cat.image + '" alt="Cat ' + cat.name + '"/>'
		+ '<div class="caption">'
		+ '<h2>' + cat.name + '</h2>'
		+ '<p id="cat-score">' + cat.score + '</p>'	
		+ '</div>'
		+ '</div>'
		+ '</div>');
	}

	function showCat(cat, options) {
		options = options || {};
		options.size = options.size || 12;

		catsContainer.html('<div class="col-sm-'+ options.size + '" id="cat-' + cat.id + '">' 
		+ '<div class="thumbnail">'
		+ '<img id="cat-image" src="' + cat.image + '" alt="Cat ' + cat.name + '"/>'
		+ '<div class="caption">'
		+ '<h2>' + cat.name + '</h2>'
		+ '<p id="cat-score">' + cat.score + '</p>'	
		+ '</div>'
		+ '</div>'
		+ '</div>');

		var catContainer = $('#cat-' + cat.id);

			catContainer.find('#cat-image').click(function () {
					incrementScore(cat, catContainer);
				});
	}

	function incrementScore(cat, catContainer) {
		cat.score = cat.score + 1;
		catContainer.find('#cat-score').text(cat.score);
	}

	function drawCats(cats) {
		cats.forEach(function (cat) {
			drawCat(cat);

			var catContainer = $('#cat-' + cat.id);

			catContainer.find('#cat-image').click(function () {
					incrementScore(cat, catContainer);
				});
		});
	}

	function createCatLink(cat){
		var li = document.createElement('li');
		var link = document.createElement('a');
		link.textContent = cat.name;
		link.setAttribute('href', '#');
		link.addEventListener('click', function(){
			showCat(cat);
		});

		li.appendChild(link);
		return li;
	}

	function drawCatsList(cats) {
		cats.forEach(function(cat){
			catsListContainer.append(createCatLink(cat));
		})
	}

	cats = [
	{
		id: 1,
		name: "Mace",
		image: "images/cat.jpg",
		score: 0
	},
	{
		id: 2,
		name: "Macak",
		image: "images/cat2.jpg",
		score: 0
	},
	{
		id: 3,
		name: "Dvije macke",
		image: "images/cat3.jpg",
		score: 0
	},
	{
		id: 4,
		name: "Polu macka",
		image: "images/cat4.jpg",
		score: 0
	},
	{
		id: 5,
		name: "Macorcina",
		image: "images/cat5.jpg",
		score: 0
	},
	{
		id: 6,
		name: "Luda macka",
		image: "images/cat7.jpeg",
		score: 0
	}];

	function initCatClicker() {
		drawCatsList(cats);
		drawCats(cats);
	}

	$("#show-all-cats").click(function(){
		catsContainer.html("");
		drawCats(cats);
	});

	initCatClicker();

})(jQuery);