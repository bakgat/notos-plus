/**
 * notosplus.widgets
 * DIRECTIVE: ntPagination
 */
(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .directive('ntPagination', ntPagination);

    /* @ngInject */
    function ntPagination($compile) {
        var directive = {
            restrict: 'EA',
            scope: {
                totalItems: '=',
                itemsPerPage: '=',
                currentPage: '='
            },
            link: linkFunc,
            controller: PaginateController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            var pagination = angular.element('<pagination />')
            pagination.attr('data-boundary-links', true);
            pagination.attr('data-total-items', 'totalItems');
            pagination.attr('data-items-per-page', 'itemsPerPage');
            pagination.attr('data-max-size', 5);
            pagination.attr('data-ng-model', 'currentPage');
            pagination.attr('data-previous-text', '‹');
            pagination.attr('data-next-text', '›');
            pagination.attr('data-first-text', '«');
            pagination.attr('data-last-text', '»');
            pagination.attr('data-ng-hide', 'hide');
            if (attrs['class']) {
                pagination.attr('class', attrs['class']);
            }

            $compile(pagination)(scope);
            element.replaceWith(pagination);
        }

        /* @ngInject */
        function PaginateController($scope) {
            var vm = this;

            vm.hide = false;
            vm.itemsPerPage = 10;
            vm.currentPge = 0;

            $scope.$watch('vm.totalItems', function () {
                vm.hide = (vm.totalItems <= vm.itemsPerPage);
            });
        }
    }
})();

