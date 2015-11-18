/**
 * notosplus.portal
 * CONTROLLER: CalendarController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .controller('CalendarController', CalendarController);

    /* @ngInject */
    function CalendarController(common, config, CalendarEvent, $state) {
        /*jshint validthis: true */
        var vm = this;

        vm.loading = false;
        vm.events = [];
        vm.gotoEvent = gotoEvent;
        vm.refresh = refresh;

        var ev = config.events;

        activate();
        /////////////

        function activate() {
            getCalendarList();
            common.$broadcast(ev.controllerActivateSuccess);
        }

        function getCalendarList(forceRefresh) {
            vm.loading = true;
            if (forceRefresh) {
                if (vm.cachedEvents) {
                    vm.cachedEvents.clearCache();
                    vm.events = [];
                }
            }

            CalendarEvent.getList().then(calendarComplete);

            function calendarComplete(response) {
                vm.cachedEvents = response;
                vm.events = convertTo(response, 'start', true);
                vm.loading = false;
            }
        }

        function convertTo(arr, key, dayWise) {
            var groups = {};
            var l = arr.length;
            for (var i = 0; i < l; i++) {
                var local = moment.utc(arr[i][key]).format('DD MMMM YYYY');
                //if (dayWise) {

                //console.log(local);
                //arr[i][key] = arr[i][key].toLocaleDateString();
                //}
                // else {
                //     arr[i][key] = arr[i][key].toTimeString();
                //}
                groups[local] = groups[local] || [];
                groups[local].push(arr[i]);
            }
            return groups;
        };

        function gotoEvent(event) {
            if (event && event.id) {
                $state.go('portal.calendar.event', {id: event.id});
            }
        }

        function refresh() {
            getCalendarList(true);
        }
    }
})();