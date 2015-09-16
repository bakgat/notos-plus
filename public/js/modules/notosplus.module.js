(function() {
    'use strict';

    angular
        .module('notosplus', [
            //shared modules
            'notosplus.core',
            'notosplus.widgets',
            'notosplus.auth',
            'notosplus.data',
            'notosplus.layout',

            //app modules
            'notosplus.dashboard',
            'notosplus.manage',
            'notosplus.library'
        ]);
})();