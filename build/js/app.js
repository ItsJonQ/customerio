// Requiring Modules

var templatePreview = require('./modules/module.templatePreview');
var tinymce = require('./modules/module.tinymce');

var editorModules = require('./modules/module.editorModules');



// Defining the Global App API
window.App = {
    templatePreview: templatePreview,
    tinymce: tinymce
};