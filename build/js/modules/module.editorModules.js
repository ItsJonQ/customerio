/**
 * Editor Modules
 * @module
 */

// Exporting the module
module.exports = (function ($, undefined) {


    var initStatus = false;
    var $moduleList;

    // Defining the editor modules
    var editorModule = {
        blockquote: {
            code: '<p><blockquote>Replace this with your quote content</blockquote></p><br>'
        },
        button: {
            code: '<p><a href="http://customer.io/docs/layouts.html" target="_blank" class="button">Log in to learn more.</a></p><br>'
        },
        deal: {
            code: '<p><blockquote><a href="http://customer.io/docs/layouts.html" target="_blank" class="button deal">Check out our deal now and save 20%!</a><br><br>Don\'t forget to check out our <a href="http://customer.io/blog/" target="_blank"><strong>blog</strong></a> for the latest deals!.</blockquote></p><br>'
        }
    };

    // insert
    var insertModule = function(module) {
        var code = editorModule[module].code;
        tinyMCE.activeEditor.execCommand('mceInsertContent', false, code);
    };

    // Render
    var render = function() {
        if(!$moduleList) {
            return false;
        }

        $moduleList.on('click', 'button', function(e) {
            insertModule($(this).attr('data-module-name'));
        });
    };


    var renderEditor = function() {
        console.log(tinyMCE.activeEditor);
        if(tinyMCE.activeEditor) {
            tinyMCE.activeEditor.setContent('<P>Try typing some stuff out in this editor! You\'ll be able to see it live on the right.</P><br>-----<br>Sincerely,<br>Jon Q');
        }
    };

    // Initialization
    var initialize = function() {

        // Return false if initStatus is true
        if(initStatus) {
            return false;
        }
        initStatus = true;

        // Defining $moduleList
        $moduleList = $('#modules-container');

        render();
        renderEditor();

        // Initializing Bootstrap tool tips
        $('#create-new-editor-module').tooltip();

    };

    // Initialize this module
    initialize();

    return {
        init: initialize
    };

})(jQuery);