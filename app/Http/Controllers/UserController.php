<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function index(){
      $users = \App\User::paginate(10);
      return \Response::json($users);
  }
}
