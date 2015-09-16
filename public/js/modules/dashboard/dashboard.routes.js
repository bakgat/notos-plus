/**
 * ROUTES: notosplus.dashboard
 */
(function () {
    'use strict';

    angular
        .module('notosplus.dashboard')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'index',
                config: {
                    abstract: true,
                    url: '/index',
                    ncyBreadcrumb: {
                        label: 'start'
                    }
                }
            },
            {
                state: 'index.dashboard',
                config: {
                    url: '/dashboard',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/dashboard/dashboard.html'
                        }
                    },
                    title: 'Dashboard',
                    ncyBreadcrumb: {
                        label: 'Dashboard'
                    }
                }
            }
        ];
    };
})();