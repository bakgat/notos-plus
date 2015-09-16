/**
 * notosplus.core
 * FACTORY: bootstrap.dialog
 */

(function () {
    'use strict';

    angular
        .module('notosplus.core')
        .factory('Dialog', modalDialog);

    /* @ngInject */
    function modalDialog($modal, $templateCache) {
        var service = {
            deleteDialog: deleteDialog,
            confirmationDialog: confirmationDialog,
            resetPasswordDialog: resetPasswordDialog
        };

        registerModelDialog($templateCache);
        registerResetPasswordDialog($templateCache);

        return service;
        ////////////////

        function deleteDialog(itemName) {
            var title = 'Ben je zeker?';
            itemName = itemName || 'item';
            var msg = 'Verwijder ' + itemName + '?';

            return confirmationDialog(title, msg);
        }

        function confirmationDialog(title, msg, okText, cancelText) {
            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            okText: okText,
                            cancelText: cancelText,
                            password: '',
                            confirmPassword: ''
                        };
                    }
                }
            };

            return $modal.open(modalOptions).result;
        }

        function resetPasswordDialog(title, msg, okText, cancelText) {
            var modalOptions = {
                templateUrl: 'resetPasswordDialog.tpl.html',
                controller: ResetPasswordModalInstance,
                keyboard: true,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            okText: okText,
                            cancelText: cancelText,
                            password: '',
                            confirmPassword: ''
                        };
                    }
                }
            };

            return $modal.open(modalOptions).result;
        }
    }

    /* @ngInject */
    function ModalInstance($scope, $modalInstance, options) {
        $scope.title = options.title || 'Titel';
        $scope.message = options.message || '';
        $scope.okText = options.okText || 'Ok';
        $scope.cancelText = options.cancelText || 'Annuleren';
        $scope.ok = function () {
            $modalInstance.close('ok');
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }

    /* @ngInject */
    function ResetPasswordModalInstance($scope, $modalInstance, options) {
        $scope.title = options.title || 'Paswoord opnieuw instellen';
        $scope.message = options.message || 'Geef het nieuwe paswoord in.';
        $scope.okText = options.okText || 'Wijzig';
        $scope.cancelText = options.cancelText || 'Annuleren';
        $scope.password = '';
        $scope.confirmPassword = '';
        $scope.ok = function () {
            $modalInstance.close({password: $scope.password});
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }

    function registerModelDialog($templateCache) {
        $templateCache.put('modalDialog.tpl.html',
            '<div>' +
            '    <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" ' +
            '            aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '        <h3>{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '        <p>{{message}}</p>' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" data-ng-click="ok()">{{okText}}</button>' +
            '        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>' +
            '    </div>' +
            '</div>');
    }

    function registerResetPasswordDialog($templateCache) {
        $templateCache.put('resetPasswordDialog.tpl.html',
            '<div>' +
            '    <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" ' +
            '            aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '        <h3>{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '        <p>{{message}}</p>' +
            '        <div class="form-group">' +
            '           <label class="control-label">Paswoord</label>' +
            '           <input type="password" data-ng-model="password" placeholder="Nieuw paswoord" class="form-control">' +
            '        </div>' +
            '        <div class="form-group">' +
            '           <label class="control-label">Herhaal password</label>' +
            '           <input type="password" data-ng-model="confirmPassword" placeholder="Herhaal paswoord" class="form-control">' +
            '        </div>' +
            '        <div class="form-group">' +
            '           <span class="text-danger" data-ng-show="password !== confirmPassword && password !== \'\'">De paswoorden komen niet overeen.</span>' +
            '        </div>' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" data-ng-click="ok()" data-ng-disabled="password !== confirmPassword || password === \'\'">{{okText}}</button>' +
            '        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>' +
            '    </div>' +
            '</div>');
    }
})();