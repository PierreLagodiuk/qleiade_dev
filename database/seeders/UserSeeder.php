<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(1)->create();
    }
}
