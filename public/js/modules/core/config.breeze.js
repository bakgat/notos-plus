/**
 * notosplus.data
 * FACTORY: breezeConfig
 */

(function () {
    'use strict';

    angular
        .module('notosplus.core')
        .factory('breezeConfig', breezeConfig);

    /* @ngInject */
    function breezeConfig(breeze) {
        var service = {
            remoteServiceName: '/api/breeze',
            breeze: breeze
        }

        return service;
        ////////////////
    }

})();