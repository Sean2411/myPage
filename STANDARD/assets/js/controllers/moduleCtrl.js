app.controller('moduleCtrl', ['$scope', '$http', function ($scope, $http) {

        $http.get("http://localhost:8080/JSPServelet/getDataServlet").then(function(data){
            $scope.person = data;
        })


}])