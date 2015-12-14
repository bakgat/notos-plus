/**
 * notosplus.manage
 * FACTORY: Group
 */

(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .factory('Group', Group);

    /* @ngInject */
    function Group(HTTPCache, ProfileService) {


        var service = {
            ofKind: ofKind
        }

        return service;
        ///////////////////

        function ofKind(kind) {
            return HTTPCache.service('/organization/' + ProfileService.realm().id + '/group/' + kind);
        }
    }
})();