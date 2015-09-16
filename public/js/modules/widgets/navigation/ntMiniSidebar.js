/**
 * notosplus.widgets
 * DIRECTIVE: ntMiniSideBar
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ntMiniSidebar', ntMiniSidebar);

    function ntMiniSidebar() {
        var directive = {
            restrict: 'A',
            template: [
                '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="" ng-click="vm.minimalize()">',
                '<i class="fa fa-bars"></i>',
                '</a>'
            ].join(''),

            controller: MinimizeController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;
        //////////////////////

        /* @ngInject */
        function MinimizeController($timeout) {
            var vm = this;
            vm.minimalize = minimalize;

            //////////////////////////////////
            function minimalize() {
                angular.element('body').toggleClass('mini-navbar');
                if (!angular.element('body').hasClass('mini-navbar') || angular.element('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    angular.element('#side-menu').hide();
                    // For smoothly turn on menu
                    $timeout(
                        function () {
                            angular.element('#side-menu').fadeIn(500);
                        }, 100);
                } else if (angular.element('body').hasClass('fixed-sidebar')) {
                    angular.element('#side-menu').hide();
                    $timeout(
                        function () {
                            angular.element('#side-menu').fadeIn(500);
                        }, 300);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    angular.element('#side-menu').removeAttr('style');
                }
            }
        }
    }
})();

