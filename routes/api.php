<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class,'allProduct']); 
Route::get('/candles', [ProductController::class,'getCandles']); 

Route::get('/product/{id}', [ProductController::class,'getProduct']); 

// Route::get('/products', function (Request $request) {
    
//     return $request->json();
// });
//->middleware('auth:sanctum');
