/**
 * notosplus - karlvaniseghem
 * Copyright © 2015
 */
/* jshint -W117, -W030 */
describe('notosplus.root', function () {
    var mocks = {};

    beforeEach(function () {
        module('notosplus', function ($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function ($httpBackend, $rootScope, UserService) {
        });

        mocks.maaData = mockData.getUsers();
    });

    it('should be registered', function () {
        expect(UserService).not.to.equal(null);
    });

    describe('all function', function () {
        it('should return 2 users', function (done) {
            $httpBackend.when('GET', '/api/users').respond(200, mocks.maaData);
            UserService.all().then(function(data) {
                expect(data.length).to.equal(2);
                done();
            });
            $rootScope.$apply();
            $httpBackend.flush();
        });
        it('should contain Ulrike Drieskens', function (done) {
            $httpBackend.when('GET', '/api/users').respond(200, mocks.maaData);
            UserService.all().then(function(data) {
                var hasUlrike = data.some(function isPrime(element, index, array) {
                    return element.name.indexOf('Ulrike Drieskens') >= 0;
                });
                expect(hasUlrike).to.be.true;
                done();
            });
            $rootScope.$apply();
            $httpBackend.flush();
        });
    });


    specHelper.verifyNoOutstandingHttpRequests();
});