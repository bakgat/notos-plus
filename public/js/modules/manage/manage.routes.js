/**
 * ROUTES: notosplus.manage
 */
(function () {
    'use strict';

    angular
        .module('notosplus.manage')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'manage',
                config: {
                    abstract: true,
                    url: '/manage',
                    title: 'Beheer'
                }
            },
            {
                state: 'manage.users',
                config: {
                    url: '/users',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/manage/users/users.html',
                            controller: 'UsersController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Gebruikers'
                }
            },
            {
                state: 'manage.users.detail',
                config: {
                    url: '/:id',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/manage/users/userdetail.html',
                            controller: 'UserDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Gebruiker bewerken'
                }
            }
        ];
    };
})();