<?php

namespace App\Http\Controllers;

use App\Models\Myself;
use Illuminate\Http\Request;

class MyselfController extends Controller
{
    public function index()
    {
        $myself = Myself::all();
        return response()->json(
            $myself,
            200
        );
    }

    public function show($id)
    {
        $myself = Myself::find($id);
        $dataid = $id;
        return response()->json(
            [
                'myself' => $myself,
                'dataid'=> $dataid
            ]
        );
    }

    public function update(Request $request,$id){
        $myself = Myself::find($id);
        $myself->title = $request->title;
        $myself->text = $request->text;
        $myself->save();
        return response()->json($myself);
    }

    public function delete($id){
        $myself = Myself::find($id);
        $myself->delete();
        return redirect()->route('myself');
    }
}
