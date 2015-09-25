/**
 * notosplus.portal
 * FACTORY: Blog
 */

(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .factory('Blog', Blog);

    /* @ngInject */
    function Blog(HTTPCache, ProfileService) {
        var service = HTTPCache.service('organization/' + ProfileService.realm().id + '/blogs');

        return service;

    }
})();