/**
 * notosplus.manage
 * FACTORY: User
 */

(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .factory('User', User);


    /* @ngInject */
    function User(HTTPCache, ProfileService) {

        var service = HTTPCache.service('/organization/' + ProfileService.realm().id + '/user');


        return service;
    }
})();