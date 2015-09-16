/**
 * notosplus.core
 * FACTORY: Init
 */

(function () {
    'use strict';

    angular
        .module('notosplus.core')
        .factory('Init', Init);

    /* @ngInject */
    function Init() {
        var wasInitialized = false;

        var service = {
            isInitialized: isInitialized,
            initializing: initializing
        }

        return service;
        ////////////////

        function isInitialized() {
            return wasInitialized;
        }
        function initializing(init) {
            wasInitialized = init;
        }

    }
})();