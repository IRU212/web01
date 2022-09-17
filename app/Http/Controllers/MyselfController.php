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
}
