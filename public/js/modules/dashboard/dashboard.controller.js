/**
 * notosplus.dashboard
 * CONTROLLER: DashboardController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController(common, config) {
        /*jshint validthis: true */
        var vm = this;

        var events = config.events;

        activate();
        /////////////

        function activate() {
            common.$broadcast(events.controllerActivateSuccess);
        }
    }
})();