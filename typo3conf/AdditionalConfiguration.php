<?php

use Doctrine\Common\Annotations\AnnotationRegistry;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Core\Bootstrap;

$loader = Bootstrap::getInstance()->getEarlyInstance('Composer\\Autoload\\ClassLoader');
AnnotationRegistry::registerLoader([$loader, 'loadClass']);

require_once PATH_site.'fileadmin/app/AppKernel.php';

$environment = (string)GeneralUtility::getApplicationContext();
$environmentCleaned = str_replace('/', '', $environment);

if(file_exists(PATH_site.'typo3conf/AdditionalConfiguration'.$environmentCleaned.'.php')) {
    require PATH_site.'typo3conf/AdditionalConfiguration'.$environmentCleaned.'.php';
}

$kernel = new AppKernel($environment, GeneralUtility::getApplicationContext()->isDevelopment());
$kernel->boot();
