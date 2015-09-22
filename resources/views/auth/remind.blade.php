@extends('notos::auth.master')

@section('content')
    <div class="lock-word animated fadeInDown">
        <span class="first-word">FORGOT</span><span>PWD</span>
    </div>
    <div class="middle-box text-center lockscreen animated fadeInDown">
        <div>
            <div class="m-b-md">
                <img alt="image"
                     src="{!! asset('/img/auth/loginlock.png') !!}" style="max-height: 140px;">
            </div>
            <h3>Paswoord vergeten?</h3>

            <p><strong>Geen probleem.</strong><br>
                Geef uw gebruikersnaam op en wij sturen u een e-mail zodat u een
                nieuw paswoord kan instellen.</p>

            @if (Session::has('error'))
                <p class="alert alert-danger">{!!trans(Session::get('reason'))!!}</p>
            @elseif (Session::has('success'))
                <p class="alert alert-success">Er werd een e-mail met een herstel-link gestuurd.</p>
            @endif

            {!! Form::open(['route' => 'password.request','class'=>'m-t']) !!}

            <div class="form-group">
                {!! Form::text('email',Input::old('email'),['class'=>'form-control', 'placeholder'=>
                'Gebruikersnaam','required'=>'']) !!}
            </div>

            {!!Form::submit('Verstuur',['class'=>'btn btn-warning block full-width'])!!}
            <a href="{!! route('login') !!}">
                <small>Ik weet het weer!</small>
            </a>

            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            {!!Form::close()!!}
        </div>
    </div>
@endsection