/**
 * notosplus.auth
 * FACTORY: Profile
 */

(function () {
    'use strict';

    angular
        .module('notosplus.auth')
        .factory('ProfileService', ProfileService);

    /* @ngInject */
    function ProfileService($http, exception, $q, common, config, HTTPCache) {
        var cache = null;
        var _realm = null;
        var events = config.events;

        var service = {
            current: current,
            realm: realm,
            setRealm: setRealm,
            resetPassword: resetPassword
        };

        return service;
        //////////////

        function current(forceRefresh) {
            if (cache && !forceRefresh) {
                //should return promise
                return $q.when(cache);
            }

            return $http.get('/api/user/profile')
                .then(getCurrentComplete)
                .catch(function (message) {
                    exception.catcher('Profiel van de huidige gebruiker opvragen, lukt niet.')(message);
                });


            function getCurrentComplete(response, status, headers, config) {
                cache = response.data;
                service.setRealm(response.data.realm);
                return response.data;
            }

        }

        function realm() {
            return _realm; //synchronous, as async data was here at initialization
        }

        function setRealm(realm) {
            //realm.domain_name= realm.domain_name.replace(/\./g, '_');
            _realm = realm;
            common.$broadcast(events.realmChanged, realm);
        }

        function resetPassword(value) {
            if (cache && cache.id && service.realm() && service.realm().id) {
                return HTTPCache.service('/organization').one(service.realm().id)
                    .one('user', cache.id)
                    .one('password')
                    .patch(value);
            } else {
                return $q.when(false);
            }
        }
    }
})();