/**
 * notosplus - karlvaniseghem
 * Copyright © 2015
 */

/* jshint -W117, -W030 */
describe('notosplus.root', function () {
    var controller;

    beforeEach(function() {
        module('notosplus', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($controller, $q, $rootScope, ProfileService) {});
    });

    beforeEach(function () {
        sinon.stub(ProfileService, 'current', function() {
            var deferred = $q.defer();
            deferred.resolve(mockData.getMockProfile());
            return deferred.promise;
        });

        controller = $controller('Root');
        $rootScope.$apply();
    });


    describe('Root controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });

    describe('after activate', function () {
        it('should have female avatar', function () {
            expect(controller.avatar).to.equal('/img/user/female.png');
        });
        it('should have book.create permission', function () {
            expect(controller.profile.permissions.book.create).to.be.true;
        });
    });

    specHelper.verifyNoOutstandingHttpRequests();
});