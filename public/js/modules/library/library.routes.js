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
                            templateUrl: 'js/modules/library/books/books.html'
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
                            templateUrl: 'js/modules/library/websites/websites.html'
                        }
                    },
                    title: 'Websites'
                }
            }
        ];
    };
})();