<?php
/**
 * Created by PhpStorm.
 * User: karlvaniseghem
 * Date: 17/07/15
 * Time: 07:53
 */

namespace NotosPlus\Http\Controllers;


use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{

    /**
     * Create a new Index controller instance.
     *
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the main page.
     */
    public function getApp()
    {
        $user = Auth::user();
        return view('app');
    }
}