/**
 * notosplus.data
 * FACTORY: repository.lookup
 */

(function () {
    'use strict';

    angular
        .module('notosplus.data')
        .factory('repository.lookup', RepositoryLookup);

    RepositoryLookup.$inject = ['breeze', 'model', 'repository.abstract', 'ProfileService'];

    function RepositoryLookup(breeze, model, AbstractRepository, ProfileService) {
        var entityName = 'role';
        var entityNames = model.entityNames;

        return {
            create: createRepo
        };
        //////////////////////

        function createRepo(manager) {
            var base = new AbstractRepository(manager, entityName);
            var cachedLookups;
            var repo = {
                getAll: getAll,
                get cachedData() {
                    return getCachedLookups();
                } //shortcut 'getter' syntax
            };

            return repo;
            ////////////

            function getAll() {
                return breeze.EntityQuery.from('Lookups')
                    .using(manager).execute()
                    .then(processLookups).catch(base.queryFailed);

                function processLookups(data) {
                    model.createNullos(manager);
                    //base.logger.info('Retrieved lookups', data);
                    base.zStorage.save();
                    return true;
                }
            }


            function getCachedLookups() {
                if(!cachedLookups) {
                    cachedLookups = {
                        roles: base.getAllLocal(entityNames.role, 'name')
                    }
                }
                return cachedLookups;
            }
        }
    }
})();