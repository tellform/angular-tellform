# Angular Tellform 

This module gives you the standalone front-end of tellform. It handles form rendering and form ui. For you to use this module you must have an API endpoint, such as [FormKeep](https://formkeep.com) or [Formlets](https://formlets.org). 

```
<section class="content" ng-controller="MyFormCtrl">
	<angular-tellform myform="form" endPoint="https://myurl.com/endpoint"></angular-tellform>
</section>
```

## Installation

via bower

```bower install angular-tellform```

via npm

```npm install angular-tellform```

## Quick Example

This serves as a quick guide to setting up and using angular-tellform in a small angular project. If you are looking for API documentation, please refer to the next section instead.

### Step 1. Add as a dependency
First add *angular-tellform* as a dependency to your angular module/app.

_app.js_
```
'use strict';

angular.module('myModule', ['angular-tellform']);
```

### Step 2. Set the form data
Set $scope.form in your controller to the JSON object of your form.

*app.js*
```
...

angular.module('myModule').controller('MyFormCtrl', function MyFormCtrl($scope) {
    
    $scope.form = {
        "title": "Job Application Example",
        "design": {
            "colors": {
                "buttonTextColor": "#5C780A",
                "buttonColor": "#C5F044",
                "answerColor": "#333",
                "questionColor": "#6D8524",
                "backgroundColor": "#E4F8A8"
            }
        },
        "hideFooter": false,
        "startPage": {
            "buttons": [],
            "introButtonText": "Apply Now",
            "introTitle": "We're looking for a great Growth Hacker",
            "showStart": true
        },
        "form_fields": [{
            "lastModified": "2016-04-22T23:02:46.017Z",
            "title": "How would you rate your experience and knowledge of running split tests?",
            "fieldType": "rating",
            "fieldValue": 1,
            "_id": "571940102aa1f3ff5e205b5d",
            "validFieldTypes": ["textfield", "date", "email", "link", "legal", "url", "textarea", "statement", "welcome", "thankyou", "file", "dropdown", "scale", "rating", "radio", "checkbox", "hidden", "yes_no", "natural", "number"],
            "deletePreserved": false,
            "disabled": false,
            "required": true,
            "ratingOptions": {
                "shape": "thumbs-up",
                "steps": 5
            },
            "description": ""
        }, {
            "lastModified": "2016-04-22T23:02:46.017Z",
            "title": "And how would you rate your creativity and ability to find innovative solutions?",
            "fieldType": "rating",
            "fieldValue": 1,
            "_id": "571940222aa1f3ff5e205b5e",
            "validFieldTypes": ["textfield", "date", "email", "link", "legal", "url", "textarea", "statement", "welcome", "thankyou", "file", "dropdown", "scale", "rating", "radio", "checkbox", "hidden", "yes_no", "natural", "number"],
            "deletePreserved": false,
            "disabled": false,
            "required": true,
            "ratingOptions": {
                "shape": "thumbs-up",
                "steps": 5
            },
            "description": ""
        }],
        "language": "english"
    };

    $scope.endPoint="https://myurl.com/endpoint";

});
```

### Step 3. Modifying the view
Then add the angular-tellform directive to your controller's html view

*view.html*  
```
...
<body ng-app="myModule">
	<section class="content" ng-controller="MyFormCtrl">
		<angular-tellform myform="form" endPoint="endPoint"></angular-tellform>
	</section>
</body>
...
```

After this you will have a form displayed inside your **section** element. Since the directive is bounded to $scope.form, if you want to update the form all you need to do is change $scope.form to a new value.

## Form JSON Spec

A typical JSON object for form data will look like this:
```
{
        "title": "Job Application Example",
        "design": {
            "colors": {
                "buttonTextColor": "#5C780A",
                "buttonColor": "#C5F044",
                "answerColor": "#333",
                "questionColor": "#6D8524",
                "backgroundColor": "#E4F8A8"
            }
        },
        "hideFooter": false,
        "startPage": {
            "buttons": [],
            "introButtonText": "Apply Now",
            "introTitle": "We're looking for a great Growth Hacker",
            "showStart": true
        },
        "form_fields": [{
            "lastModified": "2016-04-22T23:02:46.017Z",
            "title": "How would you rate your experience and knowledge of running split tests?",
            "fieldType": "rating",
            "fieldValue": 1,
            "_id": "571940102aa1f3ff5e205b5d",
            "validFieldTypes": ["textfield", "date", "email", "link", "legal", "url", "textarea", "statement", "welcome", "thankyou", "file", "dropdown", "scale", "rating", "radio", "checkbox", "hidden", "yes_no", "natural", "number"],
            "deletePreserved": false,
            "disabled": false,
            "required": true,
            "ratingOptions": {
                "shape": "thumbs-up",
                "steps": 5
            },
            "description": ""
        }, {
            "lastModified": "2016-04-22T23:02:46.017Z",
            "title": "And how would you rate your creativity and ability to find innovative solutions?",
            "fieldType": "rating",
            "fieldValue": 1,
            "_id": "571940222aa1f3ff5e205b5e",
            "validFieldTypes": ["textfield", "date", "email", "link", "legal", "url", "textarea", "statement", "welcome", "thankyou", "file", "dropdown", "scale", "rating", "radio", "checkbox", "hidden", "yes_no", "natural", "number"],
            "deletePreserved": false,
            "disabled": false,
            "required": true,
            "ratingOptions": {
                "shape": "thumbs-up",
                "steps": 5
            },
            "description": ""
        }],
        "language": "english"
```

### title

**Required**

Type: `String`

The title of the form 

* Must be unique.
* Consecutive dashes or dots not allowed.


### design

**Required**

Type: `Object`

The object containing the CSS styles and colors for the form

#### design.colors.buttonTextColor

	**Required**
	
	Type: `String`
	
	The hex color of the button text
	
#### design.colors.buttonColor

	**Required**
	
	Type: `String`
	
	The hex color of the button background
	
#### colors.answerColor

	**Required**
	
	Type: `String`
	
	The hex color of the answer (input field) text.

#### design.colors.questionColor

	**Required**
	
	Type: `String`
	
	The hex color of the question text.

#### design.colors.backgroundColor

	**Required**
	
	Type: `String`
	
	The hex color of the form background.

### hideFooter
*Recommended*

Type: `Boolean`

If it is true, form footer will be hidden and vice-versa if it is false

### startPage
**Required**

Type: `Object`

Stores form's startPage data

```
 "startPage": {
            "buttons": [], //Array of Buttons
            "introButtonText": "Apply Now", //Continue button text
            "introTitle": "We're looking for a great Growth Hacker", //Intro title
            "showStart": true	//Hides Start Page if false
        }
```

### form_fields

**Required**

Type: `Array` of `Object`

The array of form fields that your form will display. 

### language

*Reccomended*

Type: `String` 

Specifies the language that your form will be rendered in

* Must be either `english`, `spanish`, `french`, `german` or `italian`
* Defaults to `english` if specified

## Development

First clone the repository and run `bower install`.

When you want to test your code, run 
```
grunt
bower install
```
and then open the demo/index.html file for an example form.

## Contributing

When submitting a PR, please make sure to delete your /dist directory. 

## License

Uses MIT License. See LICENSE.md for full license terms.
