<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function store(Request $request){
        $test = new Test;
        $file_name = $request->image->getClientOriginalName();
        $path = $request->image->storeAs('public/image/',$file_name);
        $test->title = $request->title;
        $test->image = $file_name;
        $test->save();
        return response()->json($test);
    }
}
