/**
 * notosplus.assets
 * FACTORY: Asset
 */

(function () {
    'use strict';

    angular
        .module('notosplus.assets')
        .factory('Asset', Asset);

    /* @ngInject */
    function Asset(HTTPCache, ProfileService) {
        var service = {
            getList: getList,
            getImagesForWebsites: getImagesForWebsites
        }

        return service;
        ////////////////////

        function getList(type) {
            if (!type) {
                return HTTPCache.service(_baseUrl()).getList();
            } else {
                return HTTPCache.service(_baseUrl() + '/mime/' + type).getList();
            }
        }

        function getImagesForWebsites() {
            return HTTPCache.service('/websites/assets/mime/image').getList();
        }

        function _baseUrl() {
            return '/organization/' + ProfileService.realm().id + '/assets';
        }
    }
})();