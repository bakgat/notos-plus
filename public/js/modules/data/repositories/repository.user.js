(function () {
    'use strict';

    angular
        .module('notosplus.data')
        .factory('repository.user', RepositoryUser);

    RepositoryUser.$inject = ['breeze', 'model', 'repository.abstract'];

    function RepositoryUser(breeze, model, AbstractRepository) {
        var entityName = model.entityNames.user;

        var orderBy = 'username';

        return {
            create: createRepo // factory function to create the repository
        };

        /* Implementation */
        function createRepo(manager) {
            var base = new AbstractRepository(manager, entityName);

            // Using the type is a little faster than the type name
            //var metadataStore = manager.metadataStore;
            // var userType = metadataStore.getEntityType(model.entityNames.user);

            var repo = {
                create: create,
                getAllLocal: getAllLocal,
                getById: base.getById,
                getEntityByIdOrFromWip: base.getEntityByIdOrFromWip,
                getPartials: getPartials,
            };

            return repo;
            /////////////

            function predicateForOrganization(orgId) {
                var kl = breeze.Predicate.create('relatedTo.reference.id', '==', orgId);
                var emp = breeze.Predicate.create('relatedTo.kind.name', '==', 'EMPLOYEE');
                var predicate = breeze.Predicate.and([kl, emp]);
                return predicate;
            }

            function create() {
                return manager.createEntity('User');
            }

            function getAllLocal(orgId, includeNullo) {
                return base.getAllLocal('User', orderBy, predicateForOrganization(orgId));
            }

            function getPartials(orgId, forceRemote) {
                var users;
                if (!forceRemote) {
                    users = getAllLocal(false, orgId);
                    if (users.length) {
                        return base.$q.when(users);
                    }
                }

                var predicate = predicateForOrganization(orgId);

                return breeze.EntityQuery.from('User')
                    .expand('relatedTo,relatedTo.kind')
                    .orderBy(orderBy)
                    .toType('User')
                    .where(predicate)
                    .using(manager).execute()
                    .then(querySucceeded).catch(base.queryFailed);

                function querySucceeded(data) {
                    users = data.results;
                    for (var i = users.length; i--;) {
                        users[i].isPartial = true;
                    }
                    base.logger.info('Retrieved [User Partials] from remote data source', users.length);
                    base.zStorage.save();

                    return users;
                }
            }

        }
    }
})();