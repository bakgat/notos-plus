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
            restrict: 'A',
            template: "<div class='table-responsive'><div ng-transclude></div></div>",
            transclude: true,
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            var interval = setInterval(function () {
                var tr = element.find("tr");

                angular.forEach(tr, function (i) {
                    var columns = angular.element(i).children();

                    if (columns.length < 1) {
                        // Row with no columns? Ignore it.
                        return;
                    }

                    var column0 = angular.element(columns[0]).children()[0] || columns[0];
                    var column1 = columns[1];

                    // Calculate heights of each <td>.
                    var height0 = (column0).offsetHeight;
                    var height1 = column1 ? column1.offsetHeight : 0;

                    // Calculate final height.
                    var height = Math.max(height0, height1);

                    // Set heights of <td> and <tr>.
                    columns[0].style.height = height + "px";
                    i.style.height = height + "px";

                    if (column1) {
                        column1.style.height = height + "px";
                    }

                    // If <td> heights have stabilized.
                    if (height0 !== 0 && height0 === height1) {
                        //clearInterval(interval);
                    }
                });
            }, 1000);
        }

    }
})();