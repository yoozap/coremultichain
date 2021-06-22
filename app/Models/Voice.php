<?php
namespace App\Models;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Voice extends Model
{
    /*
     * Table Name Specified
     */
    protected $table = 'voice';

    protected $fillable = ['email', 'text', 'images'];
}
