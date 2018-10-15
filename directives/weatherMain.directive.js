app.directive('weatherMain', ['$rootScope', function($rootScope) {
    return {
        
        templateUrl: './templates/weather-main.template.html',

        scope: {
            listOfShowedCities: '=',
            addCity: '=',
            removeCity: '&'
        },

        link: function($scope, element, attr) {
            
                var citiesListener = $rootScope.$on('selectedCity', function(event, data) {     
                    $scope.addCity(data);
                });

                $scope.$on('$destroy', citiesListener);
        }
    }
}]);