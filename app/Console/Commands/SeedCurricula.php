<?php

namespace NotosPlus\Console\Commands;

use Bakgat\Notos\Domain\Model\Curricula\CourseRepository;
use Bakgat\Notos\Seeds\Seed;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;

class SeedCurricula extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:curricula';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeding the curricula database when empty';

    /**
     * Create a new command instance.
     *
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
            $seed->SeedCurricula();

            $this->info('Seeded noTos+ database.');
        }

    }
}
