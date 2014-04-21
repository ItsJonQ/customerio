/**
 * Site Navigation
 * @module
 */

// Defining the $els
var $window = $(window);
var $nav = $('#site-navigation');
var $section = $('#section-hello');
var offset = $section.height();

// Initialization
var initialize = function() {
    if($nav.length && $section.length) {

        $window.on('scroll', function() {
            if($window.scrollTop() >= offset) {
                $nav.addClass('reveal');
            } else {
                $nav.removeClass('reveal');
            }
        });

    }
};

// Initialize
initialize();

module.exports = {
    $nav: $nav,
    $section: $section,
    offset: offset
};