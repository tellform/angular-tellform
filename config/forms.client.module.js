'use strict';

angular.module('TellForm').factory('Auth', [
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
angular.module('TellForm').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);
angular.module('TellForm').factory('myForm', ['Forms', function(Forms) {
    var form = window.form;
    form.visible_form_fields = _.filter(form.form_fields, function(field){
        return (field.deletePreserved === false);
    });
    return form;
}]);
angular.module('TellForm').constant('FORM_URL', '/form/:formId');

// Configuring the Forms drop-down menus
angular.module('TellForm').filter('formValidity',
    function(){
        return function(formObj){
            if(formObj && formObj.form_fields && formObj.visible_form_fields){

                //get keys
                var formKeys = Object.keys(formObj);

                //we only care about things that don't start with $
                var fieldKeys = formKeys.filter(function(key){
                    return key[0] !== '$';
                });

                var fields = formObj.form_fields;

                var valid_count = fields.filter(function(field){
                    if(typeof field === 'object' && field.fieldType !== 'statement' && field.fieldType !== 'rating'){
                        return !!(field.fieldValue);
                    }

                }).length;
                return valid_count - (formObj.form_fields.length - formObj.visible_form_fields.length);
            }
            return 0;
        };
    });