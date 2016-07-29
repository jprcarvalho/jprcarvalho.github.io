app.controller('angularJScontroller' , function($scope) {
       $scope.Counter = 0;
       $scope.click = function(){
            $scope.Counter += 1;
       }
        $scope.remove = function(){
            if($scope.Counter>0){$scope.Counter -= 1;}
       }
});
