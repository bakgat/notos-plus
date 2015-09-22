(function () {
    'use strict';

    var core = angular.module('notosplus.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.closeButton = true;
        toastr.options.progressBar = true;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        entitiesChanged: 'datacontext.entitiesChanged',
        entitiesImported: 'datacontext.entitiesImported',
        hasChangesChanged: 'datacontext.hasChangesChanged',
        storage: {
            error: 'store.error',
            storeChanged: 'store.changed',
            wipChanged: 'wip.changed'
        },
        loggedInOrganizationChanged: 'profile.loggedInAtChanged'
    };


    var config = {
        appErrorPrefix: '[noTos+ Fout] ',
        appTitle: 'noTos+',
        keyCodes: keyCodes,
        version: '1.0.0',
        events: events
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure($urlRouterProvider, $stateProvider,
                       routehelperConfigProvider, $breadcrumbProvider,
                       zStorageConfigProvider, zDirectivesConfigProvider,
                       RestangularProvider) {

        configureRouting();
        configureBreadcrumb();

        configureZStorage();
        configureZValidate();

        configureRestangular();


        function configureRouting() {
            routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
            routehelperConfigProvider.config.$stateProvider = $stateProvider;

            routehelperConfigProvider.config.title = config.appTitle;
        }

        function configureBreadcrumb() {
            $breadcrumbProvider.setOptions({
                prefixStateName: 'index',
                template: 'bootstrap3',
                includeAbstract: true
            });
        }

        function configureZStorage() {
            // Setup our Breeze-based offline storage
            zStorageConfigProvider.config = {
                // zStorage
                enabled: false,
                key: 'noTosPlus',
                events: config.events.storage,

                // zStorageWip
                wipKey: 'noTosPlus.wip',
                appErrorPrefix: config.appErrorPrefix,
                newGuid: breeze.core.getUuid,

                // zStorageCore
                version: config.version
            };
        }

        function configureZValidate() {
            zDirectivesConfigProvider.zValidateTemplate =
                '<span class="invalid"><i class="fa fa-warning-sign"></i>' +
                'Onbegrijpelijk! %error%</span>';

        }

        function configureRestangular() {
            var baseUrl = '/api';

            RestangularProvider.setBaseUrl(baseUrl);
        }
    }
})();