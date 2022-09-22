<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $contributions =  Contribution::all();
        return response()->json([
            'contributions' => $contributions,
            200
        ]);
    }

    public function show($id){
        $contributions =  Contribution::find($id);
        return response()->json([
            'contributions' => $contributions,
            200
        ]);
    }
}
