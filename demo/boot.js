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

angular.module('TellForm', ['ngResource', 'TellForm.templates']);

//angular.module('TellForm').requires.push('forms');

angular.module('TellForm').filter('formValidity', require('../config/forms.client.config.js'));

//Directives
angular.module('TellForm').directive('fieldDirective',
    ['$http', '$compile', '$rootScope', '$templateCache',
        require('../directives/field.client.directive.js')]);

angular.module('TellForm').directive('fieldIconDirective',
    [require('../directives/field-icon.client.directive.js')]);

angular.module('TellForm').directive('onEnterKey', ['$rootScope',
    require('../directives/on-enter-key.client.directive.js')]);

angular.module('TellForm').directive('onFinishRender',
    require('../directives/on-finish-render.client.directive.js'));

angular.module('TellForm').directive('submitFormDirective', ['$http', 'TimeCounter', '$filter', '$rootScope', 'Auth',
    require('../directives/submit-form.client.directive.js')]);

//Services
angular.module('TellForm').factory('Auth', [ require('../services/auth.client.service.js') ]);

angular.module('TellForm').factory('Current-Form', [ require('../services/current-form.client.service.js') ]);

angular.module('TellForm').service('FormFields', [ require('../services/form-fields.client.service.js') ]);

angular.module('TellForm').factory('Forms', ['$resource', 'FORM_URL', require('../services/forms.client.service.js') ]);

angular.module('TellForm').factory('myForm', ['Forms', require('../services/myform.client.service.js')]);

angular.module('TellForm').service('TimeCounter', [ require('../services/time-counter.client.service.js') ]);

angular.module('TellForm').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);

//Constants
angular.module('TellForm').constant('FORM_URL', '/form/:formId');

//Controllers
angular.module('TellForm').controller('SubmitFormController',
    ['$scope', '$rootScope', '$state', 'myForm', 'Auth',
        require('../controllers/submit-form.client.controller.js') ] );

angular.element(document).ready(function() {
	//Then init the app
    angular.bootstrap(document, ['TellForm']);
});
