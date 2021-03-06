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
            inputDialog: inputDialog,
            resetPasswordDialog: resetPasswordDialog,
            selectImageDialog: selectImageDialog
        };

        registerModalDialog($templateCache);
        registerResetPasswordDialog($templateCache);
        registerSelectImageDialog($templateCache);
        registerInputDialog($templateCache);

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

        function inputDialog(title, msg, okText, cancelText) {
            var modalOptions = {
                templateUrl: 'inputDialog.tpl.html',
                controller: InputModalInstance,
                keyboard: true,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            okText: okText,
                            cancelText: cancelText,
                            input: ''
                        }
                    }
                }
            }

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

        function selectImageDialog(type) {
            var modalOptions = {
                templateUrl: 'selectImageDialog.tpl.html',
                controller: SelectImageModalInstance,
                keyboard: true,
                windowClass: 'fullscreen',
                resolve: {
                    options: function () {
                        return {
                            type: type
                        }
                    }
                }
            }
            return $modal.open(modalOptions).result;
        }


    }

    /* @ngInject */
    function ModalInstance($scope, $modalInstance, options) {
        $scope.title = options.title || 'Titel';
        $scope.message = options.message || '';
        $scope.okText = options.okText || 'Ok';
        $scope.cancelText = options.cancelText || 'Annuleren';
        $scope.ok = ok;
        $scope.cancel = cancel;

        function ok() {
            $modalInstance.close('ok');
        }

        function cancel() {
            $modalInstance.dismiss('cancel');
        }
    }

    /* @ngInject */
    function InputModalInstance($scope, $modalInstance, options) {
        $scope.title = options.title || '';
        $scope.message = options.message || '';
        $scope.okText = options.okText || 'Ok';
        $scope.cancelText = options.cancelText || 'Annuleren';
        $scope.input = '';

        $scope.ok = ok;
        $scope.cancel = cancel;

        function ok() {
            $modalInstance.close({
                input: $scope.input
            });
        }

        function cancel() {
            $modalInstance.dismiss('cancel');
        }
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

    /* @ngInject */
    function SelectImageModalInstance($scope, $modalInstance, options, Asset,
                                      Upload, common, Dialog, ProfileService,
                                      $http) {
        $scope.title = options.title || 'Selecteer een afbeelding';
        $scope.files = options.files || [];
        $scope.type = options.type || null;
        $scope.queue = [];
        $scope.selectedFile = null;
        $scope.progress = 0;

        $scope.uploadFiles = uploadFiles;
        $scope.importFromUrl = importFromUrl;

        $scope.insert = insert;
        $scope.cancel = cancel;
        $scope.itemClicked = itemClicked;
        $scope.backgroundImage = makeBGImageStyle;

        load();
        ///////////////////////////////////////////////////////

        function load() {
            if ($scope.type === 'website') {
                Asset.getImagesForWebsites().then(imagesCompleted);
            } else {
                Asset.getImages($scope.type).then(imagesCompleted);
            }
            function imagesCompleted(response) {
                $scope.files = response;
            }
        }

        function insert() {
            $modalInstance.close({
                file: $scope.selectedFile
            }); //TODO: set select image here
        }

        function cancel() {
            $modalInstance.dismiss('cancel');
        }

        function itemClicked(file) {
            $scope.selectedFile = file;
        }

        function makeBGImageStyle(file) {
            if (file) {
                var style = 'background-image:url(' + file.thumbpath + ')';
                return style;
            }
        }

        function uploadFiles(files) {
            if (files && files.length) {
                angular.forEach(files, function (file) {
                    file.loading = true;
                    $scope.queue.unshift(file);
                });

                var data = {
                    file: files,
                    type: $scope.type
                }
                if ($scope.type !== 'website') {
                    data.organization = ProfileService.realm();
                }


                Upload.upload({
                    url: 'api/upload',
                    data: data,
                    headers: {'X-CSRF-TOKEN': common.csrfToken()}
                }).then(uploadComplete, uploadError, uploadProgress);
            }

            function uploadProgress(evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                $scope.progress = progressPercentage;
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            }

            function uploadComplete(response) {
                angular.forEach(response.data, function (asset) {
                    $scope.files.unshift(asset);
                });
                $scope.queue = [];
                $scope.selectedFile = $scope.files[0] || null;
            }

            function uploadError(response) {
                console.log(response.status);
            }
        }

        function importFromUrl() {
            Dialog.inputDialog('Importeer URL', 'Importeer een afbeelding van het internet', 'Importeer', 'Annuleren')
                .then(importUrl);

            function importUrl(result) {
                var data = {
                    url: result.input,
                    type: $scope.type
                }
                if ($scope.type !== 'website') {
                    data.organization = ProfileService.realm();
                }

                $http.post('/api/upload/url', data)
                    .then(postComplete);

                function postComplete(response) {
                    $scope.files.unshift(response.data);
                    $scope.selectedFile = $scope.files[0] || null;
                }
            }
        }
    }


    /* REGISTER MODALS -------------------------- */
    function registerModalDialog($templateCache) {
        $templateCache.put('modalDialog.tpl.html',
            '<div>' +
            '    <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" ' +
            '            aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '        <h3>{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '        <p data-ng-bind-html="message"></p>' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" data-ng-click="ok()">{{okText}}</button>' +
            '        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>' +
            '    </div>' +
            '</div>');
    }

    function registerInputDialog($templateCache) {
        $templateCache.put('inputDialog.tpl.html',
            '<div>' +
            '    <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" ' +
            '            aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '        <h3>{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '        <p>{{message}}</p>' +
            '       <input type="text" class="form-control" data-ng-model="input" placeholder="{{placeholderText}}"> ' +
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

    function registerSelectImageDialog($templateCache) {
        $templateCache.put('selectImageDialog.tpl.html',
            '<div class="assets-manager">' +
            '   <div class="modal-header">' +
            '       <button type="button" class="close" data-dismiss="modal"' +
            '           aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '       <h3>{{title}}</h3>' +
            '   </div>' +
            '   <div class="modal-body" ngf-drop="uploadFiles($files)" class="drop-zone" ngf-multiple="true" ngf-pattern="\'image/*\'"' +
            '           ngf-drag-over-class="\'drop-zone-hover\'">' +
            '       <div class="row">' +
            '           <div class="col-md-7 col-xs-12">' +
            '               <input type="text" class="form-control" placeholder="zoeken">' +
            '           </div>' +
            '           <div class="col-md-5 col-xs-12" style="text-align:right;">' +
            '               <button class="btn btn-info" ngf-select="uploadFiles($files)" multiple="multiple"><i class="fa fa-upload"></i> upload</button>' +
            '               <button class="btn btn-default" data-ng-click="importFromUrl()"><i class="fa fa-globe"></i> importeer van web</button>' +
            '           </div>' +
            '       </div>' +
            '' +
            '       <div class="row m-t-md" >' +
            '           <div class="col-md-8 col-xs-12">' +
            '                <div class="file-list">' +
            '                   <div class="col-md-2 col-xs-4" data-ng-repeat="file in queue">' +
            '' +
            '                       <div class="loader-image" data-ng-if="file.loading"><i class="fa fa-spinner fa-spin"></i></div>' +
            '                       <img class="grid-image thumb" ngf-thumbnail="file" data-ng-if="!file.loading">' +
            '                   </div>' +
            '                   <div class="col-md-2 col-xs-4" data-ng-repeat="file in files" ' +
            '                       data-ng-click="itemClicked(file)" data-ng-class="{\'selected\': file.id == selectedFile.id }">' +
            '                       <a class="grid-image" style="{{backgroundImage(file)}}"></a>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '           <div class="col-md-4 col-xs-hidden assets-preview-container">' +
            '               <img data-ng-src="{{selectedFile.thumbpath}}" data-ng-if="selectedFile" class="img-rounded img-responsive" />' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '' +
            '   <div class="modal-footer">' +
            '       <button class="btn btn-primary" data-ng-click="insert()">Invoegen' +
            '       </button>' +
            '       <button class="btn btn-info" data-ng-click="cancel()">Annuleren</button>' +
            '   </div>' +
            '</div>'
        );
    }
})();