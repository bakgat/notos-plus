/**
 * notosplus
 * DIRECTIVE: ntSideNavigation
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ntSideNavigation', ntSideNavigation);

    /* @ngInject */
    function ntSideNavigation($timeout) {
        var directive = {
            restrict: 'EA',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element) {
            $timeout(function () {
                $(element).metisMenu();
            })
        };
    }
})();

