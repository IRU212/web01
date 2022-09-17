<?php

use App\Http\Controllers\ContributionController;
use App\Http\Controllers\IllustrationController;
use App\Http\Controllers\MyselfController;
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

Route::get('/dashboard',[IllustrationController::class,'index']);

// Route::get('/contribution',[IllustrationController::class,'index']);
Route::get('/contribution',[ContributionController::class,'store']);
Route::post('/contribution',[ContributionController::class,'store']);

Route::get('/myself',[MyselfController::class,'index']);
Route::get('/myself/{id}',[MyselfController::class,'show']);