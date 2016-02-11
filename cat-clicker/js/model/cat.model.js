(function($){
	"use strict";

	function Cat(data) {
		this.name = data.name || "";
		this.image = data.image || "";
		this.score = data.score || 0;
	}

	Cat.prototype.incrementScore = function() {
		this.score = this.score + 1;
	};
})(jQuery);