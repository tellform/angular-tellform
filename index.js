'use strict';

angular.module('angular-tellform', [
    'ui.utils',
    'duScroll',
    'ui.select',
    'cgBusy',
    'ngSanitize',
    'vButton',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'angular-input-stars',
    'angular-tellform.templates'
]).constant('version', require('./package.json').version);

//FIXME: App breaks when I remove this line and put modules in above statement
//angular.module('angular-tellform', ['ngResource', 'angular-tellform.templates']);

require('./dist/form.js');

