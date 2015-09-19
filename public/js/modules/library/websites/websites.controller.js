/**
 * notosplus.library
 * CONTROLLER: WebsitesController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('WebsitesController', WebsitesController);

    /* @ngInject */
    function WebsitesController(common, config, $state, Website) {
        /*jshint validthis: true */
        var vm = this;

        vm.websites = [];
        vm.filteredWebsites = [];
        vm.gotoWebsite = gotoWebsite;

        var events = config.events;

        activate();
        ////////////////

        function activate() {
            common.$broadcast(events.controllerActivateSuccess);
            getWebsites();
        }

        function getWebsites(forceRefresh) {
            vm.loading = true;

            if (forceRefresh) {
                if (vm.websites) {
                    vm.websites.clearCache();
                }
            }
            Website.getList().then(function (data) {
                vm.websites = vm.filteredWebsites = data;
                vm.loading = false;
                return vm.websites;
            });
        }

        function gotoWebsite(website) {
            if (website && website.id) {
                $state.go('library.websites.detail', {id: website.id});
            }
        }

    }
})();