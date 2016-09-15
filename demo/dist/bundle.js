(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Configuring the Forms drop-down menus
angular.module('angular-tellform')
.filter('formValidity', function(){
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
}).factory('$state', [function() {
	return {
		go: function() {}
	};
}]).constant('FORM_URL', '/form/:formId')
.value('supportedFields', [
	'textfield',
	'textarea',
	'date',
	'dropdown',
	'hidden',
	'password',
	'radio',
	'legal',
	'statement',
	'rating',
	'yes_no',
	'number',
	'natural'
]).value('SendVisitorData', {
	send: function(){}
}).factory('Auth', [
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

'use strict';

angular.module('angular-tellform').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('english', {
    FORM_SUCCESS: 'Form entry successfully submitted!',
	REVIEW: 'Review',
    BACK_TO_FORM: 'Go back to Form',
	EDIT_FORM: 'Edit this TellForm',
	CREATE_FORM: 'Create this TellForm',
	ADVANCEMENT: '{{done}} out of {{total}} answered',
	CONTINUE_FORM: 'Continue to Form',
	REQUIRED: 'required',
	COMPLETING_NEEDED: '{{answers_not_completed}} answer(s) need completing',
	OPTIONAL: 'optional',
	ERROR_EMAIL_INVALID: 'Please enter a valid email address',
	ERROR_NOT_A_NUMBER: 'Please enter valid numbers only',
	ERROR_URL_INVALID: 'Please a valid url',
	OK: 'OK',
	ENTER: 'press ENTER',
	YES: 'Yes',
	NO: 'No',
	NEWLINE: 'press SHIFT+ENTER to create a newline',
	CONTINUE: 'Continue',
	LEGAL_ACCEPT: 'I accept',
	LEGAL_NO_ACCEPT: 'I don’t accept',
	DELETE: 'Delete',
	CANCEL: 'Cancel',
	SUBMIT: 'Submit',
	UPLOAD_FILE: 'Upload your File'
  });

  $translateProvider.preferredLanguage('english')
  	.fallbackLanguage('english')
	.useSanitizeValueStrategy('escape');

}]);

'use strict';

angular.module('angular-tellform').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('french', {
    FORM_SUCCESS: 'Votre formulaire a été enregistré!',
	REVIEW: 'Incomplet',
    BACK_TO_FORM: 'Retourner au formulaire',
	EDIT_FORM: 'Éditer le Tellform',
	CREATE_FORM: 'Créer un TellForm',
	ADVANCEMENT: '{{done}} complétés sur {{total}}',
	CONTINUE_FORM: 'Aller au formulaire',
	REQUIRED: 'obligatoire',
	COMPLETING_NEEDED: '{{answers_not_completed}} réponse(s) doive(nt) être complétée(s)',
	OPTIONAL: 'facultatif',
	ERROR_EMAIL_INVALID: 'Merci de rentrer une adresse mail valide',
	ERROR_NOT_A_NUMBER: 'Merce de ne rentrer que des nombres',
	ERROR_URL_INVALID: 'Merci de rentrer une url valide',
	OK: 'OK',
	ENTER: 'presser ENTRÉE',
	YES: 'Oui',
	NO: 'Non',
	NEWLINE: 'presser SHIFT+ENTER pour créer une nouvelle ligne',
	CONTINUE: 'Continuer',
	LEGAL_ACCEPT: 'J’accepte',
	LEGAL_NO_ACCEPT: 'Je n’accepte pas',
	DELETE: 'Supprimer',
	CANCEL: 'Réinitialiser',
	SUBMIT: 'Enregistrer',
	UPLOAD_FILE: 'Envoyer un fichier',
	Y: 'O',
	N: 'N'
  });

}]);

'use strict';

angular.module('angular-tellform').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('german', {
	FORM_SUCCESS: 'Ihre Angaben wurden gespeichert.',
	REVIEW: 'Unvollständig',
	BACK_TO_FORM: 'Zurück zum Formular',
	EDIT_FORM: 'Bearbeiten Sie diese TellForm',
	CREATE_FORM: 'Erstellen Sie eine TellForm',
	ADVANCEMENT: '{{done}} von {{total}} beantwortet',
	CONTINUE_FORM: 'Zum Formular',
	REQUIRED: 'verpflichtend',
	COMPLETING_NEEDED: 'Es fehlen/fehtl noch {{answers_not_completed}} Antwort(en)',
	OPTIONAL: 'fakultativ',
	ERROR_EMAIL_INVALID: 'Bitte gültige Mailadresse eingeben',
	ERROR_NOT_A_NUMBER: 'Bitte nur Zahlen eingeben',
	ERROR_URL_INVALID: 'Bitte eine gültige URL eingeben',
	OK: 'Okay',
	ENTER: 'Eingabetaste drücken',
	YES: 'Ja',
	NO: 'Nein',
	NEWLINE: 'Für eine neue Zeile SHIFT+ENTER drücken',
	CONTINUE: 'Weiter',
	LEGAL_ACCEPT: 'Ich akzeptiere',
	LEGAL_NO_ACCEPT: 'Ich akzeptiere nicht',
	DELETE: 'Entfernen',
	CANCEL: 'Canceln',
	SUBMIT: 'Speichern',
	UPLOAD_FILE: 'Datei versenden',
	Y: 'J',
	N: 'N'
  });

}]);

'use strict';

angular.module('angular-tellform').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('italian', {
	FORM_SUCCESS: 'Il formulario è stato inviato con successo!',
	REVIEW: 'Incompleto',
	BACK_TO_FORM: 'Ritorna al formulario',
	EDIT_FORM: 'Modifica questo Tellform',
	CREATE_FORM: 'Creare un TellForm',
	ADVANCEMENT: '{{done}} su {{total}} completate',
	CONTINUE_FORM: 'Vai al formulario',
	REQUIRED: 'obbligatorio',
	COMPLETING_NEEDED: '{{answers_not_completed}} risposta/e deve/ono essere completata/e',
	OPTIONAL: 'opzionale',
	ERROR_EMAIL_INVALID: 'Si prega di inserire un indirizzo email valido',
	ERROR_NOT_A_NUMBER: 'Si prega di inserire solo numeri',
	ERROR_URL_INVALID: 'Grazie per inserire un URL valido',
	OK: 'OK',
	ENTER: 'premere INVIO',
	YES: 'Sì',
	NO: 'No',
	NEWLINE: 'premere SHIFT+INVIO per creare una nuova linea',
	CONTINUE: 'Continua',
	LEGAL_ACCEPT: 'Accetto',
	LEGAL_NO_ACCEPT: 'Non accetto',
	DELETE: 'Cancella',
	CANCEL: 'Reset',
	SUBMIT: 'Registra',
	UPLOAD_FILE: 'Invia un file',
	Y: 'S',
	N: 'N'
  });

}]);

'use strict';

angular.module('angular-tellform').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('spanish', {
	FORM_SUCCESS: '¡El formulario ha sido enviado con éxito!',
	REVIEW: 'Revisar',
	BACK_TO_FORM: 'Regresar al formulario',
	EDIT_FORM: 'Crear un TellForm',
	CREATE_FORM: 'Editar este TellForm',
	ADVANCEMENT: '{{done}} de {{total}} contestadas',
	CONTINUE_FORM: 'Continuar al formulario',
	REQUIRED: 'Información requerida',
	COMPLETING_NEEDED: '{{answers_not_completed}} respuesta(s) necesita(n) ser completada(s)',
	OPTIONAL: 'Opcional',
	ERROR_EMAIL_INVALID: 'Favor de proporcionar un correo electrónico válido',
	ERROR_NOT_A_NUMBER: 'Por favor, introduzca sólo números válidos',
	ERROR_URL_INVALID: 'Favor de proporcionar un url válido',
	OK: 'OK',
	ENTER: 'pulse INTRO',
	YES: 'Si',
	NO: 'No',
	NEWLINE: 'presione SHIFT+INTRO para crear una nueva línea',
	CONTINUE: 'Continuar',
	LEGAL_ACCEPT: 'Acepto',
	LEGAL_NO_ACCEPT: 'No acepto',
	DELETE: 'Eliminar',
	CANCEL: 'Cancelar',
	SUBMIT: 'Registrar',
	UPLOAD_FILE: 'Cargar el archivo',
	Y: 'S',
	N: 'N'
  });

}]);

'use strict';

// SubmitForm controller
angular.module('angular-tellform').controller('SubmitFormController', [
	'$scope', '$rootScope', '$state', '$translate', 'myForm', 'Auth',
	function($scope, $rootScope, $state, $translate, myForm, Auth) {
		$scope.authentication = Auth;
		$scope.myform = myForm;

		$translate.use(myForm.language);

		if(!$scope.myform.isLive){
			// Show navbar if form is not public AND user IS loggedin
			if($scope.authentication.isAuthenticated()){
				$scope.hideNav = $rootScope.hideNav = false;
			}
			// Redirect if  form is not public user IS NOT loggedin
			else {
				$scope.hideNav = $rootScope.hideNav = true;
				$state.go('access_denied');
			}
		}else{
			$scope.hideNav = $rootScope.hideNav = true;
		}
	}
]);

'use strict';

angular.module('angular-tellform').directive('fieldIconDirective', function() {
	return {
        template: '<i class="{{typeIcon}}"></i>',
        restrict: 'E',
        scope: {
            typeName: '@'
        },
        controller: ["$scope", function($scope){
        	var iconTypeMap = {
				'textfield': 'fa fa-pencil-square-o',
				'dropdown': 'fa fa-th-list',
				'date': 'fa fa-calendar',
				'checkbox': 'fa fa-check-square-o',
				'radio': 'fa fa-dot-circle-o',
				'email': 'fa fa-envelope-o',
				'textarea': 'fa fa-pencil-square',
				'legal': 'fa fa-legal',
				'file': 'fa fa-cloud-upload',
				'rating': 'fa fa-star-half-o',
				'link': 'fa fa-link',
				'scale': 'fa fa-sliders',
				'stripe': 'fa fa-credit-card',
				'statement': 'fa fa-quote-left',
				'yes_no': 'fa fa-toggle-on',
				'number': 'fa fa-slack'
			};
			$scope.typeIcon = iconTypeMap[$scope.typeName];
        }]
    };
});

