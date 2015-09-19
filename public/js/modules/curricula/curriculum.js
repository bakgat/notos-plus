/**
 * notosplus.curricula
 * FACTORY: Curriculum
 */

(function () {
    'use strict';

    angular
        .module('notosplus.curricula')
        .factory('Curriculum', Curriculum);

    /* @ngInject */
    function Curriculum(HTTPCache) {

        var service= {
            get: get,
            objectives: objectives
        }


        return service;
        //////////////

        function get(course) {
            return HTTPCache.one('/curricula', course);
        }
        function objectives(course) {
            return get(course).getList('objectives');
        }
    }
})();