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
    function CalendarController(common, config, CalendarEvent, $state, moment, _) {
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

            return CalendarEvent.getList().then(calendarComplete);

            function calendarComplete(response) {
                vm.cachedEvents = response;
                vm.events = convertTo(response, 'start', true);
                vm.loading = false;
                return vm.events;
            }
        }

        function convertTo(arr, key, dayWise) {
            //var classGroups = [];
            var l = arr.length;

            if (dayWise) {
                for (var i = 0; i < l; i++) {
                    arr[i].key = moment(arr[i][key]).format('DD MMMM YYYY');
                }
            }
            var result = _.chain(arr)
                .groupBy('key')
                .pairs()
                .map(function (currentItem) {
                    return _.object(_.zip(['key', "events"], currentItem));
                })
                .value();

            /*
             for (var i = 0; i < l; i++) {
             var local = moment.utc(arr[i][key]).format('DD MMMM YYYY');
             if (dayWise) {
             console.log(local);
             arr[i][key] = arr[i][key].toLocaleDateString();
             }
             else {
             arr[i][key] = arr[i][key].toTimeString();
             }
             arr[i].localDate = local
             classGroups.push(arr[i]);
             }*/
            return result;
        };

        function gotoEvent(event) {
            if (event && event.id) {
                $state.go('portal.calendar.event', {id: event.id});
            }
        }

        function refresh() {
            vm.events = [];
            getCalendarList(true);
        }
    }
})();