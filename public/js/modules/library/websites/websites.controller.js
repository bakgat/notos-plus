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
    function WebsitesController(common, config, $state, Website, $scope, SearchWebsitesFilter) {
        /*jshint validthis: true */
        var vm = this;

        vm.websites = [];
        vm.filteredWebsites = [];
        vm.gotoWebsite = gotoWebsite;

        vm.filter = {
            terms: null
        };

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

        $scope.$watch('vm.filter', doFilter, true);

        function doFilter() {
            if (vm.filter.terms && vm.filter.terms !== '') {
                vm.filteredWebsites = SearchWebsitesFilter(vm.websites, vm.filter.terms);
            } else {
                vm.filteredWebsites = vm.websites;
            }
        }
    }
})();
/*
 if (_.some(terms, function (t) {
 return nameContainsTerm(website.name, t) ||
 descriptionContainsTerm(website.description, t) ||
 objectivesContainsTerm(website.objectives, t);
 })) {
 addUnique(website, filtered);
 }

 */