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

angular.module('TellForm', [
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

angular.module('forms', ['ngResource', 'TellForm.templates']);

angular.module('TellForm').requires.push('forms');

angular.module('forms').filter('formValidity', require('../config/forms.client.config.js'));

//Directives
angular.module('forms').directive('fieldDirective',
    ['$http', '$compile', '$rootScope', '$templateCache',
        require('../directives/field.client.directive.js')]);

angular.module('forms').directive('fieldIconDirective',
    [require('../directives/field-icon.client.directive.js')]);

angular.module('forms').directive('onEnterKey', ['$rootScope',
    require('../directives/on-enter-key.client.directive.js')]);

angular.module('forms').directive('onFinishRender',
    require('../directives/on-finish-render.client.directive.js'));

angular.module('forms').directive('submitFormDirective', ['$http', 'TimeCounter', '$filter', '$rootScope', 'Auth',
    require('../directives/submit-form.client.directive.js')]);

//Services
angular.module('forms').factory('Auth', [ require('../services/auth.client.service.js') ]);

angular.module('forms').factory('Current-Form', [ require('../services/current-form.client.service.js') ]);

angular.module('forms').service('FormFields', [ require('../services/form-fields.client.service.js') ]);

angular.module('forms').factory('Forms', ['$resource', 'FORM_URL', require('../services/forms.client.service.js') ]);

angular.module('forms').factory('myForm', ['Forms', require('../services/myform.client.service.js')]);

angular.module('forms').service('TimeCounter', [ require('../services/time-counter.client.service.js') ]);

angular.module('forms').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);

//Constants
angular.module('forms').constant('FORM_URL', '/form/:formId');

//Controllers
angular.module('forms').controller('SubmitFormController',
    ['$scope', '$rootScope', '$state', 'myForm', 'Auth',
        require('../controllers/submit-form.client.controller.js') ] );

angular.element(document).ready(function() {
	//Then init the app
    angular.bootstrap(document, ['forms']);
});
