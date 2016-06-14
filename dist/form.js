'use strict';

// SubmitForm controller
// angular.module('forms').controller('SubmitFormController', ['$scope', '$rootScope', '$state', 'myForm', 'Auth',
// 	function($scope, $rootScope, $state, myForm, Auth) {
// 		$scope.authentication = Auth;
// 		$scope.myform = myForm;
//
// 		if(!$scope.myform.isLive){
// 			// Show navbar if form is not public AND user IS loggedin
// 			if($scope.authentication.isAuthenticated()){
// 				$scope.hideNav = $rootScope.hideNav = false;
// 			}
// 			// Redirect if  form is not public user IS NOT loggedin
// 			else {
// 				$scope.hideNav = $rootScope.hideNav = true;
// 				$state.go('access_denied');
// 			}
// 		}else{
// 			$scope.hideNav = $rootScope.hideNav = true;
// 		}
//
// 	}
// ]);

// 'use strict';
//
// angular.module('forms').directive('fieldIconDirective', function() {
//
//     return {
//         template: '<i class="{{typeIcon}}"></i>',
//         restrict: 'E',
//         scope: {
//             typeName: '@'
//         },
//         controller: ["$scope", function($scope){
//         	var iconTypeMap = {
// 				'textfield': 'fa fa-pencil-square-o',
// 				'dropdown': 'fa fa-th-list',
// 				'date': 'fa fa-calendar',
// 				'checkbox': 'fa fa-check-square-o',
// 				'radio': 'fa fa-dot-circle-o',
// 				'email': 'fa fa-envelope-o',
// 				'textarea': 'fa fa-pencil-square',
// 				'legal': 'fa fa-legal',
// 				'file': 'fa fa-cloud-upload',
// 				'rating': 'fa fa-star-half-o',
// 				'link': 'fa fa-link',
// 				'scale': 'fa fa-sliders',
// 				'stripe': 'fa fa-credit-card',
// 				'statement': 'fa fa-quote-left',
// 				'yes_no': 'fa fa-toggle-on',
// 				'number': 'fa fa-slack'
// 			};
// 			$scope.typeIcon = iconTypeMap[$scope.typeName];
//         }],
//     };
// });
// 'use strict';
//
// // coffeescript's for in loop
// var __indexOf = [].indexOf || function(item) {
//     for (var i = 0, l = this.length; i < l; i++) {
//         if (i in this && this[i] === item) return i;
//     }
//     return -1;
// };
//
// angular.module('forms').directive('fieldDirective', ['$http', '$compile', '$rootScope', '$templateCache',
//     function($http, $compile, $rootScope, $templateCache) {
//
//     var getTemplateUrl = function(fieldType) {
//         var type = fieldType;
//         var templateUrl = 'modules/forms/base/views/directiveViews/field/';
//         var supported_fields = [
//             'textfield',
//             'textarea',
//             'date',
//             'dropdown',
//             'hidden',
//             'password',
//             'radio',
//             'legal',
//             'statement',
//             'rating',
//             'yes_no',
//             'number',
//             'natural'
//         ];
// 	if (__indexOf.call(supported_fields, type) >= 0) {
//             templateUrl = templateUrl+type+'.html';
//         }
//
//    		return $templateCache.get(templateUrl);
//     };
//
//     return {
//         template: '<div>{{field.title}}</div>',
//         restrict: 'E',
//         scope: {
//             field: '=',
//             required: '&',
//             design: '=',
//             index: '=',
//         },
//         link: function(scope, element) {
//             scope.setActiveField = $rootScope.setActiveField;
//
//             //Set format only if field is a date
//             if(scope.field.fieldType === 'date'){
//                 scope.dateOptions = {
//                     changeYear: true,
//                     changeMonth: true,
//                     altFormat: 'mm/dd/yyyy',
//                     yearRange: '1900:-0',
//                     defaultDate: 0,
//                 };
//             }
//
//             var fieldType = scope.field.fieldType;
//
// 			if(scope.field.fieldType === 'number' || scope.field.fieldType === 'textfield' || scope.field.fieldType === 'email' || scope.field.fieldType === 'link'){
// 				switch(scope.field.fieldType){
// 					case 'textfield':
// 						scope.field.input_type = 'text';
// 						break;
// 					case 'email':
// 						scope.field.input_type = 'email';
// 						scope.field.placeholder = 'joesmith@example.com';
// 						break;
// 					case 'number':
//                         scope.field.input_type = 'number';
//                         break;
//                     default:
// 						scope.field.input_type = 'url';
// 						scope.field.placeholder = 'http://example.com';
// 						break;
// 				}
// 				fieldType = 'textfield';
// 			}
//             var template = getTemplateUrl(fieldType);
//            	element.html(template).show();
//             $compile(element.contents())(scope);
//         },
//     };
// }]);
//
// 'use strict';
//
// angular.module('forms').directive('onEnterKey', ['$rootScope', function($rootScope){
// 	return {
// 		restrict: 'A',
// 		link: function($scope, $element, $attrs) {
// 			$element.bind('keydown keypress', function(event) {
// 				var keyCode = event.which || event.keyCode;
// 				console.log($attrs.onEnterKey);
// 				if(keyCode === 13) {
// 					$rootScope.$apply(function() {
// 						$rootScope.$eval($attrs.onEnterKey);
// 					});
//
// 					event.preventDefault();
// 				}
// 			});
// 		}
// 	};
// }]);
//
// 'use strict';
//
// angular.module('forms').directive('onFinishRender', ["$rootScope", "$timeout", function ($rootScope, $timeout) {
//     return {
//         restrict: 'A',
//         link: function (scope, element, attrs) {
//
//             //Don't do anything if we don't have a ng-repeat on the current element
//             if(!element.attr('ng-repeat') && !element.attr('data-ng-repeat')){
//                 return;
//             }
//
//             var broadcastMessage = attrs.onFinishRender || 'ngRepeat';
//
//             if(scope.$first && !scope.$last) {
//                 scope.$evalAsync(function () {
//                     $rootScope.$broadcast(broadcastMessage+' Started');
//                 });
//             }else if(scope.$last) {
//             	scope.$evalAsync(function () {
//                     // console.log(broadcastMessage+'Finished');
//             	    $rootScope.$broadcast(broadcastMessage+' Finished');
//                 });
//             }
//         }
//     };
// }]);
//
// 'use strict';
//
// angular.module('forms').directive('submitFormDirective', ['$http', 'TimeCounter', '$filter', '$rootScope', 'Auth',
//     function ($http, TimeCounter, $filter, $rootScope, Auth) {
//         return {
//             templateUrl: 'modules/forms/base/views/directiveViews/form/submit-form.client.view.html',                restrict: 'E',
//             scope: {
//                 myform:'='
//             },
//             controller: ["$document", "$window", "$scope", function($document, $window, $scope){
//                 $scope.authentication = $rootScope.authentication;
// 		        $scope.noscroll = false;
//                 $scope.forms = {};
//                 $scope.form_fields_count = $scope.myform.visible_form_fields.filter(function(field){
//                     if(field.fieldType === 'statement' || field.fieldType === 'rating'){
//                         return false;
//                     }
//                     return true;
//                 }).length;
//
//                 $scope.reloadForm = function(){
//                     //Reset Form
//                     $scope.myform.submitted = false;
//                     $scope.myform.form_fields = _.chain($scope.myform.visible_form_fields).map(function(field){
//                             field.fieldValue = '';
//                             return field;
//                         }).value();
//
// 					$scope.loading = false;
//                     $scope.error = '';
//
//                     $scope.selected = {
//                         _id: '',
//                         index: 0
//                     };
//                     $scope.setActiveField($scope.myform.visible_form_fields[0]._id, 0, false);
//
//                     console.log($scope.selected);
//                     //Reset Timer
//                     TimeCounter.restartClock();
//                 };
//
// 				$window.onscroll = function(){
//             		$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
// 					var elemBox = document.getElementsByClassName('activeField')[0].getBoundingClientRect();
// 					$scope.fieldTop = elemBox.top;
// 					$scope.fieldBottom = elemBox.bottom;
//
//                     //console.log($scope.forms.myForm);
//
//                     if(!$scope.noscroll){
//                         //Focus on submit button
//                         if( $scope.selected.index === $scope.myform.form_fields.length-1 && $scope.fieldBottom < 200){
//                             var field_index = $scope.selected.index+1;
//                             var field_id = 'submit_field';
//                             $scope.setActiveField(field_id, field_index, false);
//                         }
//                         //Focus on field above submit button
//                         else if($scope.selected.index === $scope.myform.form_fields.length){
//                             if($scope.fieldTop > 200){
//                                 var field_index = $scope.selected.index-1;
//                                 var field_id = $scope.myform.form_fields[field_index]._id;
//                                 $scope.setActiveField(field_id, field_index, false);
//                             }
//                         }else if( $scope.fieldBottom < 0){
//                             var field_index = $scope.selected.index+1;
//                             var field_id = $scope.myform.form_fields[field_index]._id;
//                             $scope.setActiveField(field_id, field_index, false);
//                         }else if ( $scope.selected.index !== 0 && $scope.fieldTop > 0) {
//                             var field_index = $scope.selected.index-1;
//                             var field_id = $scope.myform.form_fields[field_index]._id;
//                             $scope.setActiveField(field_id, field_index, false);
//                         }
//                         //console.log('$scope.selected.index: '+$scope.selected.index);
// 					    //console.log('scroll pos: '+$scope.scrollPos+' fieldTop: '+$scope.fieldTop+' fieldBottom: '+$scope.fieldBottom);
//             		    $scope.$apply();
//                     }
//         		};
//
//                 /*
//                 ** Field Controls
//                 */
//                 $scope.setActiveField = $rootScope.setActiveField = function(field_id, field_index, animateScroll) {
//                     if($scope.selected === null || $scope.selected._id === field_id){
// 						console.log('not scrolling');
// 						console.log($scope.selected);
// 						return;
// 		    		}
//                     console.log('field_id: '+field_id);
//                     console.log('field_index: '+field_index);
//                     console.log($scope.selected);
//
//                     $scope.selected._id = field_id;
//                     $scope.selected.index = field_index;
//
//                     if(animateScroll){
//                         $scope.noscroll=true;
//                         setTimeout(function() {
//                             $document.scrollToElement(angular.element('.activeField'), -10, 200).then(function(){
//                                 $scope.noscroll = false;
//                                 document.querySelectorAll('.activeField .focusOn')[0].focus();
//                             });
//                         }, 20);
//                     }
//                 };
//
//                 $rootScope.nextField = $scope.nextField = function(){
//                     console.log('nextfield');
//                     //console.log($scope.selected.index);
// 					//console.log($scope.myform.form_fields.length-1);
// 					if($scope.selected.index < $scope.myform.form_fields.length-1){
//                         var selected_index = $scope.selected.index+1;
//                         var selected_id = $scope.myform.form_fields[selected_index]._id;
//                         $rootScope.setActiveField(selected_id, selected_index, true);
//                     } else if($scope.selected.index === $scope.myform.form_fields.length-1) {
// 						var selected_index = $scope.selected.index+1;
// 						var selected_id = 'submit_field';
// 						$rootScope.setActiveField(selected_id, selected_index, true);
// 					}
//                 };
//
//                 $rootScope.prevField = $scope.prevField = function(){
//                     if($scope.selected.index > 0){
//                         var selected_index = $scope.selected.index - 1;
//                         var selected_id = $scope.myform.form_fields[selected_index]._id;
//                         $scope.setActiveField(selected_id, selected_index, true);
//                     }
//                 };
//
//                 /*
//                 ** Form Display Functions
//                 */
//                 $scope.exitStartPage = function(){
//                     $scope.myform.startPage.showStart = false;
//                     if($scope.myform.form_fields.length > 0){
//                         $scope.selected._id = $scope.myform.form_fields[0]._id;
//                     }
//                 };
//
//                 $scope.submitForm = function(){
//                     var _timeElapsed = TimeCounter.stopClock();
// 					$scope.loading = true;
//                     var form = _.cloneDeep($scope.myform);
//                     form.timeElapsed = _timeElapsed;
//
//                     form.percentageComplete = $filter('formValidity')($scope.myform)/$scope.myform.visible_form_fields.length*100;
//                     delete form.visible_form_fields;
//
//                     $scope.submitPromise = $http.post('/forms/'+$scope.myform._id, form)
//                         .success(function(data, status, headers){
//                             console.log('form submitted successfully');
//                             setTimeout(function() {
//                                 $scope.myform.submitted = true;
//                                 $scope.loading = false;
//                             }, 20);
//                         })
//                         .error(function(error){
//                             setTimeout(function(){
//                                 $scope.loading = false;
//                                 console.log(error);
//                                 $scope.error = error.message;
//                             }, 20);
//                         });
//                 };
//
//                 //Load our form when the page is ready
//                 //angular.element(document).ready(function() {
//                     $scope.reloadForm();
//                 //});
//
//             }]
//         };
//     }
// ]);

