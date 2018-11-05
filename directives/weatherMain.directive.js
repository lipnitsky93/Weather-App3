app.directive('weatherMain', ['$rootScope', function($rootScope) {
    return {
        
        templateUrl: '../templates/weather-main.template.html',

        scope: {
            listOfShowedCities: '=',
            addCity: '=',
            removeCityFromDirective: '&'
        },

        link: function($scope, element, attr) {
                $scope.privatVal = 'Hello!'; 
                var citiesListener = $rootScope.$on('selectedCity', function(event, data) {     
                    $scope.addCity(data);
                });

                $scope.$on('$destroy', citiesListener);
        }
    }
}]);