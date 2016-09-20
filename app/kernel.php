<?php declare(strict_types=1);

/*
 * This file is part of the Bartacus Standard Edition.
 *
 * The Bartacus Standard Edition is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Bartacus Standard Edition is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the Bartacus Standard Edition.  If not, see <http://www.gnu.org/licenses/>.
 */

use Symfony\Component\Debug\Debug;

defined('SYMFONY_ENV') || define('SYMFONY_ENV', getenv('SYMFONY_ENV') ?: 'prod');
defined('SYMFONY_DEBUG') || define('SYMFONY_DEBUG',
    filter_var(getenv('SYMFONY_DEBUG') ?: SYMFONY_ENV === 'dev', FILTER_VALIDATE_BOOLEAN));

/** @var \Composer\Autoload\ClassLoader $loader */
$loader = require __DIR__.'/autoload.php';
include_once __DIR__.'/../var/bootstrap.php.cache';

if (SYMFONY_DEBUG) {
    Debug::enable();
}

$kernel = new AppKernel(SYMFONY_ENV, SYMFONY_DEBUG);
$kernel->loadClassCache();
$kernel->boot();

return [$loader, $kernel];
