/* jshint -W117, -W030 */

/* jshint -W117, -W030 */
describe('notosplus.root', function () {
    var controller;

    beforeEach(function () {
        module('notosplus', function ($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function ($controller, $q, $rootScope, UserService, $state) {
        });
    });

    beforeEach(function () {
        sinon.stub(UserService, 'all', function () {
            var deferred = $q.defer();
            deferred.resolve(mockData.getUsers());
            return deferred.promise;
        });

        controller = $controller('UsersController');
        $rootScope.$apply();
    });

    describe('Users controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have 2 users', function () {
                expect(controller.users.length).to.equal(2);
            });
            it('should have 2 filteredUsers', function () {
                expect(controller.filteredUsers.length).to.equal(2);
            });
            it('should filter to 1 user', function () {
                controller.userSearch = 'karl';
                //fake some keypress, not escape
                controller.search({keyCode: 65});
                expect(controller.filteredUsers.length).to.equal(1);
            });
            it('should reset filter after pressing escape', function () {
                //press esc
                controller.search({keyCode: 27});
                expect(controller.filteredUsers.length).to.equal(2);
            });
            it('should navigate to user detail', function () {
                $state.go = sinon.spy();
                controller.gotoUser({id: 2});
                expect($state.go).calledWith('manage.users.detail', {id: 2});
            });
        });
    });


});