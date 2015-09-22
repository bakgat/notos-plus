/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('notosplus.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('_', window._);
})();