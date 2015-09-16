describe('manage.users', function () {
    describe('route', function () {
        var state = 'manage.users';

        beforeEach(function () {
            module('notosplus', specHelper.fakeLogger);
            specHelper.injector(function ($httpBackend, $location, $rootScope, $state, routehelper) {});
            $httpBackend.expectGET('js/modules/manage/users/users.html').respond(200);
        });


        it('should map / route to books View template', function () {
            expect(routehelper.get('manage.users').views['content@'].templateUrl).
                to.equal('js/modules/manage/users/users.html');
        });

        it('should respond to URL', function () {
            expect($state.href(state)).to.equal('#/manage/users');
        });
    });
});