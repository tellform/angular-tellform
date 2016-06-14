'use strict';

angular.module('angular-tellform').directive('angularTellform',
    ['$rootScope', '$state', 'myForm', 'Auth', function ($rootScope, $state, myForm, Auth) {
    return {
        templateUrl: 'modules/forms/base/views/submit-form.client.view.html',
        restrict: 'E',
        scope: {
            myform:'='
        },
        controller: function($document, $window, $scope){
            $scope.authentication = Auth;
            $scope.myform = myForm;

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
    };
}]);
