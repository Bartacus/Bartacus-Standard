<?php

declare(strict_types=1);

/**
 * This is a special fixer for fixing ext_localconf.php and ext_tables.php
 * files which require special handling because of the cache concatenation.
 */

$finder = PhpCsFixer\Finder::create()
    ->in('app')
    // all your local typo3 extensions you're developing
    ->in('web/typo3conf/ext/project')
    // our special files we are fixing
    ->name('ext_localconf.php')
    ->name('ext_tables.php')
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'array_syntax' => ['syntax' => 'short'],
        'combine_consecutive_unsets' => true,
        'dir_constant' => true,
        'heredoc_to_nowdoc' => true,
        'linebreak_after_opening_tag' => true,
        'no_useless_else' => true,
        'no_useless_return' => true,
        'ordered_imports' => true,
        'strict_comparison' => true,
        'strict_param' => true,
        'ternary_to_null_coalescing' => true,
    ])
    ->setRiskyAllowed(true)
    ->setFinder($finder)
    ->setUsingCache(true)
    ->setCacheFile('.typo3.php_cs.cache')
;
