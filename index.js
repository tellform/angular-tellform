'use strict';
/*
global.jQuery = require('jquery');
global.angular = require('angular');
require('jquery-ui');
require('angular-animate');
require('bootstrap');
require('angular-ui-date');
require('angular-strap');
require('lodash');
require('ng-file-upload');
*/

angular.module('angular-tellform', [
    'ui.utils',
    'duScroll',
    'ui.select',
    'cgBusy',
    'ngSanitize',
    'vButton',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
]).constant('version', require('./package.json').version);

//FIXME: App breaks when I remove this line and put modules in above statement
angular.module('angular-tellform', ['ngResource', 'angular-tellform.templates']);

require('./dist/form.js');
/*
angular.element(document).ready(function() {
    //Then init the app
    angular.bootstrap(document, ['angular-tellform']);
});
*/

