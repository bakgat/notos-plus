/**
 * notosplus.widgets
 * DIRECTIVE: ionRangeSlider
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ionRangeSlider', ionRangeSlider);

    /* @ngInject */
    function ionRangeSlider() {
        var directive = {
            restrict: 'A',
            scope: {
                rangeOptions: '='
            },
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, elem, attrs) {
            elem.ionRangeSlider(scope.rangeOptions);
        }

    }
})();

