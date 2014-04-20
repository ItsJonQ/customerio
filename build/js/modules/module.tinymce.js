/**
 * TinyMCE
 * @module
 */

// TinyMCE initStatus
var initStatus = false;

// Defining the livePreviewEl
var livePreviewEl = document.getElementById('live-preview-area');


/**
 * updateLiveView
 * Renders the tinyMCE text into the livePreview area
 */
var updateLiveView = function() {
    // Return false if tinyMCE is not defined
    if(!tinyMCE) {
        return false;
    }

    // Defining the el to update
    var el = livePreviewEl;
    // Update the innerHTML of el
    el.innerHTML = tinyMCE.activeEditor.getContent();
    // Return tinyMCE
    return tinyMCE;
};

/**
 * renderInitialContent
 * Renders the starting text in TinyMCE
 */
var renderInitialContent = function() {
    if(tinyMCE.activeEditor) {
        tinyMCE.activeEditor.setContent('<P>Try typing some stuff out in this editor! You\'ll be able to see it live on the right.</P><br>-----<br>Sincerely,<br>Jon Q');
        updateLiveView();
    }
};

/**
 * renderEditorModuleContent
 * Renders the starting text in TinyMCE
 */
var renderEditorModuleContent = function() {
    if(tinyMCE.activeEditor) {
        tinyMCE.activeEditor.setContent('<br><br>-----<br>Sincerely,<br>Jon Q');
        tinyMCE.activeEditor.selection.setContent('<p>Alrighty! Let\'s try inserting a button into the editor. It should be a lot easier than using HTML.</p><p>You can also try insert a custom "Deal Button".');
    }
};

// Initialize
var initialize = function() {
    if(window.tinyMCE || window.tinymce) {
        // Return if the initStatus is already true
        if(initStatus) {
            return;
        }
        // Update the initStatus
        initStatus = true;

        tinymce.init({
            selector: '.tinymce-editor',
            plugins: 'image link visualblocks code table',
            // visualblocks_default_state: true,
            setup : function(ed) {
                // Only render for the first editor
                if(ed.id === 'mce_0') {
                    ed.on('keydown keyup change click', updateLiveView);
                    ed.on('init', renderInitialContent);
                }

                if(ed.id === 'mce_7') {
                    ed.on('init', renderEditorModuleContent);
                }
            },
            extended_valid_elements: 'p',
            valid_children : "p",
            force_p_newlines : true
        });

    }
};

// Initialize
initialize();

// Exporting the module
module.exports = {
    initStatus: initStatus,
    tinymce: window.tinymce,
    updateLiveView: updateLiveView
};