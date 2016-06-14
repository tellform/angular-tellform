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
