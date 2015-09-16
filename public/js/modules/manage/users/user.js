/**
 * notosplus.manage
 * FACTORY: User
 */

(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .factory('User', User);


    /* @ngInject */
    function User(HTTPCache, ProfileService) {

        var service = HTTPCache.service('/organization/' + ProfileService.realm().id + '/user');


        return service;



        //return $resource('/api/user/:id');

        /*var service = {
            getList: getList,
            get: get,
            save: save,
            remove: remove
        };

        return service;
        //////////////////

        function getList() {
            return Restangular.all('user').getList();
        }

        function get(id) {
            return Restangular.one('user', id).get()
                .then(function (data) {
                    var user = data;
                    return user;
                });
        }

        function save(user) {
            if (user.hasOwnProperty('id') && user.id) {
                return Restangular.post(user);
            } else {
                return Restangular.one('user').post(user);
            }
        }

        function remove() {
            if (user.hasOwneProperty('id') && user.id) {
                return Restangular.one('user', user.id).remove();
            }
        }*/
    }
})();