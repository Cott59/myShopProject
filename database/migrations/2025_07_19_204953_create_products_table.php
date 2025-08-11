<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id()->primary()->autoIncrement();
            $table->string('name');
            $table->string('type')->nullable();
            $table->integer('price')->nullable();
            $table->string('articul')->nullable();
            $table->string('material')->nullable();
            $table->string('inStock')->nullable();
            $table->string('height')->nullable();
            $table->string('url')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        

        Schema::create('product_quantity', function (Blueprint $table) {
            $table->id()->primary()->autoIncrement();
            $table->unsignedBigInteger('products_id');
            $table->integer('quantity')->nullable();
            $table->timestamps();


            $table->foreign('products_id')->references('id')->on('products')->onDelete('cascade');
        });


    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');       
        Schema::dropIfExists('product_quantity');

    }
};
