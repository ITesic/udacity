(function($) {
    "use strict";

    function CatClicker() {
        this.cats = this.mockData();
        this.catListView = new CatListView(this);
        this.catView = new CatView(this);
    }

    CatClicker.prototype.init = function() {
        this.catListView.render(this.cats);
    };

    CatClicker.prototype.showCat = function(cat){
    	this.catView.render(cat);
    };

    CatClicker.prototype.incrementScore = function() {
    	
        drawCatsList(cats);
        drawCats(cats);
    };

    CatClicker.prototype.mockData = function() {
        return [
            new Cat({
                id: 1,
                name: "Mace",
                image: "images/cat.jpg",
                score: 0
            }),
            new Cat({
                id: 2,
                name: "Macak",
                image: "images/cat2.jpg",
                score: 0
            }),
            new Cat({
                id: 3,
                name: "Dvije macke",
                image: "images/cat3.jpg",
                score: 0
            }),
            new Cat({
                id: 4,
                name: "Polu macka",
                image: "images/cat4.jpg",
                score: 0
            }),
            new Cat({
                id: 5,
                name: "Macorcina",
                image: "images/cat5.jpg",
                score: 0
            }),
            new Cat({
                id: 6,
                name: "Luda macka",
                image: "images/cat7.jpeg",
                score: 0
            })
        ];
    }
})(jQuery);
