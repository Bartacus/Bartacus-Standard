<?php

declare(strict_types=1);

$commonFinder = PhpCsFixer\Finder::create()
    ->in('app')
    ->in('src')
    // all your local typo3 extensions you're developing
    ->in('web/typo3conf/ext/project')
;

$commonRules = [
    '@Symfony' => true,
    '@PHP71Migration' => true,
    '@DoctrineAnnotation' => true,
    'align_multiline_comment' => true,
    'array_syntax' => ['syntax' => 'short'],
    'combine_consecutive_unsets' => true,
    'general_phpdoc_annotation_remove' => ['author', 'package', 'subpackage'],
    'heredoc_to_nowdoc' => true,
    'linebreak_after_opening_tag' => true,
    'list_syntax' => ['syntax' => 'short'],
    'mb_str_functions' => true,
    'native_function_invocation' => true,
    'no_null_property_initialization' => true,
    'no_php4_constructor' => true,
    'no_superfluous_elseif' => true,
    'no_unneeded_curly_braces' => true,
    'no_unneeded_final_method' => true,
    'no_unreachable_default_argument_value' => true,
    'no_useless_else' => true,
    'no_useless_return' => true,
    'ordered_class_elements' => true,
    'ordered_imports' => true,
    'php_unit_strict' => true,
    'phpdoc_add_missing_param_annotation' => true,
    'phpdoc_order' => true,
    'phpdoc_types_order' => [
        'null_adjustment' => 'always_last',
        'sort_algorithm' => 'none',
    ],
    'semicolon_after_instruction' => true,
    'strict_comparison' => true,
    'strict_param' => true,
];

$finder = clone $commonFinder;
$finder
    // no declare and use statements allowed, because of cache concatenation
    // so we have to ignore thus files and check them separately.
    ->notPath('ext_localconf.php')
    ->notPath('ext_tables.php')
;

return PhpCsFixer\Config::create()
    ->setRules($commonRules + ['declare_strict_types' => true])
    ->setRiskyAllowed(true)
    ->setFinder($finder)
    ->setUsingCache(true)
;
