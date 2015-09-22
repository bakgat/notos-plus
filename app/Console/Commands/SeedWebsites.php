<?php

namespace NotosPlus\Console\Commands;

use Bakgat\Notos\Seeds\Seed;
use Illuminate\Console\Command;

class SeedWebsites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:websites';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description.';

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
     * @return mixed
     */
    public function handle()
    {
        if ($this->confirm('Sure to (re-)seed the tables? [y|N]')) {
            $seed = new Seed();
            $seed->SeedSites();

            $this->info('Seeded noTos+ database.');
        }
    }
}
