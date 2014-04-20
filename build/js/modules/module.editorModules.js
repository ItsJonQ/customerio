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
        // Return false if the module is invalid
        if(!module || typeof module !== 'string') {
            return false;
        }
        // Defining the code of the module from editorModules data
        var code = editorModule[module].code;

        // Defining the editor
        var editor = tinyMCE.editors[1];
        editor.execCommand('mceInsertContent', false, code);

        // return the editor
        return editor;
    };

    // Render
    var render = function() {
        if(!$moduleList) {
            return false;
        }

        // Binding the click event of buttons to the $moduleList
        $moduleList.on('click', 'button', function(e) {
            // Inserting the module
            insertModule($(this).attr('data-module-name'));
        });
    };

    // Rendering the editor's content
    var renderEditor = function() {
        // Defining the editor
        var editor = tinyMCE.editors[1];
        if(editor) {
            // Setting the content
            editor.setContent('<P>Try typing some stuff out in this editor! You\'ll be able to see it live on the right.</P><br>-----<br>Sincerely,<br>Jon Q');
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

        // Rendering the modules
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