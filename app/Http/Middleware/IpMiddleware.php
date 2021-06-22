<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IpMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
//        dd($request->ip());

        if ($request->ip() != "127.0.0.1") {
            // here instead of checking a single ip address we can do collection of ips
            //address in constant file and check with in_array function
            return redirect('home');
        }
        return $next($request);
    }
}
