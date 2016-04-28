'use strict';

global.jQuery = require('jquery');
global.angular = require('angular');
require('jquery-ui');
require('angular-animate');
require('bootstrap');
require('angular-ui-date');
// require('angular-strap');
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
angular.module('forms').controller('SubmitFormController',
    ['$scope', '$rootScope', '$state', 'myForm', 'Auth', 
        require('../controllers/submit-form.client.controller.js') ] );


angular.module('forms').factory('Auth', [
  function() {
    var service = {
      _currentUser: null,
      get currentUser(){
        return this._currentUser;
      },
      ensureHasCurrentUser: function() {
        return null;
      },
      isAuthenticated: function() {
        return false;
      },
      getUserState: function() {
        return '';
      },
      login: function() {
      },
      logout: function() {
      }
    };
    return service;
  }
]);
angular.module('forms').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);
angular.module('forms').factory('myForm', ['Forms', function(Forms) {
    var form = window.form;
    form.visible_form_fields = _.filter(form.form_fields, function(field){
    	return (field.deletePreserved === false);
    });
    return form;
}]);
angular.module('forms').constant('FORM_URL', '/form/:formId');

angular.element(document).ready(function() {
	//Then init the app
    angular.bootstrap(document, ['forms']);
});
