/**
 * notosplus.library
 * FACTORY: Author
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('Author', Author);

    /* @ngInject */
    function Author(HTTPCache) {
        var service = HTTPCache.service('authors');

        return service;
    }
})();