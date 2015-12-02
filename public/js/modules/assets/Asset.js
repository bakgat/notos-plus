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
            getImagesForWebsites: getImagesForWebsites,
            getImages: getImages
        }

        return service;
        ////////////////////

        function getList(mime) {
            if (!type) {
                return HTTPCache.service(_baseUrl()).getList();
            } else {
                return HTTPCache.service(_baseUrl() + '/mime/' + mime).getList();
            }
        }

        function getImagesForWebsites() {
            return HTTPCache.service('/websites/assets/mime/image').getList();
        }

        function getImages(type) {
            return HTTPCache.service(_baseUrl() + '/mime/image/type/' + type).getList();
        }

        function _baseUrl() {
            return '/organization/' + ProfileService.realm().id + '/assets';
        }
    }
})();