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
    function BooksController(common, config, Book) {
        /*jshint validthis: true */
        var vm = this;

        vm.books = [];
        vm.filteredBooks = [];
        vm.filter = {
            terms: null
        }

        vm.loading = false;
        vm.refresh = refresh;


        var events = config.events;

        activate();
        ////////////

        function activate() {
            getBooks();
            common.$broadcast(events.controllerActivateSuccess);
        }

        function getBooks(forceRefresh) {
            vm.loading = true;

            if (forceRefresh) {
                if (vm.books) {
                    vm.books.clearCache();
                }
            }
            Book.getList().then(function (data) {
                vm.books = vm.filteredBooks = data;
                vm.loading = false;

                return vm.books;
            });
        }

        function refresh() {
            getBooks(true);
        }
    }
})();