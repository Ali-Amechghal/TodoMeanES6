// webpack/index.js
require('bootstrap/dist/css/bootstrap.min.css')

// Import modules without parsing with script-loader,
// !! to override all loaders
require('!!script-loader!angular2/bundles/angular2-polyfills.min.js');
require('!!script-loader!rxjs/bundles/Rx.umd.min.js');
require('!!script-loader!angular2/bundles/angular2-all.umd.min.js');

// Import boot, resolve imports/requires, and pass through Babel
require('./js/boot');