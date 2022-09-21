<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Illustration extends Model
{
    protected $table = 'illustrations';

    protected $filable = [
        'id',
        'title',
        'image',
        'text',
        'user_id'
    ];
}
