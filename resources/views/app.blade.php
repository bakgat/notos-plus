<!DOCTYPE html>
<html lang="nl" ng-app="notosplus">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf_token" content="<% csrf_token() %>">
    <title data-ng-bind="title">noTos+</title>

    <style>
        /* This helps the ng-show/ng-hide animations start at the right place. */
        /* Since Angular has this but needs to load, this gives us the class early. */
        .ng-hide {
            display: none !important;
        }
    </style>
    @include('common.favicon')
    @include('common.stylesheets')
</head>

<body ng-controller="ShellController as shell">
<div id="splash-page" data-ng-show="shell.showSplash" class="dissolve-animation">
    <div class="page-splash">

        <div class="page-splash-message">
            <div class="sk-spinner sk-spinner-wandering-cubes">
                <div class="sk-cube1"></div>
                <div class="sk-cube2"></div>
            </div>
            noTos+
        </div>

    </div>
</div>
@include('common.content')

@include('common.scripts')
</body>
</html>