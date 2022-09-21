<?php

namespace App\Http\Controllers;

use App\Models\Illustration;
use App\Models\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function store(Request $request){
        //storageに画像保存
        $file_name = $request->image->getClientOriginalName();
        $request->image->storeAs('public/image/',$file_name);

        //dbに保存
        $illustration = new Illustration();
        $illustration->image = $file_name;
        $illustration->title = $request->title;
        $illustration->text = $request->text;
        $illustration->user_id = $request->user_id;
        $illustration->save();
        
        return response()->json($illustration);
    }
}