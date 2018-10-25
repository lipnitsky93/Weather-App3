describe(' Test "commonCtrl" ', function() {
    'use strict';

    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function($controller, $rootScope){

        mockScope = $rootScope.$new();

        controller = $controller('commonCtrl', {
            $scope: mockScope
        });
        
        controller = $controller('commonCtrl', {
            $scope: mockScope,
        });

    }));

    describe('message test', function() {
        it('message should be exist', function() {
            expect(mockScope.message).toBeDefined();
        });

        it('message should be equal Hello', function() {
            expect(mockScope.message).toEqual('Hello');
        });
    });



});