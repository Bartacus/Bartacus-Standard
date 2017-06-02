<?php

declare(strict_types = 1);

use Bartacus\Bundle\BartacusBundle\Config\ConfigLoader;
use Symfony\Component\HttpKernel\Kernel;
use TYPO3\CMS\Core\Utility\GeneralUtility;

if (GeneralUtility::getApplicationContext()->isDevelopment()) {
    $GLOBALS['TYPO3_CONF_VARS']['BE']['debug'] = true;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['sessionTimeout'] = 31536000; // One year!
    $GLOBALS['TYPO3_CONF_VARS']['FE']['debug'] = true;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['sqlDebug'] = 1;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['displayErrors'] = 1;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['systemLogLevel'] = 1;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['enableDeprecationLog'] = 1;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['clearCacheSystem'] = true;
}

$kernel = $GLOBALS['kernel'];
if ($kernel instanceof Kernel) {
    /** @var ConfigLoader $configLoader */
    $configLoader = $kernel->getContainer()->get('bartacus.config_loader');
    $configLoader->loadFromAdditionalConfiguration();
}
