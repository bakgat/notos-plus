angular
    .module('notosplus.core', [
        //Angular
        'ngAnimate', 'ngSanitize', 'ngResource',

        //3rd party
        'ui.bootstrap',
        'ncy-angular-breadcrumb',
        'breeze.angular',   // tells breeze to use $q instead of Q.js
        'breeze.directives',// breeze validation directive (zValidate),
        'ngzWip',
        'ngplus',
        'restangular',
        'checklist-model',
        'ngTagsInput',
        'datePicker',
        'ngFileUpload',

        //cross app modules
        'blocks.exception',
        'blocks.logger',
        'blocks.router'
    ]);