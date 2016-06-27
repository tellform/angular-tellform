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
