<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Voice;

class VoiceController extends Controller {
    public function save(Request $request) {
        $voice = new Voice();
        $voice->email = $request->email;
        $voice->text = $request->text;
//        $path=storage_path(enc_decr('enc', 'uploads').'/'.enc_decr('enc', auth()->user()->id).'/'.auth()->user()->avatar );
//        $notification->user_ids = json_encode($users);
        $voice->save();
        return response()->json([
            'email' => $request->email,
            'text' => $request->ip(),
            'request' => $request
        ]);
    }
}
