// Requiring Modules
var templatePreview = require('./modules/module.templatePreview');
var tinymce = require('./modules/module.tinymce');


// Defining the Global App API
window.App = {
    templatePreview: templatePreview,
    tinymce: tinymce
};