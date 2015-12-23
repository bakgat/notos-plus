/**
 * notosplus.library
 * FACTORY: Game
 */

(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .factory('Game', Game);

    /* @ngInject */
    function Game(HTTPCache, ProfileService) {
        var service = {
            getList: getList,
            one: one,
            ofIsbn: ofIsbn
        }

        return service;
        /////////////////

        function getList() {
            return getBase().getList();
        }

        function one(val) {
            return getBase().one(val);
        }

        function ofIsbn(isbn) {
            return getBase().one('isbn').one(isbn).get();
        }

        function getBase() {
            return HTTPCache.service('/organization/' + ProfileService.realm().id + '/games');
        }
    }
})();