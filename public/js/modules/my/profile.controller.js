/**
 * notosplus.my
 * CONTROLLER: ProfileController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.my')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController(ProfileService, Dialog, common) {
        /*jshint validthis: true */
        var vm = this;
        vm.profile = null;
        vm.resetPwd = resetPassword;

        activate();
        /////////////////
        function activate() {
            return getCurrentProfile();
        }

        function getCurrentProfile() {
            return ProfileService.current().then(profileLoaded);

            function profileLoaded(response) {
                vm.profile = response;
                console.log(vm.profile);
                return vm.profile;
            }
        }

        function resetPassword() {
            return Dialog.resetPasswordDialog()
                .then(patchResettedPassword);

            function patchResettedPassword(data) {
                ProfileService.resetPassword(data)
                    .then(passwordWasResetted);

                function passwordWasResetted(user) {
                    if (user) {
                        common.logger.info('Paswoord opnieuw ingesteld voor ' + user.full_name);
                    }
                }
            }
        }
    }
})();