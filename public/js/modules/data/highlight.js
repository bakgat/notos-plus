    /**
 * notosplus.core
 * FILTER: Highlight
 */
(function () {
    'use strict';

    angular
        .module('notosplus.data')
        .filter('Highlight', Highlight);

    /**
     *
     */
    function Highlight($sce) {
        return function (str, termsToHighlight) {
            if (termsToHighlight === '') {
                return $sce.trustAsHtml(str);
            }
            // Sort terms by length
            termsToHighlight = termsToHighlight.split(" ");
            termsToHighlight.sort(function (a, b) {
                return b.length - a.length;
            });

            // Regex to simultaneously replace terms
            var regex = new RegExp('(?!<[^>]*?>)' + termsToHighlight.join('|') + '(?![^<]*?</[^>]*?>)', 'gi');
            return $sce.trustAsHtml(str.replace(regex, '<span class="match">$&</span>'));
        };
    }

})();