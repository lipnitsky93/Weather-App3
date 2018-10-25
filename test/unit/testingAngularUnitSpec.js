describe('First test suite', function() {

        function double(a) {
            return a * 2;
        };

        it('should resolve first test', function() {
            expect('this is first test message').toBe('this is first test message');
        });

        it('should return 16 from double(8)', function() {
            
            expect(double(8)).toEqual(16);
        });

        it('should return 14 from double(7)', function() {
            
            expect(double(7)).toEqual(14);
        });

});

describe("Testing controller", function() {
   
  var controller;
  var mockScope = {};

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function($controller, $rootScope){
    mockScope = $rootScope.$new();
    
    controller = $controller('commonCtrl', {
        $scope: mockScope
    });
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
        mockScope.password = 'longerthaneightchars';
        mockScope.grade();
        expect(mockScope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length is <3 chars', function() {
        mockScope.password = 'l';
        mockScope.grade();
        expect(mockScope.strength).toEqual('weak');
    });

    it('sets the strength to "medium" if the password length is >3 and <8 chars', function() {
        mockScope.password = 'mrwwr';
        mockScope.grade();
        expect(mockScope.strength).toEqual('medium');
    });
  });
});



