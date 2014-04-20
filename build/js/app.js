// Requiring Modules

var templatePreview = require('./modules/module.templatePreview');
var tinymce = require('./modules/module.tinymce');

var editorModules = require('./modules/module.editorModules');

// Kickstart tooltips
$('[data-toggle="tooltip"]').tooltip();

// Defining the Global App API
window.App = {
    templatePreview: templatePreview,
    tinymce: tinymce
};