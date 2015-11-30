/**
 * notosplus.layout
 * CONTROLLER: shell
 */
(function () {
    'use strict';

    angular
        .module('notosplus.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController(Init, $rootScope, config, ProfileService, logger, $q) {
        /*jshint validthis: true */
        var vm = this;

        vm.busyMessage = 'Even geduld...';
        vm.isBusy = true;
        vm.showSplash = false;
        vm.avatar = null;
        vm.profile = {};
        vm.loggedInOrganization = null;

        var events = config.events;

        activate();
        /////////////

        function activate() {

            if (!Init.isInitialized()) {
                vm.showSplash = true;
                Init.initializing(true);

                //loadProfile //loadGroups (aka load realm defaults)
                $q.all([loadProfile()]).then(function () {
                    initialized();
                });


            }

            function loadProfile() {
                return getProfile().then(function (data) {
                    vm.profile = data;
                    vm.profile.fullName = vm.profile.first_name + ' ' + vm.profile.last_name;
                    //vm.profile.organizations = profile.organizations;

                    vm.avatar =
                        vm.profile.avatar ||
                        (vm.profile.gender === 'F' ? '/img/user/female.png' : '/img/user/male.png') ||
                        '/img/user/male.png';
                });
            }
        }

        function getProfile() {
            return ProfileService.current().then(function (data) {
                vm.profile = data;
                return vm.profile;
            });
        }

        function toggleSpinner(on) {
            vm.isBusy = on;
        }

        $rootScope.$on('$stateChangeStart',
            function (event, next, current) {
                //toggleSpinner(true);
            }
        );

        $rootScope.$on(events.controllerActivateSuccess,
            function (data) {
                toggleSpinner(false);
            }
        );
        $rootScope.$on(events.realmChanged,
            function (scope, realm) {
                vm.realm = realm;
                console.log(vm.realm);
            });

        function initialized() {
            vm.showSplash = false;

            logger.info('Welkom ' + vm.profile.first_name);
        }

    }
})();