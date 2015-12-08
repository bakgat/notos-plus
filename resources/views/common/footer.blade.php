<div class="footer fixed">
    <div class="pull-right">
        <!--10GB of <strong>250GB</strong> Free.-->
    </div>
    <div>
        <strong>&copy;</strong>
        @if(str_contains(Request::server('SERVER_NAME'), 'de4winden'))
            de scholengemeenschap De 4 Winden.
        @endif
        @if(str_contains(Request::server('SERVER_NAME'), 'klimtoren'))
            VBS De Klimtoren
        @endif
        2014-<% date('Y') %>
    </div>
</div>
