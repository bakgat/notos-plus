@extends('auth.master')

@section('content')

    <div class="middle-box text-center loginscreen  animated fadeInDown">

        <div>
            <div>

                <h1 class="logo-name">⋂⏁∫+</h1>

            </div>
            <h3>Welkom bij noTos+</h3>

            <p>Het beheersysteem
                @if(str_contains(Request::server('SERVER_NAME'), 'de4winden'))
                    voor de scholengemeenschap De 4 Winden.
                @endif
                @if(str_contains(Request::server('SERVER_NAME'), 'klimtoren'))
                    <!--van VBS De Klimtoren-->
                    voor de scholengemeenschap De 4 Winden.
                @endif
            </p>

            @foreach($errors->all() as $error)
                <p class="alert alert-danger">{!!$error!!}</p>
            @endforeach
            <form method="POST">
                <div class="form-group @if($errors && count($errors)>0) animated shake @endif">
                    <input type="text" id="username" name="username" value="{!! Input::old('username') !!}"
                           class="form-control"
                           placeholder="Gebruikersnaam" required>
                </div>
                <div class="form-group @if($errors && count($errors)>0) animated shake @endif">
                    <input type="password" id="password" name="password" class="form-control" placeholder="Paswoord"
                           required>
                </div>
                <div class="text-center">
                    <input type="submit" value="Aanmelden" class="btn btn-primary block full-width m-b">
                </div>

                <a href="{!! route('password.remind') !!}">
                    <small>Paswoord vergeten?</small>
                </a>

                <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            </form>
        </div>

        <p class="m-t">
            <small>
                @if(str_contains(Request::server('SERVER_NAME'), 'de4winden'))
                    De 4 Winden
                @endif
                @if(str_contains(Request::server('SERVER_NAME'), ['klimtoren']))
                    <!--VBS De Klimtoren-->
                    De 4 Winden
                    @endif
                    &copy; 2015
            </small>
        </p>
    </div>
    </div>

@endsection
