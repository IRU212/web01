<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use App\Models\Illustration;
use Illuminate\Http\Request;

class ContributionController extends Controller
{
    public function store(Request $request){
        //storageに画像保存
        $file_name = $request->image->getClientOriginalName();
        $request->image->storeAs('public/image/',$file_name);

        // $path = '"'.'../../../storage/app/public/image/'.$file_name.'"';
        $path = 'storage/image/'.$file_name;

        //dbに保存
        $illustration = new Contribution();
        $illustration->image = $path;
        $illustration->title = $request->title;
        $illustration->text = $request->text;
        $illustration->user_id = $request->user_id;
        $illustration->save();
        
        return response()->json($illustration);
    }
}