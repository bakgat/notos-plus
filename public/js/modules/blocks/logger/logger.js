/**
 * blocks.logger
 * FACTORY: logger
 */

(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    function logger($log, toastr) {
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning,

            removed: removed,
            saved: saved,

            // straight to console; bypass toastr
            log: $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Fout: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Succes: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Let op: ' + message, data);
        }

        function removed(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Verwijderd: ' + message, data);
        }

        function saved(message, data, title) {
            toastr.success(message, title);
            $log.info('Bewaard: ' + message, data);
        }
    }
})();