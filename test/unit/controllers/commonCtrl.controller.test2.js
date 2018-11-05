describe(' Test2 "commonCtrl" ', function() {

    var suite = null;

    beforeEach(function() {
        //suite = {};

        module('app', function($provide) {
            suite = {};

            suite.getWeather = {
                getCityWeather: function(u) {console.log('mock data u: ', u);
                    return {
                    then: function() {
                        console.log('mock data u in then: ', u);
                         return u}
                }}
            };

            $provide.value('getWeather', suite.getWeather);

        });

        inject(function (_$injector_) {
            //suite = {};
            suite.$rootScope = _$injector_.get('$rootScope');
            suite.$controller = _$injector_.get('$controller');
            suite.$scope = suite.$rootScope.$new();
        });

        suite.$controller('commonCtrl', { $scope: suite.$scope });
    });

    afterEach(function(){
        suite.$scope.$destroy();
        suite.$rootScope.$digest();
        suite = null;
    });

    describe('message test', function() {
        it('message should be exist', function() {
            expect(suite.$scope.message).toBeDefined();
        });
        
        it('message should be equal Hello', function() {
            expect(suite.$scope.message).toEqual('Hello');
        });
    });

    describe('1. $scope.listOfShowedCities', function() {
        it('should be exist', function() {
            expect(suite.$scope.listOfShowedCities).toBeDefined();
        });

        it('should be Array', function() {
            expect(Array.isArray(suite.$scope.listOfShowedCities)).toBeTruthy();
        });
    });

    describe('2. $scope.myCities', function() {
        it('should be exist', function() {
            expect(suite.$scope.myCities).toBeDefined();
        });
    });

    describe('3. $scope.getWeather', function() {
        it('should be exist', function() {
            expect(suite.$scope.getWeather).toBeDefined();
        });
    });

    describe('4. $scope.addCity', function() {
    

        it('should be exist', function() {
            expect(suite.$scope.addCity).toBeDefined();
        });

        it('execution function', function() {


            console.log('addCity: ', suite.$scope.addCity('London'));
            //console.log(suite.$scope.addCity('Minsk').then(response=>console.log('response:', response)))
            //suite.$scope.$digest();
            //expect(suite.$scope.addCity('Minsk')).toEqual('Minsk');
            
        });

       
    });

    describe('5. $scope.removeCity', function() {
        it('should be exist', function() {
            expect(suite.$scope.removeCity).toBeDefined();
        });
    });

}); 