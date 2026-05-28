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
        Schema::create('work_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')
                ->constrained()
                ->onDelete('cascade');
            $table->timestamps();
            $table->string("title");
            $table->text("description");
            $table->enum("priority",["low","medium","high","urgent"])->default("medium");
            $table->enum("status",["pending","in_progress","completed","cancelled"])->default("pending");
            $table->date("scheduled_date")->nullable();
            $table->date("completed_at")->nullable();
            $table->string("adress")->nullable();
            $table->decimal("estimated_cost","10","2")->nullable();
            $table->decimal("final_cost","10","2")->nullable();
            $table->string("notes")->nullable();
            $table->date("created_by");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_orders');
    }
};
