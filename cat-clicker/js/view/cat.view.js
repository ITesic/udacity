(function($){
	"use strict";

	function CatView(controller) {
		this.controller = controller;
		
		this.container = $("#cats-container");
	}
	
	CatView.prototype.render = function(cat) {
		this.container.append('<div class="col-sm-12" id="cat-' + cat.id + '">' 
		+ '<div class="thumbnail">'
		+ '<img id="cat-image" src="' + cat.image + '" alt="Cat ' + cat.name + '"/>'
		+ '<div class="caption">'
		+ '<h2>' + cat.name + '</h2>'
		+ '<p id="cat-score">' + cat.score + '</p>'	
		+ '</div>'
		+ '</div>'
		+ '</div>');
		bindClickEvent(cat);
	};

	function bindClickEvent(cat){
		$("#cat" + cat.id).click(function(){
			controller.incrementScore(cat);
		});
	}
})(jQuery);