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
var updateLiveView = function(el) {
    // Return false if tinyMCE is not defined
    if(!tinyMCE) {
        return false;
    }

    // Use el if defined, if not default to livepreview
    el = el ? el : livepreview;
    // Update the innerHTML of el
    el.innerHTML = tinyMCE.activeEditor.getContent();

    // Return tinyMCE
    return tinyMCE;
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
                // ed.on('keydown keyup change click', updateLiveView);
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