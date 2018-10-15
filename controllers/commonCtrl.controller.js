app.controller('commonCtrl',['$scope', 'myCities', 'getWeather', function($scope, myCities, getWeather) {
    $scope.listOfShowedCities = [];
    $scope.myCities = myCities;

    $scope.addCity = function(city) {  
        
        $scope.myCities.forEach((item) => {
            
            function isCityShown() {
                return !$scope.listOfShowedCities.some((item) => {
                    return item.city == city;
                })
            }
           
            if(item.city == city) {

                 if (isCityShown()) {
                    
                    getWeather.getCityWeather(item.url).then((response)=> {
                        item.temperature = '+' + response.data.currently.temperature;
                        item.picture = './images/' + response.data.currently.icon + '.png';
                        $scope.listOfShowedCities.push(item);

                    });
                }
            } 
        }); 
    }

    $scope.removeCity = function(index) {
        console.log(index)
        console.log(this);
        console.log($scope.listOfShowedCities);
        $scope.listOfShowedCities.splice(index, 1);  
    }

}]);