app.factory('getWeather', function($http, $q) {

    function getCityWeather(url) {

        var deferred = $q.defer();

            $http({
                    method: 'GET',
                    url: url
                    
                  }).then(function(data) {
                    
                        deferred.resolve(data);
                     
            });          

        return   deferred.promise;
    }

    return {
        getCityWeather: getCityWeather,
    }
});