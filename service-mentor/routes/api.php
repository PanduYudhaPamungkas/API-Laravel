<?php

use App\Http\Controllers\MentorController;
use Illuminate\Support\Facades\Route;

Route::get('/mentors', [MentorController::class, 'index']);
Route::post('/mentors', [MentorController::class, 'store']);
Route::get('/mentors/{id}', [MentorController::class, 'show']);
Route::put('/mentors/{id}', [MentorController::class, 'update']);
Route::delete('/mentors/{id}', [MentorController::class, 'destroy']);
