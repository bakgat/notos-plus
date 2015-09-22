/**
 * notos-plus.library
 * FACTORY: WebsiteDraft
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('WebsiteDraft', WebsiteDraft);

    /* @ngInject */
    function WebsiteDraft() {
        var website = null;

        var service = {
            draft: draft,
            load: load,
            clear: clear,
            pull: pull
        }

        return service;
        /////////////////

        function draft(website) {
            this.website = website;
        }
        function load() {
            return this.website;
        }
        function clear() {
            this.website = null;
        }
        function pull() {
            var w = this.load();
            this.clear();
            return w;
        }
    }
})();