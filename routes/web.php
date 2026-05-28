<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    //Todo deberia estar aca dentro pero para evitar loguearme lo saco
});

Route::inertia('dashboard', 'dashboard')->name('dashboard');
Route::inertia('jobs', 'jobs')->name('jobs');
Route::inertia('quotes', 'quotes')->name('quotes');

Route::inertia('clients', 'clients')->name('clients');

Route::post('/clients', [ClientController::class, 'store']);


require __DIR__.'/settings.php';
