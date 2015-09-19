/**
 * notosplus.data
 * FILTER: SearchSiblingsIncluded
 */
(function () {
    'use strict';

    angular
        .module('notosplus.curricula')
        .filter('SearchSiblingsIncluded', SearchSiblingsIncluded);

    /**
     *
     */
    function SearchSiblingsIncluded() {
        return function (input, searchText) {

            if (searchText === undefined)
                return input || false;

            var filtered = [],
                filteredIds = [];
            angular.forEach(input, function (item) {
                var lower_code = angular.lowercase(item.code);
                var lower_name = angular.lowercase(item.name);
                var lower_searchText = angular.lowercase(searchText);

                if (lower_name.indexOf(lower_searchText) > -1 ||
                    lower_code.indexOf(lower_searchText) > -1) {

                    if (item.parent_id) {
                        angular.forEach(input, function (pitem) {
                            if (pitem.id === item.parent_id) {
                                if (filteredIds.indexOf(pitem.id) === -1) {
                                    filtered.push(pitem);
                                    filteredIds.push(pitem.id);
                                }
                            }
                        });
                    }
                    if (filteredIds.indexOf(item.id) === -1) {
                        filtered.push(item);
                        filteredIds.push(item.id);
                    }
                    if (!item.parent_id) {
                        angular.forEach(input, function (chitem) {
                            if (chitem.parent_id === item.id) {
                                if (filteredIds.indexOf(chitem.id) === -1) {
                                    filtered.push(chitem);
                                    filteredIds.push(chitem.id);
                                }
                            }
                        });
                    }

                }
            });
            return filtered;
        }

    }
})();