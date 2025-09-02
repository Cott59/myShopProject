<?php

// контроллер для работы с моделью базы данных

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductController extends Controller
{
    public function allProduct(): JsonResponse
    {
        $products = DB::table('products')->paginate(3);
         return response()->json(['products'=>$products]);
    }

    

}
