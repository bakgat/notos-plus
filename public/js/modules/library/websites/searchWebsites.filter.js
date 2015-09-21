/**
 * notosplus.websites
 * FILTER: SearchWebsites
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .filter('SearchWebsites', SearchWebsites);

    /**
     *
     */
    function SearchWebsites(_) {
        return function(websites, terms) {
            terms = terms.split(' ');
            return _.select(websites, function(website) {
                return _.some(terms, function(t) {
                    return _.contains(website.name.toLowerCase(), t.toLowerCase()) ||
                        _.contains(website.url.toLowerCase(), t.toLowerCase());
                });
            });
        }
    }
})();