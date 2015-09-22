/**
 * ROUTES: notosplus.library
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'library',
                config: {
                    abstract: true,
                    url: '/library'
                }
            },
            {
                state: 'library.books',
                config: {
                    url: '/books',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/library/books/books.html',
                            controller: 'BooksController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Boeken'
                }
            },
            {
                state: 'library.websites',
                config: {
                    url: '/websites',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/library/websites/websites.html',
                            controller: 'WebsitesController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Websites'
                }
            },
            {
                state: 'library.websites.detail',
                config: {
                    url: '/:id',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/library/websites/websitedetail.html',
                            controller: 'WebsiteDetailController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Website bewerken'
                }
            },
            {
                state: 'library.websites.detail.objectives',
                config: {
                    url:'/objectives',
                    views: {
                        'content@': {
                            templateUrl: 'js/modules/curricula/objectives/select_objectives.html',
                            controller: 'SelectObjectivesController',
                            controllerAs: 'vm'
                        }
                    }
                },
                title: 'Doelen selecteren'
            }
        ];
    };
})();