'use strict';

//Forms service used for communicating with the forms REST endpoints
angular.module('forms').service('CurrentForm',
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
angular.module('forms').service('FormFields', [
	function() {
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
	}
		
]);

'use strict';

//Forms service used for communicating with the forms REST endpoints
angular.module('forms').factory('Forms', ['$resource', 'FORM_URL',
	function($resource, FORM_URL) {
		return $resource(FORM_URL, {
			formId: '@_id'
		}, {
			'query' : {
				method: 'GET',
				isArray: true,
				//DAVID: TODO: Do we really need to get visible_form_fields for a Query?
				// transformResponse: function(data, header) {
				// 	var forms = angular.fromJson(data);
				// 	angular.forEach(forms, function(form, idx) {
				// 		form.visible_form_fields = _.filter(form.form_fields, function(field){
				// 			return (field.deletePreserved === false);
				// 		});
				// 	});
		  //         return forms;
		  //       }
			},
			'get' : {
				method: 'GET',
				transformResponse: function(data, header) {
		          	var form = angular.fromJson(data);
		          	console.log(form);

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

angular.module('forms').service('TimeCounter', [
	function(){
		var _startTime, _endTime, that=this;

		this.timeSpent = 0;

		this.restartClock = function(){
			_startTime = Date.now();
			_endTime = _startTime;
			// console.log('Clock Started');
		};

		this.stopClock = function(){
			if(_startTime){
				_endTime = Date.now();
				that.timeSpent = Math.abs(_endTime.valueOf() - _startTime.valueOf())/1000;
				// console.log('Clock Ended');
				return that.timeSpent;
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
  $templateCache.put("modules/forms/base/views/directiveViews/entryPage/startPage.html",
    "<div class=\"field row text-center\">\n" +
    "    <div class=\"col-xs-12 text-center\">\n" +
    "        <h1>{{pageData.introTitle}}</h1>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-10 col-xs-offset-1 text-left\">\n" +
    "        <p style=\"color:#ddd;\">{{pageData.introParagraph}}</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    " <div class=\"row form-actions\" style=\"padding-bottom:3em; padding-left: 1em; padding-right: 1em;\">\n" +
    "    <p ng-repeat=\"button in pageData.buttons\" class=\"text-center\" style=\"display:inline;\">\n" +
    "        <button class=\"btn btn-info\" type=\"button\" ng-style=\"{'background-color':button.bgColor, 'color':button.color}\">\n" +
    "            <a href=\"{{button.url}}\" style=\"font-size: 1.6em; text-decoration: none; color: inherit;\" > \n" +
    "                {{button.text}}\n" +
    "            </a>\n" +
    "        </button>\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div class=\"row form-actions\">\n" +
    "    <p class=\"col-xs-3 col-xs-offset-3 text-center\">\n" +
    "        <button class=\"btn btn-info\" type=\"button\">\n" +
    "            <a ng-click=\"exitpageData()\" style=\"color:white; font-size: 1.6em; text-decoration: none;\">Continue to Form</a>\n" +
    "        </button>\n" +
    "    </p>\n" +
    "</div>");
  $templateCache.put("modules/forms/base/views/directiveViews/field/date.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "    		<span class=\"fa fa-angle-double-right\"></span> \n" +
    "    		{{field.title}} \n" +
    "    		<span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span>\n" +
    "    	</h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"control-group input-append\">\n" +
    "            <input ng-focus=\"setActiveField(field._id, index, true)\" \n" +
    "                ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" \n" +
    "                ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "                ui-date=\"dateOptions\" \n" +
    "                ng-model=\"field.fieldValue\" \n" +
    "                ng-model-options=\"{ debounce: 250 }\" \n" +
    "                ng-required=\"field.required\" \n" +
    "                ng-disabled=\"field.disabled\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/dropdown.html",
    "<div class=\"field row dropdown\" ng-click=\"setActiveField(field._id, index, true)\" ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "	    	<span class=\"fa fa-angle-double-right\"></span> \n" +
    "	    	{{field.title}} \n" +
    "	    	<span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span>\n" +
    "	    </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input \">\n" +
    "		<ui-select ng-model=\"field.fieldValue\" \n" +
    "                theme=\"selectize\"\n" +
    "				ng-model-options=\"{ debounce: 250 }\"  \n" +
    "				ng-required=\"field.required\" \n" +
    "				ng-disabled=\"field.disabled\"\n" +
    "				ng-focus=\"setActiveField(field._id, index, true)\">\n" +
    "			<ui-select-match placeholder=\"Type or select an option\">\n" +
    "				{{$select.selected.option_value}}\n" +
    "			</ui-select-match>\n" +
    "			<ui-select-choices \n" +
    "                repeat=\"option in field.fieldOptions | filter: $select.search\"\n" +
    "				ng-class=\"{'active': option.option_value === field.fieldValue }\">\n" +
    "				<span ng-bind-html=\"option.option_value | highlight: $select.search\"></span>\n" +
    "			</ui-select-choices>\n" +
    "        </ui-select>    \n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/file.html",
    "<div class=\"field row\" ng-if=\"form.autofillPDFs\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-sm-4 field-title\">\n" +
    "        <h5>{{field.title}}     <span class=\"required-error\" ng-show=\"field.required && field.fieldValue == 0\">(* required)</span></h5>\n" +
    "    </div>\n" +
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
    "                    <i class=\"glyphicon glyphicon-trash\"  ></i> \n" +
    "                    Delete\n" +
    "                </button>\n" +
    "\n" +
    "                <button type=\"button\" ng-if=\"field.fileLoading\" title=\"Abort ongoing upload\" class=\"btn btn-default\" ng-click=\"cancelFileUpload(field)\">\n" +
    "                    <i class=\"glyphicon glyphicon-ban-circle\"></i> \n" +
    "                    Cancel\n" +
    "                </button>\n" +
    "\n" +
    "                <div class=\"btn btn-success btn-file\" ngf-select ngf-change=\"uploadPDF($files)\" ng-if=\"!field.file\"> \n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>\n" +
    "                    Upload your File\n" +
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
    "<div class=\"field row radio legal\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">    	\n" +
    "    	<h3>{{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3>\n" +
    "    	<br>\n" +
    "    	<p style=\"color:#ddd;\">{{field.description}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input container\">\n" +
    "		<div class=\"row-fluid\">\n" +
    "            <label class=\"btn col-xs-5\">\n" +
    "                <input ng-focus=\"setActiveField(field._id, index, true)\" \n" +
    "                    class=\"focusOn\"\n" +
    "                    ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" \n" +
    "                    type=\"radio\" value=\"true\" \n" +
    "                    ng-model=\"field.fieldValue\" \n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\" \n" +
    "                    ng-click=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\"/>\n" +
    "                <span> I accept </span>\n" +
    "            </label>\n" +
    "            <label class=\"btn col-xs-5 col-xs-offset-1\">\n" +
    "                <input ng-focus=\"setActiveField(field._id, index, true)\" \n" +
    "                    ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" \n" +
    "                    type=\"radio\" value=\"false\" \n" +
    "                    ng-model=\"field.fieldValue\" \n" +
    "                    ng-model-options=\"{ debounce: 250 }\"\n" +
    "                    ng-required=\"field.required\" \n" +
    "                    ng-click=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\"/>\n" +
    "                <span>I don't accept </span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "       \n" +
    "    </div>\n" +
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
    "<div class=\"field row radio\" ng-click=\"setActiveField(field._id, index, true)\" ng-if=\"field.fieldOptions.length > 0\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div ng-repeat=\"option in field.fieldOptions\" class=\"row-fluid\">\n" +
    "            <label class=\"btn col-xs-4\" \n" +
    "                    style=\"margin: 0.5em; padding-left:30px\" \n" +
    "                    ng-click=\"$root.nextField()\"\n" +
    "                    ng-class=\"{activeBtn: field.fieldValue == field.fieldOptions[$index].option_id}\">\n" +
    "                <input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" \n" +
    "                    type=\"radio\" class=\"focusOn\"\n" +
    "                    value=\"{{option.option_value}}\" \n" +
    "                    ng-model=\"field.fieldValue\" \n" +
    "                    ng-model-options=\"{ debounce: 250 }\" \n" +
    "                    ng-required=\"field.required\"\n" +
    "                    ng-disabled=\"field.disabled\" />\n" +
    "                \n" +
    "                <span ng-bind=\"option.option_value\"></span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/rating.html",
    "<div class=\"textfield field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "	    <h3>\n" +
    "	    	<span class=\"fa fa-angle-double-right\"></span> \n" +
    "	    	{{field.title}} \n" +
    "	    	<span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span>\n" +
    "	    </h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input-stars max=\"5\" ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "			icon-full=\"fa-star\" \n" +
    "			icon-base=\"fa fa-3x\" \n" +
    "			icon-empty=\"fa-star-o\"\n" +
    "			ng-init=\"field.fieldValue = 1\"\n" +
    "			ng-model=\"field.fieldValue\" \n" +
    "			ng-model-options=\"{ debounce: 250 }\"  \n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "			class=\"angular-input-stars focusOn\">\n" +
    "		</input-stars>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/statement.html",
    "<div class=\"statement field row\">\n" +
    "    <div class=\"row field-title field-title\">\n" +
    "    	<div class=\"col-xs-1\"><i class=\"fa fa-quote-left fa-1\"></i></div>\n" +
    "    	<h2 class=\"text-left col-xs-9\">{{field.title}} </h2>\n" +
    "    </div>\n" +
    "    <div class=\"row field-title field-input\">\n" +
    "    	<p class=\"col-xs-12\" ng-if=\"field.description.length\">{{field.description}} </p>\n" +
    "    	<br>\n" +
    "	<div class=\"col-xs-offset-1 col-xs-11\">\n" +
    "        	<button class=\"btn focusOn\" \n" +
    "			    ng-style=\"{'font-size': '1.3em', 'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-focused=\"setActiveField(field._id, index, true)\"\n" +
    "                ng-click=\"$root.nextField()\">\n" +
    "            		Continue \n" +
    "        	</button>\n" +
    "	</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textarea.html",
    "<div class=\"field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\"><h3><span class=\"fa fa-angle-double-right\"></span> {{field.title}} <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">*(required)</span></h3></div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <textarea class=\"textarea\" type=\"text\" \n" +
    "        	ng-model=\"field.fieldValue\" \n" +
    "        	ng-model-options=\"{ debounce: 250 }\"  \n" +
    "        	ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "            value=\"{{field.fieldValue}}\" \n" +
    "        	class=\"focusOn\"\n" +
    "            ng-required=\"field.required\" \n" +
    "        	ng-disabled=\"field.disabled\"\n" +
    "        	ng-focus=\"setActiveField(field._id, index, true)\">\n" +
    "        </textarea>       \n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 row\">\n" +
    "	<div class=\"btn btn-lg btn-default row-fluid\"\n" +
    "        style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "		\n" +
    "		<button ng-disabled=\"!field.fieldValue\"\n" +
    "                ng-click=\"$root.nextField()\"\n" +
    "                ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                class=\"btn col-sm-5 col-xs-5\">\n" +
    "\n" +
    "        	OK <i class=\"fa fa-check\"></i>\n" +
    "        </button>\n" +
    "		<div class=\"col-sm-3 col-xs-6\" style=\"margin-top:0.2em\">\n" +
    "        	<small style=\"color:#ddd; font-size:70%\">\n" +
    "            	press ENTER\n" +
    "         	</small>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/textfield.html",
    "<div class=\"textfield field row\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "    	<h3>\n" +
    "    		<span class=\"fa fa-angle-double-right\"></span> {{field.title}} \n" +
    "    		<span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">\n" +
    "    			*(required)\n" +
    "    		</span>\n" +
    "    	</h3>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "		<input ng-style=\"{'color': design.colors.answerColor, 'border-color': design.colors.answerColor}\" \n" +
    "            ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "			name=\"{{field.fieldType}}{{index}}\"\n" +
    "            type=\"{{field.input_type}}\" \n" +
    "			placeholder=\"{{field.placeholder}}\"\n" +
    "			ng-class=\"{ 'no-border': !!field.fieldValue }\"\n" +
    "            class=\"focusOn text-field-input\" \n" +
    "			ng-model=\"field.fieldValue\" \n" +
    "			ng-model-options=\"{ debounce: 250 }\"  \n" +
    "			value=\"field.fieldValue\" \n" +
    "			ng-required=\"field.required\"\n" +
    "			ng-disabled=\"field.disabled\"\n" +
    "	        aria-describedby=\"inputError2Status\"\n" +
    "    		on-enter-key=\"nextField()\">\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\">        \n" +
    "        <div ng-show=\"forms.myForm.{{field.fieldType}}{{index}}.$invalid\" class=\"alert alert-danger\" role=\"alert\">\n" +
    "            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n" +
    "            <span class=\"sr-only\">Error:</span>\n" +
    "            Enter a valid email address\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 row\">\n" +
    "    	<div class=\"btn btn-lg btn-default row-fluid\"\n" +
    "	 	style=\"padding: 4px; margin-top:8px; background: rgba(255,255,255,0.5)\">\n" +
    "			<button ng-disabled=\"!field.fieldValue || forms.myForm.{{field.fieldType}}{{$index}}.$invalid\" \n" +
    "				ng-style=\"{'background-color':design.colors.buttonColor, 'color':design.colors.buttonTextColor}\"\n" +
    "                ng-click=\"$root.nextField()\" \n" +
    "				class=\"btn col-sm-5 col-xs-5\">\n" +
    "				\n" +
    "				OK <i class=\"fa fa-check\"></i>\n" +
    "			</button>\n" +
    "			<div class=\"col-sm-3 col-xs-6\" style=\"margin-top:0.2em\">\n" +
    "				<small style=\"color:#ddd; font-size:70%\">\n" +
    "				press ENTER\n" +
    "				</small>\n" +
    "			</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("modules/forms/base/views/directiveViews/field/yes_no.html",
    "<div class=\"field row radio\" ng-click=\"setActiveField(field._id, index, true)\">\n" +
    "    <div class=\"col-xs-12 field-title\" ng-style=\"{'color': design.colors.questionColor}\">\n" +
    "        <h3 class=\"row\">\n" +
    "            <span class=\"fa fa-angle-double-right\"></span> {{field.title}} \n" +
    "            <span class=\"required-error\" ng-show=\"field.required && !field.fieldValue\">\n" +
    "                *(required)\n" +
    "            </span>\n" +
    "        </h3>\n" +
    "        <p class=\"row\">\n" +
    "            {{field.description}}\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12 field-input\">\n" +
    "        <div class=\"row\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-4\"\n" +
    "		style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "                <input type=\"radio\" value=\"true\" \n" +
    "					class=\"focusOn\"\n" +
    "                    style=\"opacity: 0; margin-left: 0px;\"\n" +
    "					ng-focus=\"setActiveField(field._id, index, true)\"	\n" +
    "					ng-model=\"field.fieldValue\" \n" +
    "					ng-model-options=\"{ debounce: 250 }\" \n" +
    "					ng-required=\"field.required\" \n" +
    "					ng-click=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\" />\n" +
    "				<div class=\"letter\">\n" +
    "					Y\n" +
    "				</div>               	\n" +
    "				<span>Yes</span>\n" +
    "				<i ng-show=\"field.fieldValue === 'true'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "            </label>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"row\" style=\"margin-top: 10px;\">\n" +
    "            <label class=\"btn btn-default col-md-2 col-sm-3 col-xs-4\" \n" +
    "		        style=\"background: rgba(0,0,0,0.1); text-align:left;\">\n" +
    "	\n" +
    "                <input type=\"radio\" value=\"false\" \n" +
    "			        style=\"opacity:0; margin-left:0px;\"\n" +
    "			        ng-focus=\"setActiveField(field._id, index, true)\"\n" +
    "			        ng-model=\"field.fieldValue\" \n" +
    "			        ng-model-options=\"{ debounce: 250 }\" \n" +
    "			        ng-required=\"field.required\" \n" +
    "			        ng-click=\"$root.nextField()\"\n" +
    "                    ng-disabled=\"field.disabled\"/>\n" +
    "                	\n" +
    "			<div class=\"letter\">\n" +
    "                  		N\n" +
    "			</div>\n" +
    "			<span>No</span>\n" +
    "                	<i ng-show=\"field.fieldValue === 'false'\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
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
    "<div ng-show=\"!myform.submitted && myform.startPage.showStart\" \n" +
    "class=\"form-submitted\" \n" +
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
    "<a href=\"{{button.url}}\" \n" +
    "style=\"font-size: 1.6em; text-decoration: none;\" \n" +
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
    "<div class=\"row\">\n" +
    "<form name=\"forms.myForm\" \n" +
    "novalidate \n" +
    "class=\"submission-form col-sm-12 col-md-offset-1 col-md-10\">\n" +
    "<div ng-repeat=\"field in myform.form_fields\"  \n" +
    "ng-if=\"!field.deletePreserved\" \n" +
    "data-index=\"{{$index}}\" \n" +
    "data-id=\"{{field._id}}\" \n" +
    "ng-class=\"{activeField: selected._id == field._id }\" \n" +
    "class=\"row field-directive\">\n" +
    "<field-directive field=\"field\" design=\"myform.design\" index=\"$index\">\n" +
    "</field-directive>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row form-actions\" id=\"submit_field\" \n" +
    "ng-click=\"setActiveField('submit_field', myform.form_fields.length)\" \n" +
    "ng-class=\"{activeField: selected._id == 'submit_field' }\" \n" +
    "ng-style=\"{ 'background-color':myform.design.colors.buttonColor}\"\n" +
    "style=\"border-top: 1px solid #ddd; margin-right: -13% ;margin-left: -13%; padding-bottom: 50vh;\">\n" +
    "\n" +
    "<button ng-focus=\"setActiveField('submit_field', myform.form_fields.length)\" \n" +
    "class=\"Button btn col-sm-2 col-xs-4\" \n" +
    "v-busy=\"loading\" v-busy-label=\"Please wait\" v-pressable\n" +
    "ng-disabled=\"loading\" \n" +
    "ng-click=\"submitForm()\"\n" +
    "ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\" \n" +
    "style=\"font-size: 1.6em; margin-left: 1em; margin-top: 1em;\"> \n" +
    "Submit\n" +
    "</button>\n" +
    "\n" +
    "<div class=\"col-sm-2 col-xs-6\" style=\"font-size: 75%; margin-top:2.5em\">\n" +
    "<small>\n" +
    "press ENTER\n" +
    "</small>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<section ng-if=\"!myform.hideFooter\" class=\"navbar navbar-fixed-bottom\" \n" +
    "        ng-style=\"{ 'background-color':myform.design.colors.buttonColor, 'padding-top': '15px', 'border-top': '2px '+ myform.design.colors.buttonTextColor +' solid', 'color':myform.design.colors.buttonTextColor}\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-5 col-md-6 col-xs-5\" ng-show=\"!myform.submitted\">\n" +
    "                        <p class=\"lead\">{{myform | formValidity}} out of {{form_fields_count}} answered</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-md-offset-0 col-sm-offset-2 col-sm-3 col-xs-offset-1 col-xs-6 row\">\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"!authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms\" class=\"btn\"\n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "                            Create a angular-tellform\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-md-offset-2 hidden-sm hidden-xs\" ng-if=\"authentication.isAuthenticated()\">\n" +
    "                        <a href=\"/#!/forms/{{myform._id}}/admin/create\" \n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            class=\"btn\">\n" +
    "                            Edit this angular-tellform\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 col-sm-10 col-md-offset-0 col-sm-offset-2 col-xs-12\"> \n" +
    "                        <button class=\"btn btn-lg\" id=\"focusDownButton\"\n" +
    "				            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"nextField()\" \n" +
    "				            ng-disabled=\"selected.index > myform.form_fields.length-1\">\n" +
    "                        	<i class=\"fa fa-chevron-down\"></i>\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-info btn-lg\" id=\"focusUpButton\" \n" +
    "                            ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\"\n" +
    "                            ng-click=\"prevField()\" \n" +
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
    "        <div class=\"col-xs-6 col-xs-offset-3 text-center\">Form entry successfully submitted!</div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-actions\">\n" +
    "        <p class=\"text-center col-xs-4 col-xs-offset-4\">\n" +
    "            <button ng-click=\"reloadForm()\" class=\"btn\" type=\"button\"\n" +
    "                ng-style=\"{'background-color':myform.design.colors.buttonColor, 'color':myform.design.colors.buttonTextColor}\">\n" +
    "                <span style=\"font-size: 1.6em;\"> Go back to Form</span>\n" +
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