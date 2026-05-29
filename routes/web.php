<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\ClientController;


Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    //->->->->->-<-<-<-<-<-<-<-<--<-<--_>->_--<-<-<-<
    //Todo deberia estar aca dentro pero para evitar loguearme lo saco
    //->->->->->-<-<-<-<-<-<-<-<--<-<--_>->_--<-<-<-<
});

Route::inertia('dashboard', 'dashboard')->name('dashboard');
Route::inertia('jobs', 'jobs')->name('jobs');
Route::inertia('quotes', 'quotes')->name('quotes');

Route::inertia('clients', 'clients')->name('clients');

Route::post('/clients', [ClientController::class, 'store']);


require __DIR__.'/settings.php';