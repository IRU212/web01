<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContributionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IllustrationController;
use App\Http\Controllers\MyselfController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//作品ホーム
Route::prefix('/home')->group(function(){
    Route::get('/',[HomeController::class,'index']);
    Route::get('/{id}',[HomeController::class,'show']);
});

Route::post('/test',[TestController::class,'store']);

Route::prefix('/contribution')->group(function(){
    Route::get('/contribution',[ContributionController::class,'store']);
    Route::post('/contribution',[ContributionController::class,'store']);
});

//自分の作品
Route::prefix('/myself')->group(function(){
    Route::get('/',[MyselfController::class,'index']);
    Route::get('/{id}',[MyselfController::class,'show']);
    Route::get('/{id}/edit',[MyselfController::class,'edit']);
    Route::get('/{id}/update',[MyselfController::class,'update']);
    Route::post('/{id}/edit',[MyselfController::class,'edit']);
    Route::post('/{id}/update',[MyselfController::class,'update']);
});

// チャット機能
Route::prefix('/chat')->group(function(){
    Route::get('/',[ChatController::class,'index']);
    Route::get('/store/{id}',[ChatController::class,'store']);
    Route::post('/store/{id}',[ChatController::class,'store']);
});