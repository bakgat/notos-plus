/**
 * notosplus.portal
 * FACTORY: CalendarEvent
 */

(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .factory('CalendarEvent', CalendarEvent);

    /* @ngInject */
    function CalendarEvent(HTTPCache, ProfileService, $q) {
        var service = HTTPCache.service('organization/' + ProfileService.realm().id + '/calendar');

        return service;
        ////////////////
    }
})();