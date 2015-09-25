/**
 * ROUTES: notosplus.portal
 */
(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'portal',
                config: {
                    abstract: true,
                    url: '/portal'
                },
                title: 'Portaal'
            },
            {
                state: 'portal.blogs',
                config: {
                    url: '/blogs',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/portal/blogs/blogs.html',
                            controller: 'BlogsController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Blogs'
                }
            },
            {
                state: 'portal.blogs.detail',
                config: {
                    url: '/:id',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/portal/blogs/blogdetail.html',
                            controller: 'BlogDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Blog bewerken'
                }
            }
        ];
    };
})();