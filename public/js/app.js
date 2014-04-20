(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var tinymce = require('./modules/module.tinymce');

// Defining the Global App API
window.App = {
    tinymce: tinymce
};
},{"./modules/module.tinymce":2}],2:[function(require,module,exports){
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
 * renderIntialContent
 * Renders the starting text in TinyMCE
 */
var renderInitialContent = function() {
    if(tinyMCE.activeEditor) {
        tinyMCE.activeEditor.setContent('<P>Try typing some stuff out in this editor! You\'ll be able to see it live on the right.</P><br>-----<br>Sincerely,<br>Jon Q');
        updateLiveView();
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
                ed.on('keydown keyup change click', updateLiveView);

                ed.on('init', renderInitialContent);
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
},{}]},{},[1])