'use strict';

// coffeescript's for in loop
var __indexOf = [].indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
    }
    return -1;
};

angular.module('angular-tellform').directive('fieldDirective', ['$http', '$compile', '$rootScope', '$templateCache', 'supportedFields',
    function($http, $compile, $rootScope, $templateCache, supportedFields) {

    var getTemplateUrl = function(fieldType) {
        var type = fieldType;

        var templateUrl = 'modules/forms/base/views/directiveViews/field/';

		if (__indexOf.call(supportedFields, type) >= 0) {
            templateUrl = templateUrl+type+'.html';
        }
   		return $templateCache.get(templateUrl);
    };

    return {
        template: '<div>{{field.title}}</div>',
        restrict: 'E',
        scope: {
            field: '=',
            required: '&',
            design: '=',
            index: '='
        },
        link: function(scope, element) {

			$rootScope.chooseDefaultOption = scope.chooseDefaultOption = function(type) {
				if(type === 'yes_no'){
					scope.field.fieldValue = 'true';
				}else if(type === 'rating'){
					scope.field.fieldValue = 0;
				}else if(scope.field.fieldType === 'radio'){
					console.log(scope.field);
					scope.field.fieldValue = scope.field.fieldOptions[0].option_value;
					console.log(scope.field.fieldValue);
				}else if(type === 'legal'){
					scope.field.fieldValue = 'true';
					$rootScope.nextField();
				}
			};

            scope.setActiveField = $rootScope.setActiveField;

            //Set format only if field is a date
            if(scope.field.fieldType === 'date'){
                scope.dateOptions = {
                    changeYear: true,
                    changeMonth: true,
                    altFormat: 'mm/dd/yyyy',
                    yearRange: '1900:-0',
                    defaultDate: 0
                };
            }

            var fieldType = scope.field.fieldType;

			if(scope.field.fieldType === 'number' || scope.field.fieldType === 'textfield' || scope.field.fieldType === 'email' || scope.field.fieldType === 'link'){
				switch(scope.field.fieldType){
					case 'textfield':
						scope.field.input_type = 'text';
						break;
					case 'email':
						scope.field.input_type = 'email';
						scope.field.placeholder = 'joesmith@example.com';
						break;
					case 'number':
                        scope.field.input_type = 'text';
						scope.field.validateRegex = /^-?\d+$/;
                        break;
                    default:
						scope.field.input_type = 'url';
						scope.field.placeholder = 'http://example.com';
						break;
				}
				fieldType = 'textfield';
			}
            var template = getTemplateUrl(fieldType);
           	element.html(template);
            $compile(element.contents())(scope);
        }
    };
}]);

'use strict';

//TODO: DAVID: Need to refactor this
angular.module('angular-tellform').directive('onEnterKey', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			$element.bind('keydown keypress', function(event) {

				var keyCode = event.which || event.keyCode;

				var onEnterKeyDisabled = false;
				if($attrs.onEnterKeyDisabled !== null) onEnterKeyDisabled = $attrs.onEnterKeyDisabled;

				if(keyCode === 13 && !event.shiftKey && !onEnterKeyDisabled) {
					event.preventDefault();
					$rootScope.$apply(function() {
						$rootScope.$eval($attrs.onEnterKey);
					});
				}
			});
		}
	};
}]).directive('onTabKey', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			$element.bind('keydown keypress', function(event) {

				var keyCode = event.which || event.keyCode;

				if(keyCode === 9 && !event.shiftKey) {

					event.preventDefault();
					$rootScope.$apply(function() {
						$rootScope.$eval($attrs.onTabKey);
					});
				}
			});
		}
	};
}]).directive('onEnterOrTabKey', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			$element.bind('keydown keypress', function(event) {

				var keyCode = event.which || event.keyCode;

				if((keyCode === 13 || keyCode === 9) && !event.shiftKey) {
					event.preventDefault();
					$rootScope.$apply(function() {
						$rootScope.$eval($attrs.onEnterOrTabKey);
					});
				}
			});
		}
	};
}]).directive('onTabAndShiftKey', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			$element.bind('keydown keypress', function(event) {

				var keyCode = event.which || event.keyCode;

				if(keyCode === 9 && event.shiftKey) {
					event.preventDefault();
					$rootScope.$apply(function() {
						$rootScope.$eval($attrs.onTabAndShiftKey);
					});
				}
			});
		}
	};
}]);

'use strict';

angular.module('angular-tellform').directive('onFinishRender', ["$rootScope", "$timeout", function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //Don't do anything if we don't have a ng-repeat on the current element
            if(!element.attr('ng-repeat') && !element.attr('data-ng-repeat')){
                return;
            }

            var broadcastMessage = attrs.onFinishRender || 'ngRepeat';

            if(scope.$first && !scope.$last) {
                scope.$evalAsync(function () {
                    $rootScope.$broadcast(broadcastMessage+' Started');
                });
            }else if(scope.$last) {
            	scope.$evalAsync(function () {
                    // console.log(broadcastMessage+'Finished');
            	    $rootScope.$broadcast(broadcastMessage+' Finished');
                });
            }
        }
    };
}]);

'use strict';

angular.module('angular-tellform').directive('angularTellform',
    ['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
    return {
        templateUrl: 'modules/forms/base/views/submit-form.client.view.html',
        restrict: 'E',
        scope: {
            myform:'='
        },
        controller: ["$document", "$window", "$scope", function($document, $window, $scope){
            console.log('angular-tellform directive');
            $scope.authentication = Auth;
            $scope.myform.visible_form_fields = _.filter($scope.myform.form_fields, function(field){
                return (field.deletePreserved === false);
            });

            if(!$scope.myform.isLive){
                // Show navbar if form is not public AND user IS loggedin
                if($scope.authentication.isAuthenticated()){
                    $scope.hideNav = $rootScope.hideNav = false;
                }
                // Redirect if  form is not public user IS NOT loggedin
                else {
                    $scope.hideNav = $rootScope.hideNav = true;
                    $state.go('access_denied');
                }
            }else{
                $scope.hideNav = $rootScope.hideNav = true;
            }

        }]
    };
}]);

'use strict';

