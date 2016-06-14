'use strict';

global.jQuery = require('jquery');
global.angular = require('angular');
require('jquery-ui');
require('angular-animate');
require('bootstrap');
require('angular-ui-date');
require('angular-strap');
require('lodash');
require('ng-file-upload');

angular.module('angular-tellform', [
    require('angular-ui-utils').name,
    require('angular-scroll').name,
    require('ui-select').name,
    require('angular-busy').name,
    require('angular-sanitize').name,
    require('v-button').name,
    require('angular-resource').name,
    require('angular-ui-router').name,
    require('angular-bootstrap').name
]).constant('version', require('./package.json').version);

angular.module('angular-tellform', ['ngResource', 'angular-tellform.templates']);

angular.module('angular-tellform').filter('formValidity', require('../config/forms.client.config.js'));

//Directives
angular.module('angular-tellform').directive('angularTellform',
    ['$rootScope', '$state', 'myForm', 'Auth',
        require('../directives/render-form.client.directive.js')]);

angular.module('angular-tellform').directive('fieldDirective',
    ['$http', '$compile', '$rootScope', '$templateCache',
        require('../directives/field.client.directive.js')]);

angular.module('angular-tellform').directive('fieldIconDirective',
    [require('../directives/field-icon.client.directive.js')]);

angular.module('angular-tellform').directive('onEnterKey', ['$rootScope',
    require('../directives/on-enter-key.client.directive.js')]);

angular.module('angular-tellform').directive('onFinishRender',
    require('../directives/on-finish-render.client.directive.js'));

angular.module('angular-tellform').directive('submitFormDirective', ['$http', 'TimeCounter', '$filter', '$rootScope', 'Auth',
    require('../directives/submit-form.client.directive.js')]);

//Services
angular.module('angular-tellform').factory('Auth', [ require('../services/auth.client.service.js') ]);

angular.module('angular-tellform').factory('Current-Form', [ require('../services/current-form.client.service.js') ]);

angular.module('angular-tellform').service('FormFields', [ require('../services/form-fields.client.service.js') ]);

angular.module('angular-tellform').factory('Forms', ['$resource', 'FORM_URL', require('../services/forms.client.service.js') ]);

angular.module('angular-tellform').factory('myForm', ['Forms', require('../services/myform.client.service.js')]);

angular.module('angular-tellform').service('TimeCounter', [ require('../services/time-counter.client.service.js') ]);

angular.module('angular-tellform').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);

//Constants
angular.module('angular-tellform').constant('FORM_URL', '/form/:formId');


angular.element(document).ready(function() {
	//Then init the app
    angular.bootstrap(document, ['angular-tellform']);
});
