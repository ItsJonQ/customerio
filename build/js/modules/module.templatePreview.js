/**
 * Template Preview
 * @module
 */

// Exporting the module
module.exports = (function ($, undefined) {


    var initStatus = false;
    var $el;
    var $templateList;

    // Render
    var render = function() {
        if(!$templateList || !$el) {
            return false;
        }

        $templateList.on('click', 'li', function(e) {
            // Remove all classes from $el
            $el[0].className = '';
            $el.addClass($(this).attr('data-template-class'));
        });
    };

    // Initialization
    var initialize = function() {

        // Return false if initStatus is true
        if(initStatus) {
            return false;
        }
        initStatus = true;

        // Defining $el
        $el = $('#template-preview-area');

        // Defining $templateList
        $templateList = $('#email-template-list');

        render();

    };

    // Initialize this module
    initialize();

    return {
        init: initialize
    };

})(jQuery);