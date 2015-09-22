/**
 * notosplus.router
 * FACTORY: routehelper
 */

(function () {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routehelperConfig', routehelperConfig)
        .factory('routehelper', routehelper);

    routehelper.$inject = ['routehelperConfig', '$rootScope', '$state'];

    function routehelperConfig() {
        /* jshint validthis:true */
        this.config = {};

        this.$get = function () {
            return {
                config: this.config
            };
        };
    }

    function routehelper(routehelperConfig, $rootScope, $state) {
        var $urlRouterProvider = routehelperConfig.config.$urlRouterProvider;
        var $stateProvider = routehelperConfig.config.$stateProvider;

        var service = {
            configureStates: configureStates,
            states: states,
            get: get
        };

        init();

        return service;
        //////////////////

        function configureStates(states) {
            states.forEach(function (state) {
                if (state.config.title) {
                    state.config.ncyBreadcrumb = {
                        label: state.config.title.toLowerCase()
                    }
                }

                $stateProvider.state(state.state, state.config);
            });
        }

        function states() {
            return $state.get();
        }

        function get(pattern) {
            var result = null;
            states().forEach(function (state) {
                if (state.name === pattern) {
                    result = state;
                }
            });
            return result;
        }


        function init() {
            updateDocTitle();
            $urlRouterProvider.otherwise('/index/dashboard');
        }

        function updateDocTitle() {
            $rootScope.$on('$stateChangeSuccess',
                function (event, current, previous) {
                    var title = routehelperConfig.config.title + (current.title ? ' | ' + current.title : '');
                    $rootScope.title = title; // data bind to <title>
                    $rootScope.$state = current;
                }
            );
        }

    }
})();