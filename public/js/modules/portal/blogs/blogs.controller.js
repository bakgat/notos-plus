/**
 * notosplus.portal
 * CONTROLLER: BlogsController
 */
(function () {
    'use strict';

    angular
        .module('notosplus.portal')
        .controller('BlogsController', BlogsController);

    /* @ngInject */
    function BlogsController(common, config, Blog, $state) {
        /*jshint validthis: true */
        var vm = this;

        vm.blogs = [];
        vm.filteredBlogs = [];
        vm.filter = {
            terms: null
        }

        vm.loading = false;
        vm.refresh = refresh;
        vm.gotoBlog = gotoBlog;

        var events = config.events;

        activate();
        /////////////

        function activate() {
            getBlogs();
            common.$broadcast(events.controllerActivateSuccess);
        }

        function getBlogs(forceRefresh) {
            vm.loading = true;

            if (forceRefresh) {
                if (vm.blogs) {
                    vm.blogs.clearCache();
                }
            }

            Blog.getList().then(blogsCompleted);

            function blogsCompleted(response) {
                vm.blogs = vm.filteredBlogs = response;
                vm.loading = false;
                return vm.blogs;
            }
        }

        function refresh() {
            getBlogs(true);
        }

        function gotoBlog(blog) {
            if (blog && blog.id) {
                $state.go('portal.blogs.detail', {id: blog.id});
            }
        }
    }
})();