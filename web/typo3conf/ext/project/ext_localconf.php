<?php

declare(strict_types=1);

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Workaround as long as https://github.com/Bartacus/BartacusBundle/issues/55 is not fixed
$_EXTKEY = 'app';
require dirname(dirname(dirname(dirname(__DIR__)))).'/app/ext_localconf.php';
