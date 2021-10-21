<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RemoveHistory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remove:history';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove search history every hour.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        app('App\Http\Controllers\SearchController')->removeHistory();
    }
}
