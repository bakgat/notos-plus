/**
 * notosplus.core
 * FACTORY: common
 */

(function () {
    'use strict';

    angular
        .module('notosplus.core')
        .factory('common', common);

    function common($q, $rootScope, $timeout, logger) {
        var throttles = {};
        var csrf = null;

        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // generic
            isNumber: isNumber,
            debouncedThrottle: debouncedThrottle,
            logger: logger,
            textContains: textContains,
            csrfToken: csrfToken
        }

        return service;
        ////////////////////////

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }


        function debouncedThrottle(key, callback, delay, immediate) {
            // Perform some action (callback) after a delay.
            // Track the callback by key, so if the same callback
            // is issued again, restart the delay.
            var defaultDelay = 1000;
            delay = delay || defaultDelay;
            if (throttles[key]) {
                $timeout.cancel(throttles[key]);
                throttles[key] = undefined;
            }
            if (immediate) {
                callback();
            } else {
                throttles[key] = $timeout(callback, delay);
            }
        }

        function isNumber(val) {
            // negative or positive
            return (/^[-]?\d+$/).test(val);
        }

        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }

        function csrfToken() {
            return csrf || getCsrfToken();
            ////////////////////

            function getCsrfToken() {

                var metas = document.getElementsByTagName('meta');

                for (var i = 0; i < metas.length; i++) {
                    var meta = metas[i];
                    if (meta.getAttribute('name') == "csrf_token") {
                        csrf = meta.getAttribute('content');
                    }
                }

                return csrf;
            }
        }
    }
})();