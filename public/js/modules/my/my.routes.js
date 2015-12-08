/**
 * ROUTES: notosplus.my
 */
(function () {
    'use strict';

    angular
        .module('notosplus.my')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'my',
                config: {
                    abstract: true,
                    url: '/my',
                    title: 'mijn'
                }
            },
            {
                state: 'my.profile',
                config: {
                    url: '/profile',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/my/profile.html',
                            controller: 'ProfileController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Profiel'
                }
            }
        ];
    };
})();