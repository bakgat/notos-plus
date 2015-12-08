/**
 * notosplus.widgets
 * DIRECTIVE: autoScroll
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('autoScroll', autoScroll);

    /* @ngInject */
    function autoScroll($document, $timeout, $state, $rootScope) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope) {
            scope.okSaveScroll = true;

            scope.scrollPos = {};

            $document.bind('scroll', function () {
                if (scope.okSaveScroll) {
                    scope.scrollPos[$state.current.name] = $(window).scrollTop();
                }
            });

            scope.scrollClear = function (path) {
                scope.scrollPos[path] = 0;
            };

            $rootScope.$on('$stateChangeSuccess', function () {
                $timeout(function () {
                    $(window).scrollTop(scope.scrollPos[$state.current.name] ? scope.scrollPos[$state.current.name] : 0);
                    scope.okSaveScroll = true;
                }, 0);
            });

            $rootScope.$on('$stateChangeStart', function () {
                scope.okSaveScroll = false;
            });
        }
    }
})();

