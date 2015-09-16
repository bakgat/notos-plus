/**
 * notosplus.manage
 * CONTROLLER: UserAddController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .controller('UserDetailController', UserDetailController);

    /* @ngInject */
    function UserDetailController($state, $stateParams,
                                  common, config, User, Dialog, ProfileService) {
        /*jshint validthis: true */
        var vm = this;
        var logger = common.logger;
        var $q = common.$q;
        var events = config.events;


        vm.cancel = cancel;
        vm.hasChanges = false;
        vm.loading = false;
        vm.isSaving = false;
        vm.isResetPwd = false;
        vm.resetPwd = resetPassword;
        vm.save = save;
        vm.remove = remove;
        vm.user = null;
        vm.users = [];
        vm.defaultUsername = defaultUsername;
        vm.defaultDomain = ProfileService.current().domain_name;

        Object.defineProperty(vm, 'canSave', {get: canSave});

        activate();

        function activate() {
            //onDestroy();
            //onHasChanges();

            getRequestedUser();

            common.$broadcast(events.controllerActivateSuccess);
        }

        function cancel() {
            goToUsers();
        }

        function canSave() {
            return !vm.isSaving;
        }

        function getRequestedUser() {
            vm.loading = true;
            var val = $stateParams.id;
            if (val === 'new') {
                vm.user = User.one();
                vm.isResetPwd = true;
                vm.loading = false;

                return vm.user;
            }

            User.one(val).get()
                .then(function (data) {
                    if (data) {
                        vm.user = data;

                        vm.loading = false;
                        return vm.user;

                    } else {
                        logger.warning('Could not find user id = ' + val);
                        goToUsers();
                    }
                    vm.loading = false;
                })
                .catch(function (error) {
                    logger.error('Error while getting speaker id = ' + val + '; ' + error);
                    goToUsers();
                });
        }

        function goToUsers() {
            $state.go('manage.users');
        }

        function save() {

            if (!canSave()) {
                return $q.when(null);
            } // Must return a promise

            vm.isSaving = true;

            return vm.user.save().then(function () {
                vm.isSaving = false;

                goToUsers();
            }).catch(function (error) {
                vm.isSaving = false;
            });

        }

        function resetPassword() {
            return Dialog.resetPasswordDialog()
                .then(patchResettedPassword);

            function patchResettedPassword(data) {
                vm.user.one('password').patch(data)
                    .then(passwordWasResetted);

                function passwordWasResetted(user) {
                    common.logger.info('Paswoord opnieuw ingesteld voor ' + user.full_name);
                }
            }
        }

        function remove() {
            return Dialog.deleteDialog(vm.user.full_name)
                .then(removeUser);

            function removeUser() {
                vm.user.remove().then(function () {
                    vm.user.clearCache();
                    logger.warning(vm.user.full_name + ' werd met succes verwijderd.');
                    goToUsers();
                }).catch(function (response) {
                    Dialog.confirmationDialog('Verwijderen mislukt',
                        'Het verwijderen van ' + vm.user.full_name + ' is mislukt. Probeer het later opnieuw.');
                });
            }
        }

        function defaultUsername() {
            if(vm.user.username) {
                return vm.user.username;
            }
            return vm.user.first
        }
    }
})();