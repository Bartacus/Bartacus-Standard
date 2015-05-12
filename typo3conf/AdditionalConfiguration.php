<?php

require_once PATH_site.'fileadmin/app/AppKernel.php';

use TYPO3\CMS\Core\Utility\GeneralUtility;

$context = GeneralUtility::getApplicationContext();

$kernel = new AppKernel((string)$context, $context->isDevelopment());
$kernel->boot();
