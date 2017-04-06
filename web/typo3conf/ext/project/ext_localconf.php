<?php

if (!\defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Workaround as long as https://github.com/Bartacus/BartacusBundle/issues/55 is not fixed
$_EXTKEY = 'app';
global $kernel;
require $kernel->getRootDir().'/ext_localconf.php';
