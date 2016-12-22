<?php

declare(strict_types = 1);

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = [
    '_DEFAULT' => [
        'init' => [
            'enableCHashCache' => true,
            'appendMissingSlash' => 'ifNotFile,redirect',
            'adminJumpToBackend' => true,
            'enableUrlDecodeCache' => true,
            'enableUrlEncodeCache' => true,
            'emptyUrlReturnValue' => '/',
        ],
        'pagePath' => [
            'type' => 'user',
            'userFunc' => 'Tx\\Realurl\\UriGeneratorAndResolver->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
            'rootpage_id' => '1',
        ],
        'fileName' => [
            'defaultToHTMLsuffixOnPrev' => 0,
            'acceptHTMLsuffix' => 1,
            'index' => [
                'print' => [
                    'keyValues' => [
                        'type' => 98,
                    ],
                ],
            ],
        ],
        'preVars' => [
            0 => [
                'GETvar' => 'L',
                'valueMap' => [
                    'en' => 0,
                ],
                'valueDefault' => 'en', // use if always redirect to default language is wanted
                'noMatch' => 'bypass',
            ],
        ],
    ],
];
