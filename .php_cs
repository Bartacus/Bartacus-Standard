<?php

declare(strict_types=1);

$finder = PhpCsFixer\Finder::create()
    ->in('app')
    ->in('src')
    ->in('web/typo3conf/ext/project')
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'array_syntax' => ['syntax' => 'short'],
        'combine_consecutive_unsets' => true,
        'declare_strict_types' => true,
        'dir_constant' => true,
        'heredoc_to_nowdoc' => true,
        'linebreak_after_opening_tag' => true,
        'no_unreachable_default_argument_value' => true,
        'no_useless_else' => true,
        'no_useless_return' => true,
        'ordered_imports' => true,
        'php_unit_strict' => true,
        'phpdoc_order' => true,
        'simplified_null_return' => true,
        'strict_comparison' => true,
        'strict_param' => true,
        'ternary_to_null_coalescing' => true,
    ])
    ->setRiskyAllowed(true)
    ->setFinder($finder)
    ->setUsingCache(true)
;
