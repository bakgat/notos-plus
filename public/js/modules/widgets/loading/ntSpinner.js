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
            var html = ['<tr ng-show="' + attrs.spinnerShow + '">',
                            '<td ',
                                (attrs.hasOwnProperty('colspan') ? 'colspan="' + attrs.colspan + '" ' : ''),
                            ' style="text-align:center">',
                                '<img src="/img/busy/busyatom.gif" style="width:40px;height:40px;">',
                            '</td>',
                        '</tr>'].join('');

            tbody.prepend(html);
        }
        function addSpinnerToElement(element, attrs) {
            var html = ['<div ng-show="' + attrs.spinnerShow + '" class="col-md-12 text-center">',
                    '<img src="/img/busy/busyatom.gif" style="width:40px;height:40px;">',
                '</div>',
                '<div class="clearfix"></div>'].join('');

            element.prepend(html);
        }
    }
})();

