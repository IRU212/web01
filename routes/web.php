<?php

use App\Http\Controllers\MyselfController;
use App\Http\Controllers\TestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Arg;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Dashboard',[
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/chat', function () {
    return Inertia::render('Chat',[
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/contribution', function () {
    return Inertia::render('Contribution',[
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified'])->name('contribution');

Route::get('/myself', function () {
    return Inertia::render('Myself',[
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified'])->name('myself');

require __DIR__.'/auth.php';

Route::get('/test', function () {
    return Inertia::render('Test',[
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified']);

Route::get('/myself/{id}/delete',[MyselfController::class,'delete']);
Route::post('/myself/{id}/delete',[MyselfController::class,'delete']);