/**
 * Created by lu1 on 2017/4/3.
 */
'use strict';
/**
 * controller for User Profile Example
 */
app.controller('OverviewCtrl', ["$scope", "flowFactory", function ($scope, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Sean',
        lastName: 'Lu',
        url: "",
        email: 'seanlu860@gmail.com',
        phone: '(917)-208-7030',
        gender: 'Male',
        zipCode: '07030',
        city: 'Hoboken',
        avatar: 'assets/images/sean-xl.jpeg',
        twitter: '',
        github: 'https://github.com/sean2411',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'seanlu2411'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);