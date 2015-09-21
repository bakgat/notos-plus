<?php

namespace NotosPlus\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \NotosPlus\Console\Commands\SeedAll::class,
        \NotosPlus\Console\Commands\SeedCurricula::class,
        \NotosPlus\Console\Commands\SeedWebsites::class,
        \NotosPlus\Console\Commands\SeedStartup::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('inspire')
                 ->hourly();
    }
}
