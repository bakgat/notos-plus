/**
 * notosplus.widgets
 * DIRECTIVE: fixedFirstColumn
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('fixedFirstColumn', fixedFirstColumn);

    /* @ngInject */
    function fixedFirstColumn() {
        var directive = {
            restrict: 'EA',
            scope: {},
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {

        }

    }
})();

