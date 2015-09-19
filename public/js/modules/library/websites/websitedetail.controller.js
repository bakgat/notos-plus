/**
 * notosplus.library
 * CONTROLLER: WebsiteDetailController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .controller('WebsiteDetailController', WebsiteDetailController);

    /* @ngInject */
    function WebsiteDetailController($state, $stateParams,
                                     common, config, $scope,
                                     Website, Dialog, WebsiteDraft) {
        /*jshint validthis: true */
        var vm = this;
        var logger = common.logger;
        var $q = common.$q;
        var events = config.events;

        vm.cancel = cancel;
        vm.hasChanges = false;
        vm.loading = false;
        vm.isSaving = false;
        vm.save = save;
        vm.remove = remove;
        vm.gotoObjectives = gotoObjectives;
        vm.website = null;
        vm.objectives_changed = false;



        Object.defineProperty(vm, 'canSave', {get: canSave});

        activate();
        ////////////

        function activate() {

            getRequestedWebsite();

            common.$broadcast(events.controllerActivateSuccess);
        }

        function cancel() {
            gotoWebsites();
        }

        function canSave() {
            return !vm.isSaving;
        }

        function getRequestedWebsite() {
            vm.loading = true;

            if(WebsiteDraft.load()) {
                vm.website = WebsiteDraft.pull();
                vm.objectives_changed = true;
                vm.loading = false;
                return vm.website;
            }

            var val = $stateParams.id;
            if (val === 'new') {
                vm.website = Website.one();
                vm.loading = false;

                return vm.website;
            }


            Website.one(val).get()
                .then(function (data) {
                    if (data) {
                        vm.website = data;

                        vm.loading = false;
                        return vm.website;
                    } else {
                        logger.warning('Could not find website id = ' + val);
                        gotoWebsites();
                    }
                    vm.loading = false;
                })
                .catch(function (error) {
                    logger.error('Error while getting website id= ' + val + '; ' + error);
                    gotoWebsites();
                })
        }

        function gotoWebsites() {
            $state.go('library.websites');
        }

        function save() {
            if (!canSave()) {
                return $q.when(null);
            } // Must return a promise

            vm.isSaving = true;

            return vm.website.save().then(function () {
                vm.isSaving = false;

                gotoWebsites();
            }).catch(function (error) {
                vm.isSaving = false;
                logger.error('Kon website niet opslaan. [' + error + ']');
            });
        }

        function remove() {
            return Dialog.deleteDialog(vm.website.name + ' [' + vm.website.url + ']')
                .then(removeWebsite);

            function removeWebsite() {
                vm.website.remove().then(function () {
                    vm.website.clearCache();
                    logger.warning(vm.website.name + ' werd met succes verwijderd.');
                    gotoWebsites();
                }).catch(function (error) {
                    Dialog.confirmationDialog('Verwijderen mislukt',
                        'Het verwijderen van ' + vm.website.name + ' is mislukt. Probeer het later opnieuw.');
                });
            }
        }

        function gotoObjectives() {
            WebsiteDraft.draft(vm.website);
            $state.go('library.websites.detail.objectives');
        }

    }
})();