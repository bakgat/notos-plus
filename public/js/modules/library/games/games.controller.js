/**
 * notosplus.library
 * CONTROLLER: GamesController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('GamesController', GamesController);

    /* @ngInject */
    function GamesController(common, config, Game, $state, $scope, SearchGamesFilter) {
        /*jshint validthis: true */
        var vm = this;

        vm.games = [];
        vm.filteredGames = [];
        vm.filter = {
            terms: null
        }

        vm.gotoGame = gotoGame;

        vm.loading = false;
        vm.refresh = refresh;


        var events = config.events;

        activate();
        ////////////
        $scope.$watch('vm.filter', doFilter, true);

        function activate() {
            getGames();
            common.$broadcast(events.controllerActivateSuccess);
        }

        function getGames(forceRefresh) {
            vm.loading = true;

            if (forceRefresh) {
                if (vm.games) {
                    vm.games.clearCache();
                }
            }
            Game.getList().then(function (data) {
                vm.games = vm.filteredGames = data;
                vm.loading = false;

                return vm.games;
            });
        }

        function gotoGame(game) {
            if(game && game.id) {
                $state.go('library.games.detail', {id:game.id});
            }
        }

        function refresh() {
            getGames(true);
        }

        function doFilter() {
            if (vm.filter.terms && vm.filter.terms !== '') {
                vm.filteredGames = SearchGamesFilter(vm.games, vm.filter.terms);
            } else {
                vm.filteredGames = vm.games;
            }
        }
    }
})();