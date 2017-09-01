<?php

if (!\defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Permanent workaround for https://github.com/Bartacus/BartacusBundle/issues/55
$_EXTKEY = 'app';
require \dirname(PATH_site).'/app/ext_localconf.php';
