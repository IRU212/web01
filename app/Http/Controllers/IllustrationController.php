<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IllustrationController extends Controller
{
    public function index(){
        return Inertia::render('User/Index',[
            'users' => User::all()
        ]);
    }
}