angular.module('angular-tellform').directive('submitFormDirective', ['$http', 'TimeCounter', '$filter', '$rootScope', 'Auth', 'SendVisitorData',
    function ($http, TimeCounter, $filter, $rootScope, Auth, SendVisitorData) {
        return {
            templateUrl: 'modules/forms/base/views/directiveViews/form/submit-form.client.view.html',
			restrict: 'E',
            scope: {
                myform:'='
            },
            controller: ["$document", "$window", "$scope", function($document, $window, $scope){
                $scope.authentication = $rootScope.authentication;
		        $scope.noscroll = false;
                $scope.forms = {};

				var form_fields_count = $scope.myform.visible_form_fields.filter(function(field){
                    if(field.fieldType === 'statement' || field.fieldType === 'rating'){
                        return false;
                    }
                    return true;
                }).length;

				var nb_valid = $filter('formValidity')($scope.myform);
				$scope.translateAdvancementData = {
					done: nb_valid,
					total: form_fields_count,
					answers_not_completed: form_fields_count - nb_valid
				};

                $scope.reloadForm = function(){
                    //Reset Form
                    $scope.myform.submitted = false;
                    $scope.myform.form_fields = _.chain($scope.myform.visible_form_fields).map(function(field){
                            field.fieldValue = '';
                            return field;
                        }).value();

					$scope.loading = false;
                    $scope.error = '';

                    $scope.selected = {
                        _id: '',
                        index: 0
                    };
                    $scope.setActiveField($scope.myform.visible_form_fields[0]._id, 0, false);

                    //console.log($scope.selected);
                    //Reset Timer
                    TimeCounter.restartClock();
                };

				//Fire event when window is scrolled
				$window.onscroll = function(){
            		$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
					var elemBox = document.getElementsByClassName('activeField')[0].getBoundingClientRect();
					$scope.fieldTop = elemBox.top;
					$scope.fieldBottom = elemBox.bottom;

                    //console.log($scope.forms.myForm);
					var field_id;
					var field_index;

                    if(!$scope.noscroll){
                        //Focus on submit button
                        if( $scope.selected.index === $scope.myform.visible_form_fields.length-1 && $scope.fieldBottom < 200){
                            field_index = $scope.selected.index+1;
                            field_id = 'submit_field';
                            $scope.setActiveField(field_id, field_index, false);
                        }
                        //Focus on field above submit button
                        else if($scope.selected.index === $scope.myform.visible_form_fields.length){
                            if($scope.fieldTop > 200){
                                field_index = $scope.selected.index-1;
                                field_id = $scope.myform.visible_form_fields[field_index]._id;
                                $scope.setActiveField(field_id, field_index, false);
                            }
                        }else if( $scope.fieldBottom < 0){
                            field_index = $scope.selected.index+1;
                            field_id = $scope.myform.visible_form_fields[field_index]._id;
                            $scope.setActiveField(field_id, field_index, false);
                        }else if ( $scope.selected.index !== 0 && $scope.fieldTop > 0) {
                            field_index = $scope.selected.index-1;
                            field_id = $scope.myform.visible_form_fields[field_index]._id;
                            $scope.setActiveField(field_id, field_index, false);
                        }
                        //console.log('$scope.selected.index: '+$scope.selected.index);
					    //console.log('scroll pos: '+$scope.scrollPos+' fieldTop: '+$scope.fieldTop+' fieldBottom: '+$scope.fieldBottom);
            		    $scope.$apply();
                    }
        		};

                /*
                ** Field Controls
                */
				var getActiveField = function(){
					if($scope.selected === null){
						console.error('current active field is null');
						throw new Error('current active field is null');
					}

					if($scope.selected._id === 'submit_field') {
						return $scope.myform.form_fields.length - 1;
					} else {
						return $scope.selected.index;
					}
				};

                $scope.setActiveField = $rootScope.setActiveField = function(field_id, field_index, animateScroll) {
                    if($scope.selected === null || $scope.selected._id === field_id){
						//console.log('not scrolling');
						//console.log($scope.selected);
						return;
		    		}
                    //console.log('field_id: '+field_id);
                    //console.log('field_index: '+field_index);
                    //console.log($scope.selected);

                    $scope.selected._id = field_id;
                    $scope.selected.index = field_index;

					var nb_valid = $filter('formValidity')($scope.myform);
					$scope.translateAdvancementData = {
						done: nb_valid,
						total: form_fields_count,
						answers_not_completed: form_fields_count - nb_valid
					};

                    if(animateScroll){
                        $scope.noscroll=true;
                        setTimeout(function() {
                            $document.scrollToElement(document.getElementsByClassName('activeField'), -10, 200).then(function() {
								$scope.noscroll = false;
								setTimeout(function() {
									if (document.querySelectorAll('.activeField .focusOn').length) {
										//Handle default case
										document.querySelectorAll('.activeField .focusOn')[0].focus();
									} else if(document.querySelectorAll('.activeField input').length) {
										//Handle case for rating input
										document.querySelectorAll('.activeField input')[0].focus();
									} else {
										//Handle case for dropdown input
										document.querySelectorAll('.activeField .selectize-input')[0].focus();
									}
								});
                            });
                        });
                    }else {
						setTimeout(function() {
							if (document.querySelectorAll('.activeField .focusOn')[0]) {
								//FIXME: DAVID: Figure out how to set focus without scroll movement in HTML Dom
								document.querySelectorAll('.activeField .focusOn')[0].focus();
							} else {
								document.querySelectorAll('.activeField input')[0].focus();
							}
						});
					}

					SendVisitorData.send($scope.myform, getActiveField(), TimeCounter.getTimeElapsed());
                };

                $rootScope.nextField = $scope.nextField = function(){
                    //console.log('nextfield');
                    //console.log($scope.selected.index);
					//console.log($scope.myform.visible_form_fields.length-1);
					var selected_index, selected_id;
					if($scope.selected.index < $scope.myform.visible_form_fields.length-1){
                        selected_index = $scope.selected.index+1;
                        selected_id = $scope.myform.visible_form_fields[selected_index]._id;
                        $rootScope.setActiveField(selected_id, selected_index, true);
                    } else if($scope.selected.index === $scope.myform.visible_form_fields.length-1) {
						//console.log('Second last element');
						selected_index = $scope.selected.index+1;
						selected_id = 'submit_field';
						$rootScope.setActiveField(selected_id, selected_index, true);
					}
                };

                $rootScope.prevField = $scope.prevField = function(){
                    if($scope.selected.index > 0){
                        var selected_index = $scope.selected.index - 1;
                        var selected_id = $scope.myform.visible_form_fields[selected_index]._id;
                        $scope.setActiveField(selected_id, selected_index, true);
                    }
                };

                /*
                ** Form Display Functions
                */
                $scope.exitStartPage = function(){
                    $scope.myform.startPage.showStart = false;
                    if($scope.myform.visible_form_fields.length > 0){
                        $scope.selected._id = $scope.myform.visible_form_fields[0]._id;
                    }
                };

				$rootScope.goToInvalid = $scope.goToInvalid = function() {
					document.querySelectorAll('.ng-invalid.focusOn')[0].focus();
				};

				$rootScope.submitForm = $scope.submitForm = function() {

					var _timeElapsed = TimeCounter.stopClock();
					$scope.loading = true;

					var form = _.cloneDeep($scope.myform);

					form.timeElapsed = _timeElapsed;

					form.percentageComplete = $filter('formValidity')($scope.myform) / $scope.myform.visible_form_fields.length * 100;
					delete form.visible_form_fields;

					for(var i=0; i < $scope.myform.form_fields.length; i++){
						if($scope.myform.form_fields[i].fieldType === 'dropdown' && !$scope.myform.form_fields[i].deletePreserved){
							$scope.myform.form_fields[i].fieldValue = $scope.myform.form_fields[i].fieldValue.option_value;
						}
					}

					setTimeout(function () {
						$scope.submitPromise = $http.post('/forms/' + $scope.myform._id, form)
							.success(function (data, status, headers) {
								console.log($scope.myform.form_fields[0]);
								$scope.myform.submitted = true;
								$scope.loading = false;
								SendVisitorData.send($scope.myform, getActiveField(), _timeElapsed);
							})
							.error(function (error) {
								$scope.loading = false;
								console.error(error);
								$scope.error = error.message;
							});
					}, 500);
                };

                //Reload our form
				$scope.reloadForm();
            }]
        };
    }
]);

'use strict';

angular.module('angular-tellform').factory('Auth', function() {
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
});

'use strict';

//Forms service used for communicating with the forms REST endpoints
angular.module('angular-tellform').service('CurrentForm',
	function(){

		//Private variables
		var _form = {};

		//Public Methods
		this.getForm = function() {
	        return _form;
	    };
	    this.setForm = function(form) {
	        _form = form;
	    };
    }
);
'use strict';

//TODO: DAVID: URGENT: Make this a $resource that fetches valid field types from server
angular.module('angular-tellform').service('FormFields', function() {
	this.types = [
		{
			name : 'textfield',
			value : 'Short Text'
		},
		{
			name : 'email',
			value : 'Email'
		},
		{
			name : 'radio',
			value : 'Multiple Choice'
		},
		{
			name : 'dropdown',
			value : 'Dropdown'
		},
		{
			name : 'date',
			value : 'Date'
		},
		{
			name : 'textarea',
			value : 'Paragraph Text'
		},
		{
			name : 'yes_no',
			value : 'Yes/No'
		},
		{
			name : 'legal',
			value : 'Legal'
		},
		// {
		//     name : 'sig',
		//     value : 'Signature'
		// },
		// {
		//     name : 'file',
		//     value : 'File Upload'
		// },
		{
			name : 'rating',
			value : 'Rating'
		},
		{
			name : 'link',
			value : 'Link'
		},
		{
			name : 'number',
			value : 'Numbers'
		},
		// {
		//     name : 'scale',
		//     value : 'Opinion Scale'
		// },
		// {
		//     name : 'stripe',
		//     value : 'Payment'
		// },
		{
			name : 'statement',
			value : 'Statement'
		}
	];
});
'use strict';

//Forms service used for communicating with the forms REST endpoints
angular.module('angular-tellform').factory('Forms', ['$resource', 'FORM_URL',
	function($resource, FORM_URL) {
		return $resource(FORM_URL, {
			formId: '@_id'
		}, {
			'query' : {
				method: 'GET',
				isArray: true
			},
			'get' : {
				method: 'GET',
				transformResponse: function(data, header) {
		          	var form = angular.fromJson(data);

					form.visible_form_fields = _.filter(form.form_fields, function(field){
		            	return (field.deletePreserved === false);
		            });
		          	return form;
		        }
			},
			'update': {
				method: 'PUT'
			},
			'save': {
				method: 'POST'
			}
		});
	}
]);
'use strict';

