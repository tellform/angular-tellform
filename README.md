# angular-tellform 
-Tellform Angular Form UI Module

This module gives you the standalone front-end of tellform. It handles form rendering and form ui. For you to use this module you must have an API endpoint, such as (Formkeep)[https://formkeep.com].

## Code Example

Clone the repository, run bower install and then run http-server at the demo folder to view example form.

1. To use this directive first add *angular-tellform* as a dependency to your angular module/app.

**app.js**
```
'use strict';

angular.module('myModule', ['angular-tellform']);
```

2. Then, set $scope.form in your controller to what your form data

**app.js**
```
...

angular.module('myModule').controller('MyFormCtrl', function MyFormCtrl($scope) {
    
    $scope.myform = {
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

});
```

3. Then add the angular-tellform directive to your controller's html view
```
...
<body ng-app="myModule">

		<section class="content" ng-controller="MyFormCtrl">
			<angular-tellform myform="myform"></angular-tellform>
		</section>
</body>
...
```

After these steps you should have a form displayed within your **section** element. Since the directive is bounded to $scope.form, if you want to update the form all you need to do is change $scope.form to a new value.

## Installation

```bower install angular-tellform```

## Tests

No tests currently

## Development

First clone the repository and run `bower install`.

When you want to test your code, run `grunt`, then `bower install` and then open the demo/index.html file for an example form.

## Contributing

When pushing submitting a PR, please make sure to delete your /dist directory. 

## License

Uses MIT License. See LICENSE.md for full license terms.
