/**
 * notosplus.library
 * FACTORY: Book
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('Book', Book);

    /* @ngInject */
    function Book(HTTPCache, ProfileService ) {
        var service = HTTPCache.service('/organization/' + ProfileService.realm().id + '/books');

        return service;
    }
})();