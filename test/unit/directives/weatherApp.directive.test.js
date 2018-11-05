describe(' Test "weatherApp" directive ', function() {
    'use strict';

    var suite = null;

    function compileDirective() {
        var template = '<weather-app ng-controller="commonCtrl"></weather-app>';
        suite.element = suite.$compile(template)(suite.scope);
        suite.$rootScope.$digest();
        //suite.scope.$digest();

        suite.$httpBackend.flush();

    }


    //beforeEach(angular.mock.module('templates'));

    beforeEach(module('app'));
    //beforeEach(module('templates'));
    
    //beforeEach(module('../templates/weather-app.template.html'));
    //beforeEach(angular.mock.module('templates'));
    
    

    beforeEach(inject(function($injector) {
        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.$httpBackend = $injector.get('$httpBackend');
        suite.$compile = $injector.get('$compile');
        //suite.scope = suite.$rootScope.$new();
        
        //suite.$httpBackend.whenGET('../templates/weather-app.template.html').respond(200, '');
        //suite.$httpBackend.whenGET('../templates/weather-app.template.html').passThrough();
        //suite.$httpBackend.whenGET('../templates/weather-app.template.html').respond('GotIT');
        suite.scope = suite.$rootScope.$new();
    }));

    afterEach(function() {
        suite.scope.$destroy();
        suite.$rootScope.$digest();
        //suite.element.remove();
        suite = null;
    });

    it('Replaces the element with the appropriate content', function() {
       
        //compileDirective();
        //console.log('our element', suite.element);
        
        //console.log('suite.element.find', suite.element.find);
        //expect(suite.element[0]).toEqual('<weather-app ng-controller="commonCtrl"></weather-app>');
        //expect(suite.element.find('[div]')).toEqual('ret');
        //expect(suite.element.find('div')).toEqual('ret');
        //console.log('suite.element.find', suite.element.find('weather-header'));
        //console.log('suite.element', suite.element);
        
    });


});