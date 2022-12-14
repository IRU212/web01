<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contribution extends Model
{
    protected $table = 'contributions';

    protected $fillable = [
        'id',
        'title',
        'text',
        'image',
        'user_id'
    ];
}
