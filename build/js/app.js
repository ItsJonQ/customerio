// Requiring Modules
var templatePreview = require('./modules/module.templatePreview');
var tinymce = require('./modules/module.tinymce');
var editorModules = require('./modules/module.editorModules');
var navigation = require('./modules/module.navigation');

// Kickstart tooltips
$('[data-toggle="tooltip"]').tooltip();


// Defining the Global App API
window.App = {
    editorModules: editorModules,
    navigation: navigation,
    templatePreview: templatePreview,
    tinymce: tinymce
};