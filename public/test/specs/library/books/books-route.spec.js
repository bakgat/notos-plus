describe('library.books', function () {
    describe('route', function () {
        var state = 'library.books';

        beforeEach(function () {
            module('notosplus', specHelper.fakeLogger);
            specHelper.injector(function($httpBackend, $location, $rootScope, $state, routehelper) {});
            $httpBackend.expectGET('js/modules/library/books/books.html').respond(200);
        });

        it('should map / route to books View template', function () {
            expect(routehelper.get('library.books').views['content@'].templateUrl).
                to.equal('js/modules/library/books/books.html');
        });

        it('should respond to URL', function() {
            expect($state.href(state)).to.equal('#/library/books');
        });
    });
});