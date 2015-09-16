<!DOCTYPE html>
<html lang="nl" ng-app="notosplus">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title data-ng-bind="title">noTos+</title>

    <style>
        /* This helps the ng-show/ng-hide animations start at the right place. */
        /* Since Angular has this but needs to load, this gives us the class early. */
        .ng-hide {
            display: none!important;
        }
    </style>

    @include('common.stylesheets')
</head>

<body ng-controller="ShellController as shell">
<div id="splash-page" data-ng-show="shell.showSplash" class="dissolve-animation">
    <div class="page-splash">
        <div class="page-splash-message">
            noTos+
            <p class="font-xs">bezig met laden...</p>
        </div>
    </div>
</div>
@include('common.content')

@include('common.scripts')
</body>
</html>