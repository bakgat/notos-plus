/**
 * notosplus - karlvaniseghem
 * Copyright © 2015
 */
describe('notosplus.root', function () {

    beforeEach(function () {
        module('notosplus', function ($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function ($httpBackend, $rootScope, ProfileService) {
        });

    });

    it('should be registered', function () {
        expect(ProfileService).not.to.equal(null);
    });

    describe('current function', function () {
        it('should exists', function () {
            expect(ProfileService.current).not.to.equal(null);
        });
        it('should return Karl Van Iseghem', function (done) {
            $httpBackend.when('GET', '/api/user/profile').respond(200, mockData.getMockProfile());
            ProfileService.current().then(function (data) {
                expect(data.name).to.be.equal('Karl Van Iseghem');
                done();
            });
            $rootScope.$apply();
            $httpBackend.flush();
        });

    });


    specHelper.verifyNoOutstandingHttpRequests();
});