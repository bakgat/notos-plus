/**
 * notosplus.library
 * CONTROLLER: GameDetailController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('GameDetailController', GameDetailController);

    /* @ngInject */
    function GameDetailController($state, common, config, $stateParams, _,
                                  Game, Dialog, Tag, Author, Publisher) {
        /*jshint validthis: true */
        var vm = this;
        var logger = common.logger;
        var $q = common.$q;
        var events = config.events;

        vm.loading = false;
        vm.isSaving = false;

        vm.image_changed = false;

        vm.game = null;
        vm.publishers = [];
        vm.tags = [];

        vm.cancel = cancel;
        vm.save = save;
        vm.remove = remove;

        vm.loadPublishers = loadPublishers;
        vm.loadTags = loadTags;
        vm.insertImage = insertImage;

        Object.defineProperty(vm, 'canSave', {get: canSave});

        activate();
        ////////////////////////
        function activate() {

            preloadTags();
            preloadPublishers();

            getRequestedGame();

            common.$broadcast(events.controllerActivateSuccess);
        }

        function preloadTags() {
            return Tag.getList().then(tagsCompleted);

            function tagsCompleted(response) {
                return vm.tags = response;
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


        function loadPublishers(query) {
            return _.select(vm.publishers, function (p) {
                return _.contains(p.last_name.toLowerCase(), query.toLowerCase());
            });
        }

        function getRequestedGame() {
            var val = $stateParams.id;
            if (val === 'new') {
                vm.game = Game.one();
                vm.loading = false;

                return vm.game;
            }

            Game.one(val).get()
                .then(gameCompleted);

            function gameCompleted(data) {
                vm.game = data;
                vm.loading = false;
                return vm.game;
            }
        }

        function gotoGames() {
            $state.go('library.games');
        }

        function canSave() {
            return !vm.isSaving;
        }

        function save() {
            if (!canSave()) {
                return $q.when(null);
            }

            vm.isSaving = true;

            return vm.game.save()
                .then(savedGame)
                .catch(failedSaveGame);

            function savedGame(response) {
                vm.isSaving = false;
                gotoGames();
            }

            function failedSaveGame(error) {
                vm.isSaving = false;
                logger.error('Kon boek niet opslaan. [' + error + ']');
            }
        }

        function remove() {
            return Dialog.deleteDialog(vm.game.name)
                .then(removeGame);

            function removeGame() {
                vm.game.remove()
                    .then(removedGame)
                    .catch(failedRemoveGame);

                function removedGame() {
                    vm.game.clearCach();
                    logger.warning(vm.game.name + ' werd met succes verwijderd.');
                    gotoGames();
                }

                function failedRemoveGame() {
                    Dialog.confirmationDialog('Verwijderen mislukt.',
                        'Het verwijderen van ' + vm.game.name + ' is mislukt. Probeer later opnieuw.');
                }
            }


        }

        function cancel() {
            gotoGames();
        }


        function insertImage() {
            return Dialog.selectImageDialog('game')
                .then(insertImage);

            function insertImage(response) {
                vm.game.image = response.file;
                vm.image_changed = true;
            }
        }

    }
})();