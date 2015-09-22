/**
 * notosplus.library
 * CONTROLLER: BooksController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('BooksController', BooksController);

    /* @ngInject */
    function BooksController(common, config) {
        /*jshint validthis: true */
        var vm = this;

        vm.refresh = refresh;

        var events = config.events;

        activate();
        ////////////

        function activate() {
            common.$broadcast(events.controllerActivateSuccess);
        }

        function getBooks(forceRefresh) {

        }

        function refresh() {
            getBooks(true);
        }
    }
})();