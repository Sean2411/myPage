app.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
     $scope.login = function () {
         $http.post("http://localhost:8080/JSPServelet/myPageLoginServlet", {"username": $scope.uname, "password" : $scope.pw}).then(function(data){
             alert(data);
         })
     }
}])