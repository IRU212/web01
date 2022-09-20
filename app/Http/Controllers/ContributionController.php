<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use Illuminate\Http\Request;

class ContributionController extends Controller
{
    public function store(Request $request){

        //画像保存処理
        // $image = $request->file('image');
        // $path = isset($image) ? $image->store('items', 'public') : '';

        // $imgname = $request->file('image')->getClientOriginalName()

        $reimg = $request->image->name;

        $contribution = new Contribution();
        $contribution->title = $request->title;
        $contribution->text = $request->text;
        $contribution->image = $reimg;
        $contribution->user_id = $request->user_id;
        $contribution->save();
        return response()->json($contribution);
    }
}
