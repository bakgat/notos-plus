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
    function HTTPCache(Restangular, $cacheFactory, logger) {
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

            RestangularConfigurer.setErrorInterceptor(
                function (response) {
                    console.log(response);
                    var s = response.status;
                    if (s === 400 || s === 404 || s === 409 || s === 500) {
                        logger.error(response.data, response, response.statusText);

                    } else if (s === 401 || s === 403 || s === 410 ||
                                s === 412 || s === 415 || s === 422) {
                        logger.warning(response.statusText, response, response.statusText);

                    } else {
                        logger.error(response.statusText + ' - Fout ' + response.status, response, 'Fout');
                    }

                    // Stop the promise chain.
                    return false;
                }
            );

            // Custom Global Method(s) for Restangularized Elements.
            RestangularConfigurer.setOnElemRestangularized(function (elem, isCollection) {
                elem.clearCache = function () {
                    cache.removeAll();
                }
                return elem;
            });
        });
    }
})();