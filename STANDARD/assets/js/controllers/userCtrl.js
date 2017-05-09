'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('UserCtrl', ["$scope", "flowFactory", function ($scope, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Sean',
        lastName: 'Lu',
        url: '',
        email: '',
        phone: '',
        gender: 'male',
        zipCode: '',
        city: '',
        avatar: 'assets/images/sean-xl.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: ''
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);