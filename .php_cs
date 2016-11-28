<?php

declare(strict_types=1);

$finder = Symfony\CS\Finder::create()
    ->in('app')
    ->in('src')
    ->in('tests')
;

return Symfony\CS\Config::create()
    ->fixers([
        '-psr0', // only because of symfony standard lowercase tests folder
        'combine_consecutive_unsets',
        'no_useless_else',
        'no_useless_return',
        'ordered_use',
        'php_unit_construct',
        'php_unit_dedicate_assert',
        'php_unit_strict',
        'phpdoc_order',
        'short_array_syntax',
        'silenced_deprecation_error',
        'strict',
        'strict_param',
    ])
    ->finder($finder)
    ->setUsingCache(true)
;
