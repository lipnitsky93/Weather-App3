app.directive('weatherHeader', [ function() {
    return {

        templateUrl: './templates/weather-header.template.html',
       
        scope: {
            myCities: '=',
        }, 

        link: function($scope, element, attr) {
                $scope.sendCity = function() {
                    $scope.$emit('selectedCity', $scope.currentCity);
                }
        }
    }
}]);