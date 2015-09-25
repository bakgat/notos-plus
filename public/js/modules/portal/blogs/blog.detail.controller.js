/**
 * notosplus.portal
 * CONTROLLER: BlogDetail
 */
(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .controller('BlogDetailController', BlogDetailController);

    /* @ngInject */
    function BlogDetailController(config, common, $state, $stateParams, Blog, Dialog, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.blog = {};

        vm.cancel = cancel;
        vm.save = save;
        vm.loading = false;
        vm.isSaving = false;

        Object.defineProperty(vm, 'canSave', {get: canSave});

        var events = config.events;

        activate();
        //////////////


        function activate() {
            getRequestedBlog();
            common.$broadcast(events.controllerActivateSuccess);
        }

        function cancel() {
            gotoBlogs();
        }

        function canSave() {
            return !vm.isSaving;
        }

        function getRequestedBlog() {
            vm.loading = true;


            var val = $stateParams.id;
            if (val === 'new') {
                vm.blog = Blog.one();
                vm.loading = false;

                return vm.blog;
            }

            Blog.one(val).get()
                .then(blogCompleted)
                .catch(blogFailed);

            function blogCompleted(data) {
                if (data) {
                    vm.blog = data;
                    vm.loading = false;
                    return vm.blog;
                } else {
                    logger.error('Could not load blog id = ' + val);
                    gotoBlogs();
                }
            }

            function blogFailed(error) {
                logger.error('Error while getting blog id= ' + val + '; ' + error);
                gotoBlogs();
            }

        }

        function gotoBlogs() {
            $state.go('portal.blogs');
        }

        function save() {
            if (!canSave()) {
                return $q.when(null);
            } // Must return a promise

            vm.isSaving = true;

            return vm.blog.save().then(function () {
                vm.isSaving = false;

                gotoBlogs();
            }).catch(function (error) {
                vm.isSaving = false;
                logger.error('Kon blog niet opslaan. [' + error + ']');
            });
        }

        function remove() {
            return Dialog.deleteDialog(vm.blog.name + ' [' + vm.blog.url + ']')
                .then(removeBlog);

            function removeBlog() {
                vm.blog.remove().then(function () {
                    vm.blog.clearCache();
                    logger.warning(vm.blog.name + ' werd met succes verwijderd.');
                    gotoBlogs();
                }).catch(function (error) {
                    Dialog.confirmationDialog('Verwijderen mislukt',
                        'Het verwijderen van ' + vm.blog.name + ' is mislukt. Probeer het later opnieuw.');
                });
            }
        }
    }
})();