angular.module('angular-tellform').service('TimeCounter', [
	function(){
		var _startTime, _endTime = null, that=this;

		this.timeSpent = 0;

		this.restartClock = function(){
			_startTime = Date.now();
			_endTime = null;
			// console.log('Clock Started');
		};

		this.getTimeElapsed = function(){
			if(_startTime) {
				return Math.abs(Date.now().valueOf() - _startTime.valueOf()) / 1000;
			}
		};

		this.stopClock = function(){
			if(_startTime && _endTime === null){
				_endTime = Date.now();
				this.timeSpent = Math.abs(_endTime.valueOf() - _startTime.valueOf())/1000;
				this._startTime = this._endTime = null;

				return this.timeSpent;
			}else{
				return new Error('Clock has not been started');
			}
		};

		this.clockStarted = function(){
			return !!this._startTime;
		};

	}
]);
angular.module('angular-tellform.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("modules/forms/base/views/directiveViews/field/date.html",
    "<div class=\"field row\"\n" +
    "	 ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "    		{{field.title}}\n" +
    "    		<span class=\"required-error\" ng-show=\"!field.required && !field.fieldValue\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "    	</h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"control-group input-append\">\n" +
    "            <input class=\"focusOn\"\n" +
    "				   ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "				   ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "				   ui-date=\"dateOptions\"\n" +
    "				   ng-model=\"field.fieldValue\"\n" +
    "				   ng-model-options=\"{ debounce: 250 }\"\n" +
    "				   ng-required=\"field.required\"\n" +
    "				   ng-disabled=\"field.disabled\"\n" +
    "				   placeholder=\"MM/DD/YYYY\"\n" +
    "				   ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "				   on-tab-key=\"nextField()\"\n" +
    "				   on-tab-and-shift-key=\"prevField()\"\n" +
    "				   ng-change=\"$root.nextField()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/dropdown.html",
    "<div class=\"field row dropdown\"\n" +
    "	 ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "	    	{{field.title}}\n" +
    "	    	<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "	    </h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<ui-select ng-model=\"field.fieldValue\"\n" +
    "                theme=\"selectize\"\n" +
    "			    search-enabled=\"true\"\n" +
    "			    search-by=\"option_value\"\n" +
    "			    set-search-to-answer=\"true\"\n" +
    "				ng-required=\"field.required\"\n" +
    "				ng-disabled=\"field.disabled\"\n" +
    "			    on-tab-and-shift-key=\"prevField()\"\n" +
    "			    on-tab-key=\"nextField()\"\n" +
    "				ng-change=\"$root.nextField()\">\n" +
    "			<ui-select-match placeholder=\"Type or select an option\">\n" +
    "			</ui-select-match>\n" +
    "			<ui-select-choices repeat=\"option in field.fieldOptions | filter: $select.search\"\n" +
    "							   ng-class=\"{'active': option.option_value === field.fieldValue }\">\n" +
    "				<span ng-bind-html=\"option.option_value | highlight: $select.search\"></span>\n" +
    "			</ui-select-choices>\n" +
    "        </ui-select>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/file.html",
    "<div class=\"field row\" ng-if=\"form.autofillPDFs\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "\n" +
    "	<div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "    <div class=\"col-sm-8 field-input\">\n" +
    "        <div class=\"input-group \">\n" +
    "            <div tabindex=\"-1\" class=\"form-control file-caption\">\n" +
    "                <span class=\"file-caption-ellipsis\" ng-if=\"!form.pdf\">…</span>\n" +
    "                <div class=\"file-caption-name\" ng-if=\"form.pdf\">\n" +
    "                    {{field.file.originalname}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"input-group-btn\">\n" +
    "                <button type=\"button\"  ng-if=\"field.file\" ng-click=\"removeFile(field);\" title=\"Clear selected files\" class=\"btn btn-danger fileinput-remove fileinput-remove-button\">\n" +
    "\n" +
    "                    <i class=\"glyphicon glyphicon-trash\"  ></i>\n" +
    "                    {{ 'DELETE' | translate }}\n" +
    "                </button>\n" +
    "\n" +
    "                <button type=\"button\" ng-if=\"field.fileLoading\" title=\"Abort ongoing upload\" class=\"btn btn-default\" ng-click=\"cancelFileUpload(field)\">\n" +
    "                    <i class=\"glyphicon glyphicon-ban-circle\"></i>\n" +
    "                    {{ 'CANCEL' | translate }}\n" +
    "                </button>\n" +
    "\n" +
    "                <div class=\"btn btn-success btn-file\" ngf-select ngf-change=\"uploadPDF($files)\" ng-if=\"!field.file\">\n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>\n" +
    "                    {{ UPLOAD_FILE | translate }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/hidden.html",
    "<input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"  type=\"hidden\" ng-model=\"field.fieldValue\" ng-model-options=\"{ debounce: 250 }\" value=\"{{field.fieldValue}}\" ng-disabled=\"field.disabled\">\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/legal.html",
    "<div class=\"field row radio legal\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 key-to-truthy key-char-truthy=\"y\" key-char-falsey=\"n\" field=\"field\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "    	<br>\n" +
    "    	<p class=\"col-xs-12\">{{field.description}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input container\">\n" +
    "		<div class=\"row-fluid\"\n" +
    "			 on-enter-or-tab-key=\"nextField()\"\n" +
    "			 on-tab-and-shift-key=\"prevField()\">\n" +
    "            <label class=\"btn col-md-5 col-xs-12\"\n" +
    "				   ng-class=\"{activeBtn: field.fieldValue == 'true'}\">\n" +
    "                <input class=\"focusOn\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "                    ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" value=\"true\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					Y\n" +
    "				</div>\n" +
    "                <span>{{ 'LEGAL_ACCEPT' | translate }}</span>\n" +
    "            </label>\n" +
    "            <label class=\"btn col-md-5 col-md-offset-1 col-xs-12\"\n" +
    "				   ng-class=\"{activeBtn: field.fieldValue == 'false'}\">\n" +
    "                <input class=\"focusOn\"\n" +
    "					ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" value=\"false\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					N\n" +
    "				</div>\n" +
    "                <span>{{ 'LEGAL_NO_ACCEPT' | translate }}</span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/natural.html",
    "<div class=\"field row textfield natural\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" type=\"text\" \n" +
    "			class=\"text-field-input\" \n" +
    "			ng-model=\"field.fieldValue\" \n" +
    "			ng-model-options=\"{ debounce: 250 }\"  \n" +
    "			value=\"field.fieldValue\" \n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\">\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "    	<span ng-bind=\"field.fieldMatchValue\"></span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/password.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" type=\"password\" class=\"text-field-input\" ng-model=\"field.fieldValue\" ng-model-options=\"{ debounce: 250 }\"  value=\"{{field.fieldValue}}\"  ng-required=\"field.required\" ng-disabled=\"field.disabled\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/radio.html",
    "<div class=\"field row radio\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 key-to-option field=\"field\"\n" +
    "	 ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "	</div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "\n" +
    "        <div ng-repeat=\"option in field.fieldOptions\" class=\"row-fluid\">\n" +
    "            <label class=\"btn col-md-4 col-xs-12 col-sm-12\"\n" +
    "                    style=\"margin: 0.5em; padding-left:30px\"\n" +
    "                    ng-class=\"{activeBtn: field.fieldValue == field.fieldOptions[$index].option_value}\">\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					{{$index+1}}\n" +
    "				</div>\n" +
    "				<input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" class=\"focusOn\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "				    value=\"{{option.option_value}}\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<span ng-bind=\"option.option_value\"></span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/rating.html",
    "<div class=\"textfield field row\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "	    	{{field.title}}\n" +
    "	    	<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "	    </h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "\n" +
    "		<input-stars max=\"{{field.ratingOptions.steps}}\"\n" +
    "					 ng-init=\"field.fieldValue = 1\"\n" +
    "					 on-star-click=\"$root.nextField()\"\n" +
    "					 icon-full=\"{{field.ratingOptions.shape}}\"\n" +
    "					 icon-base=\"fa fa-3x\"\n" +
    "					 icon-empty=\"{{field.ratingOptions.shape}}\"\n" +
    "					 ng-model=\"field.fieldValue\"\n" +
    "					 ng-model-options=\"{ debounce: 250 }\"\n" +
    "					 ng-required=\"field.required\"\n" +
    "					 ng-disabled=\"field.disabled\"\n" +
    "					 on-enter-or-tab-key=\"nextField()\"\n" +
    "					 on-tab-and-shift-key=\"prevField()\"\n" +
    "					 ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "					 class=\"angular-input-stars focusOn\">\n" +
    "		</input-stars>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/statement.html",
    "<div class=\"statement field row\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 on-tab-and-shift-key=\"prevField()\"\n" +
    "	 ng-focus=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"row field-title field-title\">\n" +
    "    	<div class=\"col-xs-1\"><i class=\"fa fa-quote-left fa-1\"></i></div>\n" +
    "    	<h2 class=\"text-left col-xs-9\">{{field.title}}</h2>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"row field-title field-input\">\n" +
    "    	<p class=\"col-xs-12\" ng-if=\"field.description.length\">{{field.description}} </p>\n" +
    "    	<br>\n" +
    "	<div class=\"col-xs-offset-1 col-xs-11\">\n" +
    "        	<button class=\"btn focusOn\"\n" +
    "			    ng-style=\"{'font-size': '1.3em', 'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-focused=\"setActiveField(field._id, index, true)\"\n" +
    "                ng-click=\"$root.nextField()\">\n" +
    "            		{{ 'CONTINUE' | translate }} \n" +
    "        	</button>\n" +
    "	</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textarea.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "		<small>{{ 'NEWLINE' | translate }}</small>\n" +
    "		<p>\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "	</div>\n" +
    "	<div class=\"col-xs-12 field-input\">\n" +
    "		<small style=\"font-size:0.6em;\">Press SHIFT+ENTER to add a newline</small>\n" +
    "		<textarea class=\"textarea focusOn\" type=\"text\"\n" +
    "			ng-model=\"field.fieldValue\"\n" +
    "			ng-model-options=\"{ debounce: 250 }\"\n" +
    "			ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "			value=\"{{field.fieldValue}}\"\n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "		    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "		    on-enter-or-tab-key=\"nextField()\"\n" +
    "		    on-tab-and-shift-key=\"prevField()\"\n" +
    "			style=\"border: none; border-left: lightgrey dashed 2px;\">\n" +
    "		</textarea>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "	<div class=\"btn btn-lg btn-default col-xs-12 col-sm-4 hidden-xs\"\n" +
    "		 style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "		<button ng-disabled=\"!field.fieldValue || forms.myForm.{{field.fieldType}}{{$index}}.$invalid\"\n" +
    "				ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "				ng-click=\"$root.nextField()\"\n" +
    "				class=\"btn col-sm-5 col-xs-5\">\n" +
    "\n" +
    "			{{ 'OK' | translate }} <i class=\"fa fa-check\"></i>\n" +
    "		</button>\n" +
    "		<div class=\"col-sm-3 col-xs-6\" style=\"margin-top:0.2em\">\n" +
    "			<small style=\"color:#ddd; font-size:70%\">\n" +
    "				{{ 'ENTER' | translate }}\n" +
    "			</small>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textfield.html",
    "<div class=\"textfield field row\"\n" +
    "	 ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "	<div class=\"col-xs-12 field-title row-fluid\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3 class=\"col-xs-12\">\n" +
    "    		<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "\n" +
    "			{{field.title}}\n" +
    "\n" +
    "    		<span class=\"required-error\" ng-show=\"!field.required\">\n" +
    "    			({{ 'OPTIONAL' | translate }})\n" +
    "    		</span>\n" +
    "    	</h3>\n" +
    "\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "			name=\"{{field.fieldType}}{{index}}\"\n" +
    "            type=\"{{field.input_type}}\"\n" +
    "		   	ng-pattern=\"field.validateRegex\"\n" +
    "			placeholder=\"{{field.placeholder}}\"\n" +
    "			ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "            class=\"focusOn text-field-input\"\n" +
    "			ng-model=\"field.fieldValue\"\n" +
    "			ng-model-options=\"{ debounce: 250 }\"\n" +
    "			value=\"field.fieldValue\"\n" +
    "		    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "		   	on-enter-or-tab-key=\"nextField()\"\n" +
    "		   	on-tab-and-shift-key=\"prevField()\"\n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "	        aria-describedby=\"inputError2Status\">\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div ng-show=\"forms.myForm.{{field.fieldType}}{{index}}.$invalid && !!forms.myForm.{{field.fieldType}}{{index}}.$viewValue \" class=\"alert alert-danger\" role=\"alert\">\n" +
    "            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n" +
    "            <span class=\"sr-only\">Error:</span>\n" +
    "			<span ng-if=\"field.fieldType == 'email'\"> {{ 'ERROR_EMAIL_INVALID' | translate }} </span>\n" +
    "			<span ng-if=\"field.validateRegex\"> {{ 'ERROR_NOT_A_NUMBER' | translate }} </span>\n" +
    "			<span ng-if=\"field.fieldType == 'link'\"> {{ 'ERROR_URL_INVALID' | translate }} </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div>\n" +
    "	<div class=\"btn btn-lg btn-default col-xs-12 col-sm-4 hidden-xs\"\n" +
    "	 	style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "			<button ng-disabled=\"!field.fieldValue || forms.myForm.{{field.fieldType}}{{$index}}.$invalid\"\n" +
    "				ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-click=\"$root.nextField()\"\n" +
    "				class=\"btn col-sm-5 col-xs-5\">\n" +
    "\n" +
    "				{{ 'OK' | translate }} <i class=\"fa fa-check\"></i>\n" +
    "			</button>\n" +
    "			<div class=\"col-xs-6 col-sm-3\" style=\"margin-top:0.2em\">\n" +
    "				<small style=\"color:#ddd; font-size:70%\">\n" +
    "				{{ 'ENTER' | translate }}\n" +
    "				</small>\n" +
    "			</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/yes_no.html",
    "<div class=\"field row radio\"\n" +
    "	 	ng-click=\"setActiveField(field._id, index, true)\"\n" +
    "	 	on-tab-and-shift-key=\"prevField()\"\n" +
    "	 	key-to-truthy key-char-truthy=\"y\" key-char-falsey=\"n\" field=\"field\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "        <h3 class=\"row\">\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "            <span class=\"required-error\" ng-show=\"!field.required\">\n" +
    "                {{ 'OPTIONAL' | translate }}\n" +
    "            </span>\n" +
    "        </h3>\n" +
    "        <p class=\"row\">\n" +
    "            {{field.description}}\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"row\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-7\"\n" +
    "		style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "                <input type=\"radio\" value=\"true\"\n" +
    "					class=\"focusOn\"\n" +
    "                    style=\"opacity: 0; margin-left: 0px;\"\n" +
    "					ng-model=\"field.fieldValue\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "					ng-model-options=\"{ debounce: 250 }\"\n" +
    "					ng-required=\"field.required\"\n" +
    "					ng-change=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\" />\n" +
    "				<div class=\"letter\">\n" +
    "					{{ 'Y' | translate }}\n" +
    "				</div>\n" +
    "				<span>{{ 'YES' | translate }}</span>\n" +
    "				<i ng-show=\"field.fieldValue === 'true'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "            </label>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" style=\"margin-top: 10px;\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-7\"\n" +
    "		        style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "\n" +
    "                <input type=\"radio\" value=\"false\"\n" +
    "			        style=\"opacity:0; margin-left:0px;\"\n" +
    "			        ng-model=\"field.fieldValue\"\n" +
    "			        ng-model-options=\"{ debounce: 250 }\"\n" +
    "			        ng-required=\"field.required\"\n" +
    "			        ng-change=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\"/>\n" +
    "\n" +
    "			<div class=\"letter\">\n" +
    "				{{ 'N' | translate }}\n" +
    "			</div>\n" +
    "			<span>{{ 'NO' | translate }}</span>\n" +
    "				<i ng-show=\"field.fieldValue === 'false'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/form/submit-form.client.view.html",
    "<section class=\"overlay submitform\" ng-if=\"loading || (!myform.submitted && !myform.startPage.showStart)\"></section>\n" +
    "\n" +
    "<!-- Start Page View -->\n" +
    "\n" +
    "<div ng-show=\"!myform.submitted && myform.startPage.showStart\"\n" +
    "class=\"form-submitted\"\n" +
    "style=\"padding-top: 35vh;\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-xs-12 text-center\" style=\"overflow-wrap: break-word;\">\n" +
    "<h1 style=\"font-weight: 400; nont-size: 25px;\">\n" +
    "{{myform.startPage.introTitle}}\n" +
    "</h1>\n" +
    "</div>\n" +
    "<div class=\"col-xs-10 col-xs-offset-1 text-center\" style=\"overflow-wrap: break-word;\">\n" +
    "<p style=\"color: grey; font-weight: 100; font-size: 16px;\">\n" +
    "{{myform.startPage.introParagraph}}\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row form-actions text-center\" style=\"padding: 5px 25px 5px 25px;\">\n" +
    "<button ng-click=\"exitStartPage()\" class=\"btn\" type=\"button\"\n" +
    "ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "<span style=\"font-size: 1.6em;\">\n" +
    "{{myform.startPage.introButtonText}}\n" +
    "</span>\n" +
    "</button>\n" +
    "</div>\n" +
    "<div class=\"row form-actions\" style=\"padding-bottom:3em; padding-left: 1em; padding-right: 1em;\">\n" +
    "<p ng-repeat=\"button in myform.startPage.buttons\" class=\"text-center\" style=\"display:inline;\">\n" +
    "<button class=\"btn\" style=\"background-color:rgb(156, 226, 235)\" type=\"button\" ng-style=\"{'background-color':button.bgColor, 'color':button.color}\">\n" +
    "\n" +
    "<a href=\"{{button.url}}\"\n" +
    "style=\"font-size: 1.6em; text-decoration: none;\"\n" +
    "ng-style=\"{'color':button.color}\">\n" +
    "{{button.text}}\n" +
    "</a>\n" +
    "</button>\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Form Fields View -->\n" +
    "<div class=\"form-fields\" ng-show=\"!myform.submitted && !myform.startPage.showStart\"\n" +
    "    ng-style=\"{ 'border-color': myform.design.colors.buttonTextColor }\">\n" +
    "	<div class=\"row\">\n" +
    "		<form name=\"forms.myForm\"\n" +
    "		novalidate\n" +
    "		class=\"submission-form col-sm-12 col-md-offset-1 col-md-10\">\n" +
    "\n" +
    "		<div ng-repeat=\"field in myform.form_fields\"\n" +
    "		ng-if=\"!field.deletePreserved\"\n" +
    "		data-index=\"{{$index}}\"\n" +
    "		data-id=\"{{field._id}}\"\n" +
    "		ng-class=\"{activeField: selected._id == field._id }\"\n" +
    "		class=\"row field-directive\">\n" +
    "\n" +
    "			<field-directive field=\"field\" design=\"myform.design\" index=\"$index\" forms=\"forms\">\n" +
    "			</field-directive>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		</form>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row form-actions\" id=\"submit_field\"\n" +
    "	ng-class=\"{activeField: selected._id == 'submit_field' }\"\n" +
    "	ng-style=\"{ 'background-color':myform.design.colors.buttonColor}\"\n" +
    "	style=\"border-top: 1px solid #ddd; margin-right: -13%; margin-left: -13%; margin-top: 30vh; height: 100vh\">\n" +
    "\n" +
    "	<div class=\"col-xs-12 text-left\"\n" +
    "		 style=\"background-color:#990000; color:white;\"\n" +
    "		 ng-if=\"forms.myForm.$invalid\">\n" +
    "         {{ 'COMPLETING_NEEDED' | translate:translateAdvancementData }}\n" +
    "	</div>\n" +
    "\n" +
    "	<button ng-if=\"!forms.myForm.$invalid\"\n" +
    "		class=\"Button btn col-sm-2 col-xs-8 focusOn\"\n" +
    "		v-busy=\"loading\" v-busy-label=\"Please wait\" v-pressable\n" +
    "		ng-disabled=\"loading || forms.myForm.$invalid\"\n" +
    "		ng-click=\"submitForm()\"\n" +
    "		on-enter-key=\"submitForm()\"\n" +
    "		on-enter-key-disabled=\"loading || forms.myForm.$invalid\"\n" +
    "		ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "		style=\"font-size: 1.6em; margin-left: 1em; margin-top: 1em;\">\n" +
    "\n" +
    "		{{ 'SUBMIT' | translate }}\n" +
    "	</button>\n" +
    "\n" +
    "	<button ng-if=\"forms.myForm.$invalid\"\n" +
    "			class=\"Button btn col-sm-2 col-xs-8 focusOn\"\n" +
    "			ng-click=\"goToInvalid()\"\n" +
    "			on-enter-key=\"goToInvalid()\"\n" +
    "			on-enter-key-disabled=\"!forms.myForm.$invalid\"\n" +
    "			style=\"font-size: 1.6em; margin-left: 1em; margin-top: 1em; background-color:#990000; color:white\">\n" +
    "		{{ 'REVIEW' | translate }}\n" +
    "	</button>\n" +
    "\n" +
    "	<div class=\"col-sm-2 hidden-xs\" style=\"font-size: 75%; margin-top:3.25em\">\n" +
    "		<small>\n" +
    "			{{ 'ENTER' | translate }}\n" +
    "		</small>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<section ng-if=\"!myform.hideFooter\" class=\"navbar navbar-fixed-bottom\"\n" +
    "        ng-style=\"{ 'background-color':myform.design.colors.buttonColor, 'padding-top': '15px', 'border-top': '2px '+ myform.design.colors.buttonTextColor +' solid', 'color':myform.design.colors.buttonTextColor}\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-5 col-md-6 col-xs-5\" ng-show=\"!myform.submitted\">\n" +
    "                        <p class=\"lead\">{{ 'ADVANCEMENT' | translate:translateAdvancementData }}</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-md-offset-0 col-sm-offset-2 col-sm-3 col-xs-offset-1 col-xs-6 row\">\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"!authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms\" class=\"btn\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "\n" +
    "                            {{ 'CREATE_FORM' | translate }}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms/{{myform._id}}/admin/create\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            class=\"btn\">\n" +
    "                            {{ 'EDIT_FORM' | translate }}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-sm-10 col-md-offset-0 col-sm-offset-2 col-xs-12 row\">\n" +
    "                        <button class=\"btn btn-lg col-xs-6\" id=\"focusDownButton\"\n" +
    "				            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"nextField()\"\n" +
    "				            ng-disabled=\"selected.index > myform.form_fields.length-1\">\n" +
    "                        	<i class=\"fa fa-chevron-down\"></i>\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-lg col-xs-6\" id=\"focusUpButton\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"prevField()\"\n" +
    "                            ng-disabled=\"selected.index == 0\">\n" +
    "                        	<i class=\"fa fa-chevron-up\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<!-- End Page View -->\n" +
    "<div ng-if=\"myform.submitted && !loading\" class=\"form-submitted\"\n" +
    "    ng-style=\"{'color':myform.design.colors.buttonTextColor}\"\n" +
    "    style=\"padding-top: 5vh;\">\n" +
    "\n" +
    "    <div class=\"field row text-center\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-3 text-center\">{{ 'FORM_SUCCESS' | translate }}</div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-actions\">\n" +
    "        <p class=\"text-center\">\n" +
    "            <button ng-click=\"reloadForm()\" class=\"btn\" type=\"button\"\n" +
    "                ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "                <span style=\"font-size: 1.6em;\"> {{ 'BACK_TO_FORM' | translate }}</span>\n" +
    "            </button>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/submit-form.client.view.html",
    "<section class=\"public-form\" ng-style=\"{ 'background-color': myform.design.colors.backgroundColor }\">\n" +
    "	<submit-form-directive myform=\"myform\"></submit-form-directive>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

},{}],2:[function(require,module,exports){
angular.module('angular-tellform.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("modules/forms/base/views/directiveViews/field/date.html",
    "<div class=\"field row\"\n" +
    "	 ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "    		{{field.title}}\n" +
    "    		<span class=\"required-error\" ng-show=\"!field.required && !field.fieldValue\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "    	</h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"control-group input-append\">\n" +
    "            <input class=\"focusOn\"\n" +
    "				   ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "				   ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "				   ui-date=\"dateOptions\"\n" +
    "				   ng-model=\"field.fieldValue\"\n" +
    "				   ng-model-options=\"{ debounce: 250 }\"\n" +
    "				   ng-required=\"field.required\"\n" +
    "				   ng-disabled=\"field.disabled\"\n" +
    "				   placeholder=\"MM/DD/YYYY\"\n" +
    "				   ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "				   on-tab-key=\"nextField()\"\n" +
    "				   on-tab-and-shift-key=\"prevField()\"\n" +
    "				   ng-change=\"$root.nextField()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/dropdown.html",
    "<div class=\"field row dropdown\"\n" +
    "	 ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "	    	{{field.title}}\n" +
    "	    	<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "	    </h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<ui-select ng-model=\"field.fieldValue\"\n" +
    "                theme=\"selectize\"\n" +
    "			    search-enabled=\"true\"\n" +
    "			    search-by=\"option_value\"\n" +
    "			    set-search-to-answer=\"true\"\n" +
    "				ng-required=\"field.required\"\n" +
    "				ng-disabled=\"field.disabled\"\n" +
    "			    on-tab-and-shift-key=\"prevField()\"\n" +
    "			    on-tab-key=\"nextField()\"\n" +
    "				ng-change=\"$root.nextField()\">\n" +
    "			<ui-select-match placeholder=\"Type or select an option\">\n" +
    "			</ui-select-match>\n" +
    "			<ui-select-choices repeat=\"option in field.fieldOptions | filter: $select.search\"\n" +
    "							   ng-class=\"{'active': option.option_value === field.fieldValue }\">\n" +
    "				<span ng-bind-html=\"option.option_value | highlight: $select.search\"></span>\n" +
    "			</ui-select-choices>\n" +
    "        </ui-select>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/file.html",
    "<div class=\"field row\" ng-if=\"form.autofillPDFs\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "\n" +
    "	<div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "    <div class=\"col-sm-8 field-input\">\n" +
    "        <div class=\"input-group \">\n" +
    "            <div tabindex=\"-1\" class=\"form-control file-caption\">\n" +
    "                <span class=\"file-caption-ellipsis\" ng-if=\"!form.pdf\">…</span>\n" +
    "                <div class=\"file-caption-name\" ng-if=\"form.pdf\">\n" +
    "                    {{field.file.originalname}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"input-group-btn\">\n" +
    "                <button type=\"button\"  ng-if=\"field.file\" ng-click=\"removeFile(field);\" title=\"Clear selected files\" class=\"btn btn-danger fileinput-remove fileinput-remove-button\">\n" +
    "\n" +
    "                    <i class=\"glyphicon glyphicon-trash\"  ></i>\n" +
    "                    {{ 'DELETE' | translate }}\n" +
    "                </button>\n" +
    "\n" +
    "                <button type=\"button\" ng-if=\"field.fileLoading\" title=\"Abort ongoing upload\" class=\"btn btn-default\" ng-click=\"cancelFileUpload(field)\">\n" +
    "                    <i class=\"glyphicon glyphicon-ban-circle\"></i>\n" +
    "                    {{ 'CANCEL' | translate }}\n" +
    "                </button>\n" +
    "\n" +
    "                <div class=\"btn btn-success btn-file\" ngf-select ngf-change=\"uploadPDF($files)\" ng-if=\"!field.file\">\n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>\n" +
    "                    {{ UPLOAD_FILE | translate }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/hidden.html",
    "<input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"  type=\"hidden\" ng-model=\"field.fieldValue\" ng-model-options=\"{ debounce: 250 }\" value=\"{{field.fieldValue}}\" ng-disabled=\"field.disabled\">\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/legal.html",
    "<div class=\"field row radio legal\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 key-to-truthy key-char-truthy=\"y\" key-char-falsey=\"n\" field=\"field\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "    	<br>\n" +
    "    	<p class=\"col-xs-12\">{{field.description}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input container\">\n" +
    "		<div class=\"row-fluid\"\n" +
    "			 on-enter-or-tab-key=\"nextField()\"\n" +
    "			 on-tab-and-shift-key=\"prevField()\">\n" +
    "            <label class=\"btn col-md-5 col-xs-12\"\n" +
    "				   ng-class=\"{activeBtn: field.fieldValue == 'true'}\">\n" +
    "                <input class=\"focusOn\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "                    ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" value=\"true\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					Y\n" +
    "				</div>\n" +
    "                <span>{{ 'LEGAL_ACCEPT' | translate }}</span>\n" +
    "            </label>\n" +
    "            <label class=\"btn col-md-5 col-md-offset-1 col-xs-12\"\n" +
    "				   ng-class=\"{activeBtn: field.fieldValue == 'false'}\">\n" +
    "                <input class=\"focusOn\"\n" +
    "					ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" value=\"false\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					N\n" +
    "				</div>\n" +
    "                <span>{{ 'LEGAL_NO_ACCEPT' | translate }}</span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/natural.html",
    "<div class=\"field row textfield natural\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" type=\"text\" \n" +
    "			class=\"text-field-input\" \n" +
    "			ng-model=\"field.fieldValue\" \n" +
    "			ng-model-options=\"{ debounce: 250 }\"  \n" +
    "			value=\"field.fieldValue\" \n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\">\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "    	<span ng-bind=\"field.fieldMatchValue\"></span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/password.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <input ng-focus=\"setActiveField(field._id, index, true)\" ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" type=\"password\" class=\"text-field-input\" ng-model=\"field.fieldValue\" ng-model-options=\"{ debounce: 250 }\"  value=\"{{field.fieldValue}}\"  ng-required=\"field.required\" ng-disabled=\"field.disabled\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/radio.html",
    "<div class=\"field row radio\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 key-to-option field=\"field\"\n" +
    "	 ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "	</div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "\n" +
    "        <div ng-repeat=\"option in field.fieldOptions\" class=\"row-fluid\">\n" +
    "            <label class=\"btn col-md-4 col-xs-12 col-sm-12\"\n" +
    "                    style=\"margin: 0.5em; padding-left:30px\"\n" +
    "                    ng-class=\"{activeBtn: field.fieldValue == field.fieldOptions[$index].option_value}\">\n" +
    "				<div class=\"letter\" style=\"float:left\">\n" +
    "					{{$index+1}}\n" +
    "				</div>\n" +
    "				<input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "                    type=\"radio\" class=\"focusOn\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "				    value=\"{{option.option_value}}\"\n" +
    "                    ng-model=\"field.fieldValue\"\n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\"\n" +
    "					ng-change=\"$root.nextField()\"/>\n" +
    "				<span ng-bind=\"option.option_value\"></span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/rating.html",
    "<div class=\"textfield field row\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "	    	{{field.title}}\n" +
    "	    	<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "	    </h3>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "\n" +
    "		<input-stars max=\"{{field.ratingOptions.steps}}\"\n" +
    "					 ng-init=\"field.fieldValue = 1\"\n" +
    "					 on-star-click=\"$root.nextField()\"\n" +
    "					 icon-full=\"{{field.ratingOptions.shape}}\"\n" +
    "					 icon-base=\"fa fa-3x\"\n" +
    "					 icon-empty=\"{{field.ratingOptions.shape}}\"\n" +
    "					 ng-model=\"field.fieldValue\"\n" +
    "					 ng-model-options=\"{ debounce: 250 }\"\n" +
    "					 ng-required=\"field.required\"\n" +
    "					 ng-disabled=\"field.disabled\"\n" +
    "					 on-enter-or-tab-key=\"nextField()\"\n" +
    "					 on-tab-and-shift-key=\"prevField()\"\n" +
    "					 ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "					 class=\"angular-input-stars focusOn\">\n" +
    "		</input-stars>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/statement.html",
    "<div class=\"statement field row\"\n" +
    "	 on-enter-or-tab-key=\"nextField()\"\n" +
    "	 on-tab-and-shift-key=\"prevField()\"\n" +
    "	 ng-focus=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"row field-title field-title\">\n" +
    "    	<div class=\"col-xs-1\"><i class=\"fa fa-quote-left fa-1\"></i></div>\n" +
    "    	<h2 class=\"text-left col-xs-9\">{{field.title}}</h2>\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"row field-title field-input\">\n" +
    "    	<p class=\"col-xs-12\" ng-if=\"field.description.length\">{{field.description}} </p>\n" +
    "    	<br>\n" +
    "	<div class=\"col-xs-offset-1 col-xs-11\">\n" +
    "        	<button class=\"btn focusOn\"\n" +
    "			    ng-style=\"{'font-size': '1.3em', 'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-focused=\"setActiveField(field._id, index, true)\"\n" +
    "                ng-click=\"$root.nextField()\">\n" +
    "            		{{ 'CONTINUE' | translate }} \n" +
    "        	</button>\n" +
    "	</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textarea.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "		<h3>\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "			<span class=\"required-error\" ng-show=\"!field.required\">{{ 'OPTIONAL' | translate }}</span>\n" +
    "		</h3>\n" +
    "		<small>{{ 'NEWLINE' | translate }}</small>\n" +
    "		<p>\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "	</div>\n" +
    "	<div class=\"col-xs-12 field-input\">\n" +
    "		<small style=\"font-size:0.6em;\">Press SHIFT+ENTER to add a newline</small>\n" +
    "		<textarea class=\"textarea focusOn\" type=\"text\"\n" +
    "			ng-model=\"field.fieldValue\"\n" +
    "			ng-model-options=\"{ debounce: 250 }\"\n" +
    "			ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "			value=\"{{field.fieldValue}}\"\n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "		    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "		    on-enter-or-tab-key=\"nextField()\"\n" +
    "		    on-tab-and-shift-key=\"prevField()\"\n" +
    "			style=\"border: none; border-left: lightgrey dashed 2px;\">\n" +
    "		</textarea>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "	<div class=\"btn btn-lg btn-default col-xs-12 col-sm-4 hidden-xs\"\n" +
    "		 style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "		<button ng-disabled=\"!field.fieldValue || forms.myForm.{{field.fieldType}}{{$index}}.$invalid\"\n" +
    "				ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "				ng-click=\"$root.nextField()\"\n" +
    "				class=\"btn col-sm-5 col-xs-5\">\n" +
    "\n" +
    "			{{ 'OK' | translate }} <i class=\"fa fa-check\"></i>\n" +
    "		</button>\n" +
    "		<div class=\"col-sm-3 col-xs-6\" style=\"margin-top:0.2em\">\n" +
    "			<small style=\"color:#ddd; font-size:70%\">\n" +
    "				{{ 'ENTER' | translate }}\n" +
    "			</small>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textfield.html",
    "<div class=\"textfield field row\"\n" +
    "	 ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "	<div class=\"col-xs-12 field-title row-fluid\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3 class=\"col-xs-12\">\n" +
    "    		<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "\n" +
    "			{{field.title}}\n" +
    "\n" +
    "    		<span class=\"required-error\" ng-show=\"!field.required\">\n" +
    "    			({{ 'OPTIONAL' | translate }})\n" +
    "    		</span>\n" +
    "    	</h3>\n" +
    "\n" +
    "		<p class=\"col-xs-12\">\n" +
    "			<small>{{field.description}}</small>\n" +
    "		</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\"\n" +
    "			name=\"{{field.fieldType}}{{index}}\"\n" +
    "            type=\"{{field.input_type}}\"\n" +
    "		   	ng-pattern=\"field.validateRegex\"\n" +
    "			placeholder=\"{{field.placeholder}}\"\n" +
    "			ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "            class=\"focusOn text-field-input\"\n" +
    "			ng-model=\"field.fieldValue\"\n" +
    "			ng-model-options=\"{ debounce: 250 }\"\n" +
    "			value=\"field.fieldValue\"\n" +
    "		    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "		   	on-enter-or-tab-key=\"nextField()\"\n" +
    "		   	on-tab-and-shift-key=\"prevField()\"\n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "	        aria-describedby=\"inputError2Status\">\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div ng-show=\"forms.myForm.{{field.fieldType}}{{index}}.$invalid && !!forms.myForm.{{field.fieldType}}{{index}}.$viewValue \" class=\"alert alert-danger\" role=\"alert\">\n" +
    "            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n" +
    "            <span class=\"sr-only\">Error:</span>\n" +
    "			<span ng-if=\"field.fieldType == 'email'\"> {{ 'ERROR_EMAIL_INVALID' | translate }} </span>\n" +
    "			<span ng-if=\"field.validateRegex\"> {{ 'ERROR_NOT_A_NUMBER' | translate }} </span>\n" +
    "			<span ng-if=\"field.fieldType == 'link'\"> {{ 'ERROR_URL_INVALID' | translate }} </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div>\n" +
    "	<div class=\"btn btn-lg btn-default col-xs-12 col-sm-4 hidden-xs\"\n" +
    "	 	style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "			<button ng-disabled=\"!field.fieldValue || forms.myForm.{{field.fieldType}}{{$index}}.$invalid\"\n" +
    "				ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-click=\"$root.nextField()\"\n" +
    "				class=\"btn col-sm-5 col-xs-5\">\n" +
    "\n" +
    "				{{ 'OK' | translate }} <i class=\"fa fa-check\"></i>\n" +
    "			</button>\n" +
    "			<div class=\"col-xs-6 col-sm-3\" style=\"margin-top:0.2em\">\n" +
    "				<small style=\"color:#ddd; font-size:70%\">\n" +
    "				{{ 'ENTER' | translate }}\n" +
    "				</small>\n" +
    "			</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/yes_no.html",
    "<div class=\"field row radio\"\n" +
    "	 	ng-click=\"setActiveField(field._id, index, true)\"\n" +
    "	 	on-tab-and-shift-key=\"prevField()\"\n" +
    "	 	key-to-truthy key-char-truthy=\"y\" key-char-falsey=\"n\" field=\"field\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "        <h3 class=\"row\">\n" +
    "			<small class=\"field-number\">\n" +
    "				{{index+1}}\n" +
    "				<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n" +
    "			</small>\n" +
    "			{{field.title}}\n" +
    "            <span class=\"required-error\" ng-show=\"!field.required\">\n" +
    "                {{ 'OPTIONAL' | translate }}\n" +
    "            </span>\n" +
    "        </h3>\n" +
    "        <p class=\"row\">\n" +
    "            {{field.description}}\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"row\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-7\"\n" +
    "		style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "                <input type=\"radio\" value=\"true\"\n" +
    "					class=\"focusOn\"\n" +
    "                    style=\"opacity: 0; margin-left: 0px;\"\n" +
    "					ng-model=\"field.fieldValue\"\n" +
    "				    ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "					ng-model-options=\"{ debounce: 250 }\"\n" +
    "					ng-required=\"field.required\"\n" +
    "					ng-change=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\" />\n" +
    "				<div class=\"letter\">\n" +
    "					{{ 'Y' | translate }}\n" +
    "				</div>\n" +
    "				<span>{{ 'YES' | translate }}</span>\n" +
    "				<i ng-show=\"field.fieldValue === 'true'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "            </label>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" style=\"margin-top: 10px;\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-7\"\n" +
    "		        style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "\n" +
    "                <input type=\"radio\" value=\"false\"\n" +
    "			        style=\"opacity:0; margin-left:0px;\"\n" +
    "			        ng-model=\"field.fieldValue\"\n" +
    "			        ng-model-options=\"{ debounce: 250 }\"\n" +
    "			        ng-required=\"field.required\"\n" +
    "			        ng-change=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\"/>\n" +
    "\n" +
    "			<div class=\"letter\">\n" +
    "				{{ 'N' | translate }}\n" +
    "			</div>\n" +
    "			<span>{{ 'NO' | translate }}</span>\n" +
    "				<i ng-show=\"field.fieldValue === 'false'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/form/submit-form.client.view.html",
    "<section class=\"overlay submitform\" ng-if=\"loading || (!myform.submitted && !myform.startPage.showStart)\"></section>\n" +
    "\n" +
    "<!-- Start Page View -->\n" +
    "\n" +
    "<div ng-show=\"!myform.submitted && myform.startPage.showStart\"\n" +
    "class=\"form-submitted\"\n" +
    "style=\"padding-top: 35vh;\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-xs-12 text-center\" style=\"overflow-wrap: break-word;\">\n" +
    "<h1 style=\"font-weight: 400; nont-size: 25px;\">\n" +
    "{{myform.startPage.introTitle}}\n" +
    "</h1>\n" +
    "</div>\n" +
    "<div class=\"col-xs-10 col-xs-offset-1 text-center\" style=\"overflow-wrap: break-word;\">\n" +
    "<p style=\"color: grey; font-weight: 100; font-size: 16px;\">\n" +
    "{{myform.startPage.introParagraph}}\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row form-actions text-center\" style=\"padding: 5px 25px 5px 25px;\">\n" +
    "<button ng-click=\"exitStartPage()\" class=\"btn\" type=\"button\"\n" +
    "ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "<span style=\"font-size: 1.6em;\">\n" +
    "{{myform.startPage.introButtonText}}\n" +
    "</span>\n" +
    "</button>\n" +
    "</div>\n" +
    "<div class=\"row form-actions\" style=\"padding-bottom:3em; padding-left: 1em; padding-right: 1em;\">\n" +
    "<p ng-repeat=\"button in myform.startPage.buttons\" class=\"text-center\" style=\"display:inline;\">\n" +
    "<button class=\"btn\" style=\"background-color:rgb(156, 226, 235)\" type=\"button\" ng-style=\"{'background-color':button.bgColor, 'color':button.color}\">\n" +
    "\n" +
    "<a href=\"{{button.url}}\"\n" +
    "style=\"font-size: 1.6em; text-decoration: none;\"\n" +
    "ng-style=\"{'color':button.color}\">\n" +
    "{{button.text}}\n" +
    "</a>\n" +
    "</button>\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Form Fields View -->\n" +
    "<div class=\"form-fields\" ng-show=\"!myform.submitted && !myform.startPage.showStart\"\n" +
    "    ng-style=\"{ 'border-color': myform.design.colors.buttonTextColor }\">\n" +
    "	<div class=\"row\">\n" +
    "		<form name=\"forms.myForm\"\n" +
    "		novalidate\n" +
    "		class=\"submission-form col-sm-12 col-md-offset-1 col-md-10\">\n" +
    "\n" +
    "		<div ng-repeat=\"field in myform.form_fields\"\n" +
    "		ng-if=\"!field.deletePreserved\"\n" +
    "		data-index=\"{{$index}}\"\n" +
    "		data-id=\"{{field._id}}\"\n" +
    "		ng-class=\"{activeField: selected._id == field._id }\"\n" +
    "		class=\"row field-directive\">\n" +
    "\n" +
    "			<field-directive field=\"field\" design=\"myform.design\" index=\"$index\" forms=\"forms\">\n" +
    "			</field-directive>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		</form>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row form-actions\" id=\"submit_field\"\n" +
    "	ng-class=\"{activeField: selected._id == 'submit_field' }\"\n" +
    "	ng-style=\"{ 'background-color':myform.design.colors.buttonColor}\"\n" +
    "	style=\"border-top: 1px solid #ddd; margin-right: -13%; margin-left: -13%; margin-top: 30vh; height: 100vh\">\n" +
    "\n" +
    "	<div class=\"col-xs-12 text-left\"\n" +
    "		 style=\"background-color:#990000; color:white;\"\n" +
    "		 ng-if=\"forms.myForm.$invalid\">\n" +
    "         {{ 'COMPLETING_NEEDED' | translate:translateAdvancementData }}\n" +
    "	</div>\n" +
    "\n" +
    "	<button ng-if=\"!forms.myForm.$invalid\"\n" +
    "		class=\"Button btn col-sm-2 col-xs-8 focusOn\"\n" +
    "		v-busy=\"loading\" v-busy-label=\"Please wait\" v-pressable\n" +
    "		ng-disabled=\"loading || forms.myForm.$invalid\"\n" +
    "		ng-click=\"submitForm()\"\n" +
    "		on-enter-key=\"submitForm()\"\n" +
    "		on-enter-key-disabled=\"loading || forms.myForm.$invalid\"\n" +
    "		ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "		style=\"font-size: 1.6em; margin-left: 1em; margin-top: 1em;\">\n" +
    "\n" +
    "		{{ 'SUBMIT' | translate }}\n" +
    "	</button>\n" +
    "\n" +
    "	<button ng-if=\"forms.myForm.$invalid\"\n" +
    "			class=\"Button btn col-sm-2 col-xs-8 focusOn\"\n" +
    "			ng-click=\"goToInvalid()\"\n" +
    "			on-enter-key=\"goToInvalid()\"\n" +
    "			on-enter-key-disabled=\"!forms.myForm.$invalid\"\n" +
    "			style=\"font-size: 1.6em; margin-left: 1em; margin-top: 1em; background-color:#990000; color:white\">\n" +
    "		{{ 'REVIEW' | translate }}\n" +
    "	</button>\n" +
    "\n" +
    "	<div class=\"col-sm-2 hidden-xs\" style=\"font-size: 75%; margin-top:3.25em\">\n" +
    "		<small>\n" +
    "			{{ 'ENTER' | translate }}\n" +
    "		</small>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<section ng-if=\"!myform.hideFooter\" class=\"navbar navbar-fixed-bottom\"\n" +
    "        ng-style=\"{ 'background-color':myform.design.colors.buttonColor, 'padding-top': '15px', 'border-top': '2px '+ myform.design.colors.buttonTextColor +' solid', 'color':myform.design.colors.buttonTextColor}\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-5 col-md-6 col-xs-5\" ng-show=\"!myform.submitted\">\n" +
    "                        <p class=\"lead\">{{ 'ADVANCEMENT' | translate:translateAdvancementData }}</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-md-offset-0 col-sm-offset-2 col-sm-3 col-xs-offset-1 col-xs-6 row\">\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"!authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms\" class=\"btn\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "\n" +
    "                            {{ 'CREATE_FORM' | translate }}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms/{{myform._id}}/admin/create\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            class=\"btn\">\n" +
    "                            {{ 'EDIT_FORM' | translate }}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-sm-10 col-md-offset-0 col-sm-offset-2 col-xs-12 row\">\n" +
    "                        <button class=\"btn btn-lg col-xs-6\" id=\"focusDownButton\"\n" +
    "				            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"nextField()\"\n" +
    "				            ng-disabled=\"selected.index > myform.form_fields.length-1\">\n" +
    "                        	<i class=\"fa fa-chevron-down\"></i>\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-lg col-xs-6\" id=\"focusUpButton\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"prevField()\"\n" +
    "                            ng-disabled=\"selected.index == 0\">\n" +
    "                        	<i class=\"fa fa-chevron-up\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<!-- End Page View -->\n" +
    "<div ng-if=\"myform.submitted && !loading\" class=\"form-submitted\"\n" +
    "    ng-style=\"{'color':myform.design.colors.buttonTextColor}\"\n" +
    "    style=\"padding-top: 5vh;\">\n" +
    "\n" +
    "    <div class=\"field row text-center\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-6 col-md-offset-3 text-center\">{{ 'FORM_SUCCESS' | translate }}</div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-actions\">\n" +
    "        <p class=\"text-center\">\n" +
    "            <button ng-click=\"reloadForm()\" class=\"btn\" type=\"button\"\n" +
    "                ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "                <span style=\"font-size: 1.6em;\"> {{ 'BACK_TO_FORM' | translate }}</span>\n" +
    "            </button>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/submit-form.client.view.html",
    "<section class=\"public-form\" ng-style=\"{ 'background-color': myform.design.colors.backgroundColor }\">\n" +
    "	<submit-form-directive myform=\"myform\"></submit-form-directive>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

},{}],3:[function(require,module,exports){
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


},{"./dist/form.js":1,"./package.json":4}],4:[function(require,module,exports){
module.exports={
  "name": "angular-tellform",
  "description": "Frontend UI for Tellform",
  "version": "1.0.0",
  "homepage": "https://github.com/tellform/angular-tellform",
  "authors": [
    "David Baldwynn <polydaic@gmail.com> (http://baldwynn.me)",
    "Samuel Laulhau <sam@lalop.co> (https://samuellaulhau.fr)"
  ],
  "private": true,
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/tellform/angular-tellform.git"
  },
  "engines": {
    "node": "~5.0.0",
    "npm": "~2.11.2"
  },
  "scripts": {

    "postinstall": "node node_modules/.bin/bower install --config.interactive=false; node node_modules/.bin/grunt build"
  },
  "dependencies": {
    "bower": "~1.6.5",
    "grunt": "~0.4.1",
    "grunt-cli": "~0.1.13",
    "grunt-contrib-cssmin": "~0.14.0",
    "grunt-contrib-uglify": "~0.11.0",
    "grunt-html2js": "~0.3.5",
    "grunt-ng-annotate": "~1.0.1",
    "jit-grunt": "^0.10.0",
    "jquery": "^2.2.3",
    "jquery-ui": "^1.10.5",
    "lodash": "~4.11.1",
    "ng-file-upload": "~10.0.2",
    "ui-select": "~0.16.1",
    "v-button": "git+https://git@github.com/whitef0x0/v-button.git"
  },
  "devDependencies": {
    "grunt-browserify": "^5.0.0",
    "http-server": "^0.9.0"
  },
  "browser": {
    "jquery": "./node_modules/jquery/dist/jquery.js",
    "jquery-ui-sortable": "./node_modules/jquery-ui/jquery-ui.js",
    "angular": "./node_modules/angular/angular.js",
    "ng-file-upload": "./node_modules/ng-file-upload/dist/ng-file-upload-all.js",
    "angular-animate": "./node_modules/angular-animate/angular-animate.min.js",
    "angular-bootstrap": "./node_modules/angular-bootstrap/ui-bootstrap.min.js",
    "angular-busy": "./node_modules/angular-busy/dist/angular-busy.min.js",
    "angular-input-stars": "./node_modules/angular-input-stars/angular-input-stars.js",
    "angular-resource": "./node_modules/angular-resource/angular-resource.min.js",
    "angular-sanitize": "./node_modules/angular-sanitize/angular-sanitize.min.js",
    "angular-scroll": "./node_modules/angular-scroll/angular-scroll.min.js",
    "angular-strap": "./node_modules/angular-strap/dist/angular-strap.min.js",
    "angular-ui-date": "./node_modules/angular-ui-date/src/date.js",
    "angular-ui-router": "./node_modules/angular-ui-router/release/angular-ui-router.min.js",
    "angular-ui-utils": "./node_modules/angular-ui-utils/publish.js"
  },
  "browserify-shim": {
    "jquery": {
      "exports": "jQuery"
    },
    "jquery-ui": {
      "depends": "jquery",
      "exports": null
    },
    "angular": {
      "exports": "angular",
      "depends": "jQuery"
    },
    "ng-file-upload": {
      "exports": "angular.module('ngFileUpload').name"
    },
    "angular-animate": {
      "exports": "angular.module('ngAnimate').name"
    },
    "angular-bootstrap": {
      "exports": "angular.module('ui.bootstrap').name"
    },
    "angular-busy": {
      "exports": "angular.module('cgBusy').name"
    },
    "angular-input-stars": {
      "exports": "angular.module('angular-input-stars').name"
    },
    "angular-resource": {
      "exports": "angular.module('ngResource').name"
    },
    "angular-sanitize": {
      "exports": "angular.module('ngSanitize').name"
    },
    "angular-scroll": {
      "exports": "angular.module('duScroll').name"
    },
    "angular-strap": {
      "exports": "angular.module('mgcrea.ngStrap').name"
    },
    "angular-ui-date": {
      "depends": [
        "angular",
        "jquery-ui"
      ],
      "exports": "null"
    },
    "angular-ui-router": {
      "depends": [
        "angular"
      ],
      "exports": null
    }
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  }
}

},{}]},{},[3,2]);
