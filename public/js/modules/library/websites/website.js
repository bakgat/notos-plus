/**
 * notosplus.library
 * FACTORY: Website
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('Website', Website);

    /* @ngInject */
    function Website(HTTPCache) {
        var service = HTTPCache.service('/websites');

        return service;
    }
})();