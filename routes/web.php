<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\ClientController;


//Ejemplo de como esta compuesta la ruta
// Route::inertia('clients', 'clients')->name('clients');
//               |url de la ruta| |componente de react| |nombre de la ruta|

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
    ])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    //->->->->->-<-<-<-<-<-<-<-<--<-<--_>->_--<-<-<-<
    //Todo deberia estar aca dentro pero para evitar loguearme lo saco
    //->->->->->-<-<-<-<-<-<-<-<--<-<--_>->_--<-<-<-<
});

//Menu principal
    //Dashboard
Route::inertia('dashboard', 'dashboard')->name('dashboard');
    
    //Trabajos
Route::inertia('jobs', 'jobs')->name('jobs');

    //Cotizaciones
Route::inertia('quotes', 'quotes')->name('quotes');

    //Clientes
Route::get('/clients', [ClientController::class, 'index'])->name('clients');
Route::post('/clients/new', [ClientController::class, 'store'])->name('clients.store');


require __DIR__.'/settings.php';