<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        $chat = Chat::latest()->get();
        return response()->json($chat,200);
    }

    public function store(Request $request,$id)
    {
        $chat = new Chat();
        $chat->text = $request->text;
        $chat->contribution_id = $id;
        $chat->user_id = $id;
        $chat->save();
        return response()->json($chat);
    }
}
