describe(' Test "myCities" constant service ', function() {
    var suite = null;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.myCities = $injector.get('myCities');
    }));
    
    afterEach(function () {
        suite = null;
    });

    it('Test 1: should be defined', function() {
        expect(suite.myCities).toBeDefined();
    });

    it('Test 2: should be array', function() {
        expect(Array.isArray(suite.myCities)).toBeTruthy();
    });

    it('Test 3: should contain property "city"', function() {
        expect(suite.myCities[0].city).toBeDefined();
    });

    it('Test 4: should contain property "url"', function() {
        expect(suite.myCities[0].url).toBeDefined();
    });

}); 