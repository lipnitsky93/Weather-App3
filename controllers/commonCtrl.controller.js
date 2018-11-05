app.controller('commonCtrl',['$scope', 'myCities', 'getWeather', function($scope, myCities, getWeather) {
    
    
    $scope.message = "Hello";
    $scope.password = '';

    $scope.grade = function() {
        var size = $scope.password.length;
        if (size > 8) {
            $scope.strength = 'strong';
        } else if (size > 3) {
            $scope.strength = 'medium';
        } else {
            $scope.strength = 'weak';
        }
    };





    
    
    
    $scope.listOfShowedCities = [];
    $scope.myCities = myCities;
    $scope.getWeather = getWeather;

    $scope.addCity = function(city) {  
        
        $scope.myCities.forEach((item) => {
            
            function isCityShown() {
                return !$scope.listOfShowedCities.some((item) => {
                    return item.city == city;
                })
            }
           
            if(item.city == city) {

                 if (isCityShown()) {
                    $scope.getWeather.getCityWeather(item.url).then((response) => {
                        item.temperature = '+' + response.data.currently.temperature;
                        item.picture = './images/' + response.data.currently.icon + '.png';
                        $scope.listOfShowedCities.push(item);

                    }, (responseRej) => {
                        console.log('DATA ERROR!', responseRej);
                    });
                }
            } 
        }); 
    };

    $scope.removeCity = function(i, val) {
        console.log(i);
        console.log(val);
        $scope.listOfShowedCities.splice(i, 1);  
    };

}]);

