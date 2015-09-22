/**
 * notosplus.data
 * FACTORY: HTTPCache
 */

(function () {
    'use strict';

    angular
        .module('notosplus.data')
        .factory('HTTPCache', HTTPCache);

    /* @ngInject */
    function HTTPCache(Restangular, $cacheFactory) {
        var cache;
        cache = $cacheFactory('http');

        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setDefaultHttpFields({cache: cache});
            RestangularConfigurer.setResponseInterceptor(function (response, operation) {
                if (operation === 'put' || operation === 'post' || operation === 'delete') {
                    cache.removeAll();
                }
                return response;
            });

            // Custom Global Method(s) for Restangularized Elements.
            RestangularConfigurer.setOnElemRestangularized(function(elem, isCollection) {
                elem.clearCache = function() {
                    cache.removeAll();
                }
                return elem;
            });
        });
    }
})();