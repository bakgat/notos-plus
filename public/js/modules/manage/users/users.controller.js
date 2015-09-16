/**
 * notosplus.manage
 * CONTROLLER: UsersController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .controller('UsersController', UsersController);


    /* @ngInject */
    function UsersController($state, config, common, User) {
        /*jshint validthis: true */
        var vm = this;

        var keyCodes = config.keyCodes;
        var events = config.events;

        vm.filteredUsers = [];
        vm.gotoUser = gotoUser;
        vm.refresh = refresh;
        vm.search = search;
        vm.userSearch = '';
        vm.users = [];


        activate();

        function activate() {
            common.$broadcast(events.controllerActivateSuccess);
            getUsers();
        }

        function applyFilter() {
            vm.filteredUsers = vm.users.filter(userFilter);
        }


        function getUsers(forceRefresh) {
            vm.loading = true;

            if (forceRefresh) {
                if (vm.users) {
                    vm.users.clearCache();
                }
            }
            User.getList().then(function (data) {
                vm.users = vm.filteredUsers = data;
                vm.loading = false;

                return vm.users;
            });
        }


        function gotoUser(user) {
            if (user && user.id) {
                $state.go('manage.users.detail', {id: user.id});
            }
        }

        function refresh() {
            vm.userSearch = '';
            getUsers(true);
        }

        function search($event) {
            if ($event.keyCode === keyCodes.esc) {
                vm.userSearch = '';
            }
            applyFilter();
        }

        function userFilter(user) {
            var isMatch = true;
            if (vm.userSearch) {
                isMatch = common.textContains(user.name, vm.userSearch);
                isMatch |= common.textContains(user.username, vm.userSearch);
            }

            return isMatch;
        }
    }
})();