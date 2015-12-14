/**
 * notosplus.portal
 * CONTROLLER: CalendarEventController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .controller('CalendarEventController', CalendarEventController);

    /* @ngInject */
    function CalendarEventController(common, config, CalendarEvent, $state, $stateParams, moment, Group) {
        /*jshint validthis: true */
        var vm = this;

        vm.loading = false;
        vm.gotoCalendarList = gotoCalendarList;
        vm.save = save;
        vm.cancel = cancel;
        vm.isSaving = false;
        vm.event = null;
        vm.classGroups = [];

        Object.defineProperty(vm, 'canSave', {get: canSave});


        var ev = config.events;

        activate();
        /////////////

        function activate() {
            getRequestedEvent();
            getGroups().then(function () {
                common.$broadcast(ev.controllerActivateSuccess);
            });

        }

        function getGroups() {
            return Group.ofKind('classgroups').getList().then(groupsLoaded);

            function groupsLoaded(response) {
                vm.classGroups = response;
                return vm.classGroups;
            }
        }

        function getRequestedEvent() {
            vm.loading = true;

            var val = $stateParams.id;
            if (val === 'new') {
                vm.event = CalendarEvent.one();
                vm.loading = false;

                return vm.event;
            }

            CalendarEvent.one(val).get()
                .then(eventComplete)
                .catch(eventFailed);

            function eventComplete(data) {
                if (data) {
                    data.start = new Date(data.start);
                    data.end = data.end ? new Date(data.end) : null;
                    console.log(data.end);
                    vm.event = data;
                    vm.loading = false;
                    return vm.event;
                }

            }

            function eventFailed(response) {
                logger.error('Error while getting calendarEvent id= ' + val + '; ' + error);
                gotoCalendarList();
            }
        }

        function gotoCalendarList() {
            $state.go('portal.calendar');
        }

        function canSave() {
            return !vm.isSaving;
        }

        function cancel() {
            gotoCalendarList();
        }

        function save() {
            if (!canSave()) {
                return $q.when(null);
            } // Must return a promise

            vm.isSaving = true;

            return vm.event.save().then(function () {
                vm.isSaving = false;

                gotoCalendarList();
            }).catch(function (error) {
                vm.isSaving = false;
                logger.error('Kon gebeurtenis niet opslaan. [' + error + ']');
            });
        }
    }
})();