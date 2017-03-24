<?php

declare(strict_types=1);

use PhpCsFixer\Finder;

/**
 * This is a special fixer for fixing ext_localconf.php and ext_tables.php
 * files which require special handling because of the cache concatenation.
 */
require __DIR__.'/.php_cs';

/* @var Finder $finder */
$finder = clone $commonFinder;
$finder
    // our special files we are fixing
    ->path('ext_localconf.php')
    ->path('ext_tables.php')
;

return PhpCsFixer\Config::create()
    ->setRules($commonRules)
    ->setRiskyAllowed(true)
    ->setFinder($finder)
    ->setUsingCache(true)
    ->setCacheFile('.typo3.php_cs.cache')
;
