/**
 * notosplus.widgets
 * DIRECTIVE: ntSpinner
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ntSpinner', ntSpinner);

    /* @ngInject */
    function ntSpinner() {
        var directive = {
            restrict: 'EA',
            compile: compile
        };

        return directive;

        //////////////////////
        function compile(elem, attrs) {
            if (elem[0].tagName === 'TABLE') {
                addSpinnerToTBody(elem, attrs);
            } else {
                addSpinnerToElement(elem, attrs);
            }
        }

        function addSpinnerToTBody(element, attrs) {
            var tbody = element.find('tbody');
            var html = ['<tr data-ng-show="' + attrs.spinnerShow + '">',
                '<td ',
                (attrs.hasOwnProperty('colspan') ? 'colspan="' + attrs.colspan + '" ' : ''),
                ' style="text-align:center">',
                makeSpinner().html(),
                '</td>',
                '</tr>'].join('');

            tbody.prepend(html);
        }

        function addSpinnerToElement(element, attrs) {
            var html = ['<div data-ng-show="' + attrs.spinnerShow + '" class="col-md-12 text-center">',
                makeSpinner().html(),
                '</div>',
                '<div class="clearfix"></div>'].join('');

            element.prepend(html);
        }

        function makeSpinner() {
            var wrapper = angular.element('<div/>').addClass('loading m-b-md m-t-md');
            var spinner = angular.element('<div>').addClass('sk-spinner sk-spinner-cube-grid');
            for (var i = 0; i < 8; i++) {
                var cube = angular.element('<div>').addClass('sk-cube');
                spinner.append(cube);
            }
            var text = angular.element('<div>').addClass('text-center small description m-t-xs').append('bezig met laden...');

            wrapper.append(spinner);
            wrapper.append(text);

            return wrapper;
        }
    }
})();

