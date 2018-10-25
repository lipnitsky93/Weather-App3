describe(' Test2 "commonCtrl" ', function() {

    var suite = null;

    beforeEach(function() {
        //suite = {};
        module('app');
        inject(function (_$injector_) {
            suite = {};
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

        it('should be Array', function() {
            expect(Array.isArray(suite.$scope.myCities)).toBeTruthy();
        });

        it('should have length "4"', function() {
            expect(suite.$scope.myCities.length).toEqual(4);
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

        it('should be exist', function() {
            expect(suite.$scope.addCity).toBeDefined();
        });
    });

    describe('5. $scope.removeCity', function() {
        it('should be exist', function() {
            expect(suite.$scope.removeCity).toBeDefined();
        });
    });

}); 