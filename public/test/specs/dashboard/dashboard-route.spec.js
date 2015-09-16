describe('dashboard', function () {
    describe('route', function () {
        var state = 'index.dashboard';

        beforeEach(function () {
            module('notosplus', specHelper.fakeLogger);

            specHelper.injector(function($httpBackend, $location, $rootScope, $state, routehelper) {});
            $httpBackend.expectGET('/').respond(200);
        });

        it('should map / route to dashboard View template', function () {
            expect(routehelper.get('index.dashboard').views['content@'].templateUrl).
                to.equal('js/modules/dashboard/dashboard.html');
        });

        it('should respond to URL', function() {
            expect($state.href(state)).to.equal('#/index/dashboard');
        });
    });
});