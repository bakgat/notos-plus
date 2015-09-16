/**
 * notosplus.widgets
 * DIRECTIVE: ntFa
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ntFa', ntFa);

    ntFa.$inject = [];

    function ntFa() {
        var directive = {
            restrict: 'E',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            var i = angular.element('<i class="fa" />');
            var classes = attrs.name.split(' ');

            angular.forEach(classes, function (value) {
                i.addClass('fa-' + value);
            });

            element.replaceWith(i);
        }
    }
})();

