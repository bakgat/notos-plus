/**
 * notosplus.widgets
 * FACTORY: spinnerService
 */

(function () {
    'use strict';

    angular
        .module('notosplus.widgets')
        .factory('spinnerService', spinnerService);

    /* @ngInject */
    function spinnerService() {
        var spinners = {};
        var service = {
            _register: register,
            _unregister: unregister,
            _unregisterAll: unregisterAll,
            show: show,
            hide: hide,
            showGroup: showGroup,
            hideGroup: hideGroup,
            showAll: showAll,
            hideAll: hideAll
        }

        return service;
        //////////////
        function register(data) {
            if(!data.hasOwnProperty('name')) {
                throw new Error('Spinner must specify a name when registering with the spinner service.');
            }
            if(spinners.hasOwnProperty(data.name)) {
                throw new Error('A spinner with the name "' + data.name + '" has already been registered.');
            }
            spinners[data.name] = data;
        }

        function unregister(name) {
            if(spinners.hasOwnProperty(name)) {
                delete spinners[name];
            }
        }

        function unregisterAll() {
            for(var name in spinners) {
                delete spinners[name];
            }
        }

        function show(name) {
            var spinner  = spinners[name];
            if(!spinner) {
                throw  new Error('No spinner named "' + name + '" is registered.');
            }
            spinner.show();
        }

        function hide(name) {
            var spinner  = spinners[name];
            if(!spinner) {
                throw  new Error('No spinner named "' + name + '" is registered.');
            }
            spinner.hide();
        }

        function showGroup(group) {
            var groupExists = false;
            for(var name in spinners) {
                var spinner = spinners[name];
                if(spinner.group === group) {
                    spinner.show();
                    groupExists = true;
                }
            }
            if(!groupExists) {
                throw new Error('No spinners found with group "' + group + '".');
            }
        }
        function hideGroup(group) {
            var groupExists = false;
            for(var name in spinners) {
                var spinner = spinners[name];
                if(spinner.group === group) {
                    spinner.hide();
                    groupExists = true;
                }
            }
            if(!groupExists) {
                throw new Error('No spinners found with group "' + group + '".');
            }
        }
        function showAll() {
            for(var name in spinners) {
                spinners[name].show();
            }
        }
        function hideAll() {
            for(var name in spinners) {
                spinners[name].hide();
            }
        }
    }
})();