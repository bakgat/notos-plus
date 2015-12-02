/**
 * notosplus.library
 * CONTROLLER: BookDetailController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('BookDetailController', BookDetailController);

    /* @ngInject */
    function BookDetailController($state, common, config, $stateParams, _,
                                  Book, Dialog, Tag, Author, Publisher) {
        /*jshint validthis: true */
        var vm = this;
        var logger = common.logger;
        var $q = common.$q;
        var events = config.events;

        vm.loading = false;
        vm.isSaving = false;

        vm.book = null;
        vm.authors = [];
        vm.publishers = [];
        vm.tags = [];

        vm.cancel = cancel;
        vm.save = save;
        vm.remove = remove;

        vm.loadAuthors = loadAuthors;
        vm.loadPublishers = loadPublishers;
        vm.loadTags = loadTags;

        Object.defineProperty(vm, 'canSave', {get: canSave});

        activate();
        ////////////////////////
        function activate() {

            preloadTags();
            preloadAuthors();
            preloadPublishers();

            getRequestedBook();

            common.$broadcast(events.controllerActivateSuccess);
        }

        function preloadTags() {
            return Tag.getList().then(tagsCompleted);

            function tagsCompleted(response) {
                return vm.tags = response;
            }
        }

        function preloadAuthors() {
            return Author.getList().then(authorsCompleted);

            function authorsCompleted(response) {
                return vm.authors = response;
            }
        }

        function preloadPublishers() {
            return Publisher.getList().then(publishersCompleted);

            function publishersCompleted(response) {
                return vm.publishers = response;
            }
        }

        function loadTags(query) {
            return _.select(vm.tags, function (t) {
                return _.contains(t.name.toLowerCase(), query.toLowerCase());
            });
        }

        function loadAuthors(query) {
            return _.select(vm.authors, function (a) {
                return _.contains(a.last_name.toLowerCase(), query.toLowerCase());
            });
        }

        function loadPublishers(query) {
            return _.select(vm.publishers, function (p) {
                return _.contains(p.last_name.toLowerCase(), query.toLowerCase());
            });
        }

        function getRequestedBook() {
            var val = $stateParams.id;
            if (val === 'new') {
                vm.book = Book.one();
                vm.loading = false;

                return vm.book;
            }

            Book.one(val).get()
                .then(bookCompleted);

            function bookCompleted(data) {
                vm.book = data;
                vm.loading = false;
                return vm.book;
            }
        }

        function gotoBooks() {
            $state.go('library.books');
        }

        function canSave() {
            return !vm.isSaving;
        }

        function save() {
            if (!canSave()) {
                return $q.when(null);
            }

            vm.isSaving = true;

            return vm.book.save()
                .then(savedBook)
                .catch(failedSaveBook);

            function savedBook(response) {
                vm.isSaving = false;
                gotoBooks();
            }

            function failedSaveBook(error) {
                vm.isSaving = false;
                logger.error('Kon boek niet opslaan. [' + error + ']');
            }
        }

        function remove() {
            return Dialog.deleteDialog(vm.book.name)
                .then(removeBook);

            function removeBook() {
                vm.book.remove()
                    .then(removedBook)
                    .catch(failedRemoveBook);

                function removedBook() {
                    vm.book.clearCach();
                    logger.warning(vm.book.name + ' werd met succes verwijderd.');
                    gotoBooks();
                }

                function failedRemoveBook() {
                    Dialog.confirmationDialog('Verwijderen mislukt.',
                        'Het verwijderen van ' + vm.book.name + ' is mislukt. Probeer later opnieuw.');
                }
            }


        }

        function cancel() {
            gotoBooks();
        }

    }
})();