describe(' Test "getWeather" factory ', function() {
    var suite = null;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        suite = {};
        //suite.$rootScope = $injector.get('$rootScope');
        suite.$httpBackend = $injector.get('$httpBackend');
        suite.getWeather = $injector.get('getWeather');
    }));

    beforeEach(function() {
        suite.$httpBackend.when('GET', 'MinskURL').respond(
            { 
              city: 'Minsk',
              temperature: 15.5,
              picture: 'windy.png' 
            }
        );

        suite.$httpBackend.when('GET', 'GrodnoURL').respond(
            { 
              city: 'Grodno',
              temperature: 4,
              picture: 'snow.png' 
            }
        );  
    });
    
    afterEach(function () {
        suite.$httpBackend.verifyNoOutstandingExpectation();
        suite.$httpBackend.verifyNoOutstandingRequest();
        suite = null;
    });

    it('Test 1: should be defined', function() {
        expect(suite.getWeather).toBeDefined();
    });

    it('Test 2: method "getCityWeather" should be defined', function() {
        expect(suite.getWeather.getCityWeather).toBeDefined();
    });

    it('Test 3: method "getCityWeather(url)" should return correct response', function() {

        var currentCity = null;
        var currentTemperature = null;
        var currentPicture = null;

        var promise = suite.getWeather.getCityWeather('MinskURL');
        
        promise.then(response => {
            currentCity = response.data.city;
            currentTemperature = response.data.temperature;
            currentPicture = response.data.picture;
        });
        
        suite.$httpBackend.flush(); 

        expect(currentCity).toEqual('Minsk');
        expect(currentTemperature).toEqual(15.5);
        expect(currentPicture).toEqual('windy.png');

        var promise2 = suite.getWeather.getCityWeather('GrodnoURL');

        promise2.then(response => {
            currentCity = response.data.city;
            currentTemperature = response.data.temperature;
            currentPicture = response.data.picture;
        });

        suite.$httpBackend.flush(); 

        expect(currentCity).toEqual('Grodno');
        expect(currentTemperature).toEqual(4);
        expect(currentPicture).toEqual('snow.png');
    });
    
});