<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul nt-side-navigation class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element" dropdown>
                    <span>
                        <img alt="{{shell.profile.fullName}}" class="img-circle" width="50" height="50"
                             data-ng-src="{{shell.avatar}}">
                    </span>
                    <a class="dropdown-toggle" dropdown-toggle href>
                            <span class="clear">
                                <span class="block m-t-xs">
                                    <strong class="font-bold">{{shell.profile.fullName}}</strong> <b class="caret"></b>
                                </span>
                            </span>
                    </a>
                    <ul class="dropdown-menu animated flipInY m-t-xs">
                        <li><a ui-sref="my.profile">Profiel</a></li>
                        <li class="divider"></li>
                        <li><a href="/auth/logout">Afmelden</a></li>
                    </ul>
                </div>
                <!-- . USER NAVIGATION -->


                <div class="logo-element">
                    ⋂⏁∫+
                </div>

            </li>

            <li ui-sref-active="active">
                <a ui-sref="index.dashboard">
                    <nt-fa name="th-large"></nt-fa>
                    <span class="nav-label">Dashboard</span></a>
            </li>


            @if(Auth::user()->is('sa') &&
                (str_contains(Request::server('SERVER_NAME'), 'klimtoren')))

                <li ng-class="{active: $state.includes('manage')}">
                    <a href="">
                        <nt-fa name="cogs"></nt-fa> <span
                                class="nav-label">Beheer</span> <span
                                class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level" ng-class="{in: $state.includes('manage')}">
                        <!-- USERS -->
                        <li ui-sref-active="active"><a ui-sref="manage.users">Gebruikers</a></li>
                        <!-- .USERS -->

                        @if(Auth::user()->is('sa'))
                            <li class="separator"></li>
                            <!-- ROLES -->
                            <li ui-sref-active="active"><a ui-sref="manage.roles">Rollen</a></li>
                            <!-- .ROLES -->
                        @endif
                    </ul>
                </li>
                @endif

                @if(Auth::user()->is('website_moderator|book_moderator|sa'))
                        <!-- LIBRARY -->
                <li ng-class="{active: $state.includes('library')}">
                    <a href="#">
                        <nt-fa name="institution"></nt-fa>
                        <span class="nav-label">Bibliotheek</span> <span
                                class="fa arrow"></span></a>
                    <ul class="nav nav-second-level" ng-class="{in: $state.includes('library')}">
                        @if(Auth::user()->is('website_moderator|sa'))
                                <!-- WEBSITES -->
                        <li ui-sref-active="active">
                            <a ui-sref="library.websites">
                                <nt-fa name="globe"></nt-fa>
                                Websites</a>
                        </li>
                        <!-- .WEBSITES -->
                        @endif

                        @if(Auth::user()->is('book_moderator|sa') && str_contains(Request::server('SERVER_NAME'), 'klimtoren'))
                                <!-- BOOKS -->
                        <li ui-sref-active="active">
                            <a ui-sref="library.books">
                                <nt-fa name="book"></nt-fa>
                                Boeken</a>
                        </li>
                        <!-- .BOOKS -->
                        @endif
                    </ul>
                </li>
                <!-- .LIBRARY -->
            @endif

            @if(Auth::user()->is('sa') && str_contains(Request::server('SERVER_NAME'), 'klimtoren'))
                <li ng-class="{active: $state.includes('portal')}">
                    <a href="javascript:void(0);">
                        <nt-fa name="globe"></nt-fa>
                        <span class="nav-label">Portaal</span>
                        <span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level" ng-class="{in: $state.include('portal')}">
                        <li ui-sref-active="active">
                            <a ui-sref="portal.blogs">
                                <nt-fa name="online"></nt-fa>
                                Blogs
                            </a>
                        </li>
                        <li ui-sref-active="active">
                            <a ui-sref="portal.calendar">
                                <nt-fa name="calendar"></nt-fa>
                                Kalender
                            </a>
                        </li>
                    </ul>
                    </a>
                </li>
            @endif
        </ul>

    </div>
</nav>