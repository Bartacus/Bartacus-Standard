<?php

declare(strict_types=1);

$EM_CONF[$_EXTKEY] = [
    'title' => 'Project',
    'description' => '',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '8.6.0-8.99.99',
            'realurl' => '2.1.0-2.99.99',
            'rte_ckeditor' => '8.6.0-8.99.99',
        ],
        'conflicts' => [
            'css_styled_content' => '*',
            'fluid_styled_content' => '*',
            'themes' => '*',
            'fluidpages' => '*',
            'dyncss' => '*',
        ],
    ],
];
