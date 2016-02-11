(function($) {
    "use strict";

    function CatListView(octopus, container) {
        this.container = $(container || "#cat-list-view");
    }


    CatListView.prototype.render = function(cats) {
        cats.forEach(function(cat) {
            this.container.append(createCatLink(cat));
        })
    };

    function createCatLink(cat) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = cat.name;
        link.setAttribute('href', '#');
        link.addEventListener('click', function() {
            showCat(cat);
        });

        li.appendChild(link);
        return li;
    }

})(jQuery);
