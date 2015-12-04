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
    function BooksController(common, config, Book, $state, $scope, SearchBooksFilter) {
        /*jshint validthis: true */
        var vm = this;

        vm.books = [];
        vm.filteredBooks = [];
        vm.filter = {
            terms: null
        }

        vm.gotoBook = gotoBook;

        vm.loading = false;
        vm.refresh = refresh;


        var events = config.events;

        activate();
        ////////////
        $scope.$watch('vm.filter', doFilter, true);

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

        function gotoBook(book) {
            if(book && book.id) {
                $state.go('library.books.detail', {id:book.id});
            }
        }

        function refresh() {
            getBooks(true);
        }

        function doFilter() {
            if (vm.filter.terms && vm.filter.terms !== '') {
                vm.filteredBooks = SearchBooksFilter(vm.books, vm.filter.terms);
            } else {
                vm.filteredBooks = vm.books;
            }
        }
    }
})();