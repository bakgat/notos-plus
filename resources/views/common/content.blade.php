<!-- Wrapper-->
<div id="wrapper">

    @include('common.navigation')

            <!-- Page wraper -->
    <!-- ng-class with current state name give you the ability to extended customization your view -->
    <div id="page-wrapper" class="gray-bg {{$state.current.name}}">

        <!-- Page wrapper -->
        @include('common.topnavbar')

                <!-- Main view  -->
        <div ui-view="content" data-ng-show="!shell.isBusy"></div>

        <div data-ng-show="shell.isBusy" class="dissolve-animation">

            <div class="sk-spinner sk-spinner-cube-grid">
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
                <div class="sk-cube"></div>
            </div>
            <div class="text-center small description m-t-xs">bezig met laden...</div>

        </div>


        <!-- Footer -->
        @include('common.footer')

    </div>
    <!-- End page wrapper-->

</div>
<!-- End wrapper-->