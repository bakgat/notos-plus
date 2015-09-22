/**
 * notosplus.curricula
 * CONTROLLER: SelectObjectivesController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.curricula')
        .controller('SelectObjectivesController', SelectObjectivesController);

    /* @ngInject */
    function SelectObjectivesController(common, config, WebsiteDraft, Curriculum,
                                        $state, $scope, SearchSiblingsIncludedFilter) {
        /*jshint validthis: true */
        var vm = this;

        vm.objectives = [];
        vm.filtered = [];
        vm.selectedItems = [];
        vm.website = null;

        vm.save = save;
        vm.cancel = cancel;
        vm.compareObjective = compareObjective;

        vm.itemsPerPage = 10;
        vm.currentPage = 1;
        vm.totalItems = 0;

        vm.search = '';

        var events = config.events;

        activate();
        ////////////

        function activate() {
            getItems().then(function () {
                loadDraft();
                common.$broadcast(events.controllerActivateSuccess);
            });

            /*
             * Search functions
             */
            $scope.$watch('vm.search', function (term) {
                if (vm.objectives) {
                    vm.filtered = SearchSiblingsIncludedFilter(vm.objectives, term);
                    vm.totalItems = vm.filtered.length;
                }
            });
        }

        function getItems() {
            return Curriculum.objectives('wiskunde').then(function (data) {
                vm.totalItems = data.length;
                return vm.objectives = vm.filtered = data;
            });
        }

        function loadDraft() {
            vm.website = WebsiteDraft.load();
            if (vm.website && vm.website.objectives) {
                return vm.selectedItems = vm.website.objectives;
            }
        }

        function compareObjective(o1, o2) {
            return o1.id === o2.id;
        }

        function save() {
            vm.website.objectives = vm.selectedItems;
            WebsiteDraft.draft(vm.website);
            gotoWebsite();
        }

        function cancel() {
            gotoWebsite();
        }

        function gotoWebsite() {
            $state.go('library.websites.detail', {id: vm.website.id});
        }
    }
})();