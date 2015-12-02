/**
 * notosplus.library
 * FACTORY: Publisher
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('Publisher', Publisher);

    /* @ngInject */
    function Publisher(HTTPCache) {
        var service = HTTPCache.service('publishers');

        return service;

    }
})();